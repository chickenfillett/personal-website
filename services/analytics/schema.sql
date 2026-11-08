-- 休眠分析服务 SQLite schema（Python 3 标准库，零第三方依赖）。
-- 与前端固定 schema {e,p,l,s,t,r,d} 对齐；不存原始 IP、不存完整 UA。

CREATE TABLE IF NOT EXISTS events (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  e           TEXT    NOT NULL CHECK (e IN ('page_view','product_view','cta_click','contact_click','page_error')),
  p           TEXT    NOT NULL,
  l           TEXT    NOT NULL CHECK (l IN ('zh','en','fr')),
  s           TEXT    NOT NULL,
  t           INTEGER NOT NULL,
  r           TEXT,
  d           TEXT    CHECK (d IN ('desktop','mobile','tablet')),
  received_at INTEGER NOT NULL,
  ip_hash     TEXT   -- 仅截断末字节后哈希的短标识，用于限流；非原始 IP
);

CREATE INDEX IF NOT EXISTS idx_events_t ON events(t);
CREATE INDEX IF NOT EXISTS idx_events_p ON events(p);
CREATE INDEX IF NOT EXISTS idx_events_e ON events(e);
CREATE INDEX IF NOT EXISTS idx_events_l ON events(l);
CREATE INDEX IF NOT EXISTS idx_events_received_at ON events(received_at);

-- 聚合视图：按 page / locale / 日期 / 事件类型
CREATE VIEW IF NOT EXISTS v_by_page AS
SELECT p, e, COUNT(*) AS n FROM events GROUP BY p, e;

CREATE VIEW IF NOT EXISTS v_by_locale AS
SELECT l, e, COUNT(*) AS n FROM events GROUP BY l, e;

CREATE VIEW IF NOT EXISTS v_by_event AS
SELECT e, COUNT(*) AS n FROM events GROUP BY e;

CREATE VIEW IF NOT EXISTS v_by_day AS
SELECT date(t, 'unixepoch') AS day, e, COUNT(*) AS n
FROM events GROUP BY day, e;

CREATE VIEW IF NOT EXISTS v_daily_by_page AS
SELECT date(t, 'unixepoch') AS day, p, l, e, COUNT(*) AS n
FROM events GROUP BY day, p, l, e;
