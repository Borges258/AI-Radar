import { createHash } from "node:crypto";

/** 需要剔除的追踪参数 */
const TRACKING_PARAMS = new Set([
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "ref",
  "referrer",
  "fbclid",
  "gclid",
  "mc_cid",
  "mc_eid",
]);

/** 规范化 URL：小写 host、去端口、去追踪参数、去 hash、去尾部斜杠 */
export function normalizeUrl(raw: string): string {
  try {
    const u = new URL(raw.trim());
    u.hostname = u.hostname.toLowerCase();
    if (
      (u.protocol === "https:" && u.port === "443") ||
      (u.protocol === "http:" && u.port === "80")
    ) {
      u.port = "";
    }
    for (const p of TRACKING_PARAMS) u.searchParams.delete(p);
    u.hash = "";
    if (u.pathname.length > 1 && u.pathname.endsWith("/")) {
      u.pathname = u.pathname.slice(0, -1);
    }
    return u.toString();
  } catch {
    return raw.trim();
  }
}

/** 文本规范化：小写、去 URL、只保留字母数字、折叠空白 */
export function normalizeText(s: string): string {
  return s
    .toLowerCase()
    .replace(/https?:\/\/\S+/g, " ")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function sha256(s: string): string {
  return createHash("sha256").update(s).digest("hex");
}

/** 距现在的小时数（无效时间返回 Infinity） */
export function hoursSince(iso?: string): number {
  if (!iso) return Infinity;
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return Infinity;
  return (Date.now() - t) / 3600_000;
}

export function clamp01(n: number): number {
  return Math.min(1, Math.max(0, n));
}

export function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

/** 上海时区今天的日期 YYYY-MM-DD（与定时任务口径一致） */
export function todayShanghai(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}