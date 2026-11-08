#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
L6 — 休眠分析服务端（Python 3 标准库，零第三方依赖）。

状态：休眠。无默认启动脚本、不进静态构建、不写进 netlify.toml / package.json。
将来启用：部署本文件 + 填 endpoint + 打开前端开关，前端一行不改。

端点：
  POST /event      公开写入（仅此路径建议经反向代理暴露到公网）
  GET  /summary    聚合查询（Bearer token 鉴权，仅内网可达）
  GET  /dashboard  私有后台静态页（不公网暴露）

隐私：不存原始 IP（仅截断末字节后哈希的短标识用于限流）、不存完整 UA、最短必要保留期。
"""

from __future__ import annotations

import hashlib
import json
import os
import re
import secrets
import sqlite3
import threading
import time
from collections import defaultdict, deque
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit

# ---- 配置（全部来自环境变量，零第三方依赖） ----
BASE_DIR = Path(__file__).resolve().parent
SCHEMA_PATH = BASE_DIR / "schema.sql"
DB_PATH = Path(os.environ.get("ANALYTICS_DB_PATH", str(BASE_DIR / "analytics.db")))
HOST = os.environ.get("ANALYTICS_HOST", "127.0.0.1")  # 默认仅本机，后台不公网暴露
PORT = int(os.environ.get("ANALYTICS_PORT", "8787"))
ADMIN_TOKEN = os.environ.get("ANALYTICS_ADMIN_TOKEN", "")  # 未设置则 /summary 一律拒绝
RETENTION_DAYS = int(os.environ.get("ANALYTICS_RETENTION_DAYS", "90"))
ALLOWED_ORIGIN = os.environ.get("ANALYTICS_ALLOWED_ORIGIN", "*")

MAX_BODY_BYTES = 2048       # 单条事件约 100 字节，2KB 足够且防滥用
RATE_WINDOW_SEC = 10
RATE_MAX_EVENTS = 20        # 每个粗化标识每窗口最多 20 条

EVENT_TYPES = {"page_view", "product_view", "cta_click", "contact_click", "page_error"}
DEVICES = {"desktop", "mobile", "tablet"}
ALLOWED_KEYS = {"e", "p", "l", "s", "t", "r", "d"}
MIN_TIMESTAMP = 1704067200  # 2024-01-01
MAX_TIMESTAMP = 4102444800  # 2100-01-01

SESSION_RE = re.compile(r"^[0-9a-z]{6,8}$")
DOMAIN_RE = re.compile(r"^[a-z0-9.-]+\.[a-z]{2,}$", re.I)

# 限流：粗化标识 -> 时间戳队列；HTTPServer 多线程，需加锁
_rate_lock = threading.Lock()
_rate_buckets: dict[str, deque[float]] = defaultdict(deque)


def init_db() -> None:
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    with sqlite3.connect(DB_PATH) as conn:
        conn.execute("PRAGMA journal_mode=WAL")
        conn.executescript(SCHEMA_PATH.read_text(encoding="utf-8"))
        conn.commit()


def coerce_client_id(address: str | None) -> str:
    """不存原始 IP：先把末字节/末段截断，再做不可逆短哈希。"""
    if not address:
        return "unknown"
    parts = address.split(".")
    if len(parts) == 4:  # IPv4：末段置 0
        coarse = ".".join(parts[:3] + ["0"])
    else:  # IPv6 / 其它：取前缀粗化
        coarse = ":".join(address.split(":")[:2])
    return hashlib.sha256(coarse.encode("utf-8")).hexdigest()[:12]


def clean_path(raw: str) -> str:
    path = str(raw).split("?", 1)[0].split("#", 1)[0][:256]
    if "://" in path:
        path = urlsplit(path).path
    if not path.startswith("/"):
        path = "/" + path
    return path or "/"


def clean_domain(raw: str) -> str | None:
    host = str(raw).strip().lower()
    if "://" in host:
        host = urlsplit(host).hostname or ""
    host = host.split("/", 1)[0].split(":", 1)[0]
    if host.startswith("www."):
        host = host[4:]
    if not DOMAIN_RE.match(host):
        return None
    return host[:128]


def validate_event(payload: object) -> dict | None:
    """与前端 L0 validateEvent 对齐的白名单 + 清洗 + 校验；None 表示拒绝。"""
    if not isinstance(payload, dict):
        return None
    if any(key not in ALLOWED_KEYS for key in payload.keys()):
        return None
    e = payload.get("e")
    if e not in EVENT_TYPES:
        return None
    p = payload.get("p")
    if not isinstance(p, str):
        return None
    l = str(payload.get("l", "en")).lower()
    if l.startswith("zh"):
        l = "zh"
    elif l.startswith("fr"):
        l = "fr"
    else:
        l = "en"
    s = payload.get("s")
    if not isinstance(s, str) or not SESSION_RE.match(s):
        return None
    t = payload.get("t")
    if (
        not isinstance(t, (int, float))
        or isinstance(t, bool)
        or not (MIN_TIMESTAMP <= t <= MAX_TIMESTAMP)
    ):
        return None
    out = {"e": e, "p": clean_path(p), "l": l, "s": s, "t": int(t)}
    r = payload.get("r")
    if isinstance(r, str):
        domain = clean_domain(r)
        if domain:
            out["r"] = domain
    d = payload.get("d")
    if d in DEVICES:
        out["d"] = d
    return out


def rate_ok(client: str) -> bool:
    now = time.time()
    with _rate_lock:
        bucket = _rate_buckets[client]
        while bucket and now - bucket[0] > RATE_WINDOW_SEC:
            bucket.popleft()
        if len(bucket) >= RATE_MAX_EVENTS:
            return False
        bucket.append(now)
        return True


def insert_event(event: dict, client: str) -> None:
    now = int(time.time())
    cutoff = now - RETENTION_DAYS * 86400
    with sqlite3.connect(DB_PATH) as conn:
        conn.execute(
            "INSERT INTO events (e,p,l,s,t,r,d,received_at,ip_hash) "
            "VALUES (?,?,?,?,?,?,?,?,?)",
            (
                event["e"], event["p"], event["l"], event["s"], event["t"],
                event.get("r"), event.get("d"), now, client,
            ),
        )
        # 最短必要保留期：每次写入按索引清理过期行
        conn.execute("DELETE FROM events WHERE t < ?", (cutoff,))
        conn.commit()


def summary_payload() -> dict:
    with sqlite3.connect(DB_PATH) as conn:
        conn.row_factory = sqlite3.Row
        total = conn.execute("SELECT COUNT(*) FROM events").fetchone()[0]
        by_page = [dict(row) for row in conn.execute("SELECT * FROM v_by_page ORDER BY n DESC LIMIT 100")]
        by_locale = [dict(row) for row in conn.execute("SELECT * FROM v_by_locale ORDER BY n DESC")]
        by_event = [dict(row) for row in conn.execute("SELECT * FROM v_by_event ORDER BY n DESC")]
        by_day = [dict(row) for row in conn.execute("SELECT * FROM v_by_day ORDER BY day DESC LIMIT 60")]
    return {
        "total": total,
        "retention_days": RETENTION_DAYS,
        "by_page": by_page,
        "by_locale": by_locale,
        "by_event": by_event,
        "by_day": by_day,
    }


DASHBOARD_HTML = """<!doctype html>
<html lang="zh">
<head><meta charset="utf-8"><title>Analytics · 私有后台</title>
<style>body{font-family:system-ui,sans-serif;max-width:760px;margin:2rem auto;padding:0 1rem;line-height:1.6}
code{background:#eee;padding:1px 4px}.warn{border-left:4px solid #c33;padding:.5rem 1rem;background:#fff3f3}
pre{background:#f6f6f6;padding:1rem;overflow:auto}</style></head>
<body>
<h1>Analytics 私有后台</h1>
<p class="warn"><strong>此服务为休眠分析端，不应公网暴露。</strong>
仅 <code>/event</code> 建议经反向代理对外；<code>/summary</code> 与本页面应仅内网/本机可达。</p>
<p>当前前端开关默认关闭，站点<strong>不收集任何数据</strong>。下方查询需填写服务端
<code>ANALYTICS_ADMIN_TOKEN</code> 作为 Bearer token。</p>
<label>Admin token <input id="tok" type="password" size="32" /></label>
<button onclick="load()">加载 /summary</button>
<pre id="out">（未加载）</pre>
<script>
async function load(){
  const tok=document.getElementById('tok').value.trim();
  const out=document.getElementById('out');
  try{
    const r=await fetch('/summary',{headers:tok?{'Authorization':'Bearer '+tok}:{}});
    out.textContent=r.status+' '+JSON.stringify(await r.json(),null,2);
  }catch(e){out.textContent=String(e)}
}
</script>
</body></html>"""


class Handler(BaseHTTPRequestHandler):
    server_version = "DormantAnalytics/1.0"

    def log_message(self, fmt, *args):
        # 默认不写访问日志（避免落盘含来源明细）；需要时由反向代理记录
        pass

    def _send(self, status, body, content_type="application/json; charset=utf-8", extra_headers=None):
        self.send_response(status)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        for key, value in (extra_headers or {}).items():
            self.send_header(key, value)
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(body)

    def _json(self, status, obj, extra_headers=None):
        self._send(
            status,
            json.dumps(obj, ensure_ascii=False).encode("utf-8"),
            extra_headers=extra_headers,
        )

    def _cors(self):
        # 仅对公开写入端点返回 CORS；后台路径不返回，避免被跨站读取
        return {
            "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        }

    def _authorized(self) -> bool:
        if not ADMIN_TOKEN:
            return False
        header = self.headers.get("Authorization", "")
        if not header.startswith("Bearer "):
            return False
        return secrets.compare_digest(header[7:].strip(), ADMIN_TOKEN)

    def do_OPTIONS(self):
        if self.path.split("?", 1)[0] == "/event":
            self._send(204, b"", extra_headers=self._cors())
        else:
            self._send(204, b"")

    def do_POST(self):
        path = self.path.split("?", 1)[0]
        if path != "/event":
            self._json(404, {"error": "not found"})
            return
        extra = self._cors()

        # 1) 大小限制（防滥用）
        try:
            length = int(self.headers.get("Content-Length", "0"))
        except ValueError:
            length = 0
        if length <= 0:
            self._json(411, {"error": "length required"}, extra)
            return
        if length > MAX_BODY_BYTES:
            self._json(413, {"error": "payload too large"}, extra)
            return

        # 2) 简单频率限流（按粗化标识，不存原始 IP）
        client = coerce_client_id(self.client_address[0] if self.client_address else None)
        if not rate_ok(client):
            self._json(429, {"error": "rate limited"},
                       {**extra, "Retry-After": str(RATE_WINDOW_SEC)})
            return

        # 3) 请求体格式校验
        body = self.rfile.read(length)
        if len(body) > MAX_BODY_BYTES:
            self._json(413, {"error": "payload too large"}, extra)
            return
        try:
            payload = json.loads(body.decode("utf-8"))
        except (ValueError, UnicodeDecodeError):
            self._json(400, {"error": "invalid json"}, extra)
            return
        event = validate_event(payload)
        if not event:
            self._json(400, {"error": "invalid event"}, extra)
            return

        # 4) 写入 SQLite（参数化查询）
        try:
            insert_event(event, client)
        except sqlite3.Error:
            self._json(500, {"error": "storage error"}, extra)
            return
        self._send(204, b"", extra_headers=extra)

    def do_GET(self):
        path = self.path.split("?", 1)[0]
        if path == "/dashboard":
            self._send(200, DASHBOARD_HTML.encode("utf-8"), "text/html; charset=utf-8")
            return
        if path == "/summary":
            if not self._authorized():
                # 未配置 token 或 token 错误：一律拒绝，防误暴露
                self._json(
                    401 if ADMIN_TOKEN else 503,
                    {"error": "unauthorized" if ADMIN_TOKEN else "admin token not configured"},
                    {"WWW-Authenticate": "Bearer"},
                )
                return
            try:
                self._json(200, summary_payload())
            except sqlite3.Error:
                self._json(500, {"error": "storage error"})
            return
        self._json(404, {"error": "not found"})


def create_server(host: str = HOST, port: int = PORT) -> ThreadingHTTPServer:
    init_db()
    return ThreadingHTTPServer((host, port), Handler)


def main() -> None:
    srv = create_server()
    print(f"[dormant-analytics] listening on {HOST}:{PORT} (db={DB_PATH})", flush=True)
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        srv.server_close()


if __name__ == "__main__":
    main()
