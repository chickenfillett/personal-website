/**
 * L1 — 临时随机会话 ID（会话级存储，关标签即失效）。
 *
 * 约束：
 *  - 只用浏览器原生 crypto.getRandomValues，生成 6–8 位 base36；
 *  - 只写会话级存储，绝不写跨会话的持久存储；不跨设备、不建画像；
 *  - 带 TTL 兜底，过期即重新生成；
 *  - SSR / 无 window 时安全降级（不持久化、不抛错）。
 */

const STORAGE_KEY = "solocraft.analytics.session";
/** 兜底 TTL：30 分钟。会话本质随标签页销毁，TTL 仅防长开页面无限沿用。 */
export const SESSION_TTL_MS = 30 * 60 * 1000;

interface StoredSession {
  id: string;
  exp: number;
}

function randomId(): string {
  // 两段 uint32 转 base36 拼接，字符全部落在 [0-9a-z]，长度规整到 6–8 位。
  const buf = new Uint32Array(2);
  const cryptoObj = globalThis.crypto;
  if (cryptoObj?.getRandomValues) {
    cryptoObj.getRandomValues(buf);
  } else {
    // 理论仅 SSR / 极老环境会走到；不使用任何持久标识。
    buf[0] = Math.floor(Math.random() * 0xffffffff);
    buf[1] = Math.floor(Math.random() * 0xffffffff);
  }
  const raw = buf[0].toString(36) + buf[1].toString(36);
  return raw.padEnd(6, "0").slice(0, 8);
}

function readStored(): StoredSession | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredSession;
    if (
      typeof parsed?.id === "string" &&
      /^[0-9a-z]{6,8}$/.test(parsed.id) &&
      typeof parsed.exp === "number"
    ) {
      return parsed;
    }
  } catch {
    // 解析失败 / 隐私模式禁用存储：当作无会话
  }
  return null;
}

/** 返回当前有效会话 ID；不存在或过期则新建并写入会话级存储。 */
export function getSessionId(): string {
  if (typeof window === "undefined") return randomId(); // SSR：一次性、不持久化

  const now = Date.now();
  const stored = readStored();
  if (stored && stored.exp > now) return stored.id;

  const next: StoredSession = { id: randomId(), exp: now + SESSION_TTL_MS };
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // 隐私模式 / 配额：退化为仅本次调用有效，不抛错、不落持久存储
  }
  return next.id;
}
