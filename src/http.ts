import { sleep } from "./util";

// 统一的 HTTP 抓取封装：统一 UA、超时控制、瞬时错误重试
const UA = { "User-Agent": "info-radar/1.0 (+https://github.com)" };
const TIMEOUT_MS = 20000;
const RETRIES = 3;

export async function getJson(url: string, init?: RequestInit): Promise<unknown> {
  return withRetry(async () => {
    const res = await fetch(url, {
      ...init,
      headers: { ...UA, ...(init?.headers as Record<string, string> | undefined) },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
    return (await res.json()) as unknown;
  });
}

export async function getText(url: string): Promise<string> {
  return withRetry(async () => {
    const res = await fetch(url, {
      headers: UA,
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
    return await res.text();
  });
}

/** 带指数退避的重试，仅对瞬时错误（429/5xx/超时/网络抖动）重试 */
async function withRetry<T>(fn: () => Promise<T>): Promise<T> {
  let lastErr: unknown;
  for (let i = 1; i <= RETRIES; i++) {
    try {
      return await fn();
    } catch (e) {
      lastErr = e;
      if (!isRetriable(e) || i === RETRIES) throw e;
      await sleep(1000 * Math.pow(2, i - 1));
    }
  }
  throw lastErr;
}

function isRetriable(e: unknown): boolean {
  const msg = e instanceof Error ? e.message : String(e);
  if (/^HTTP (429|5\d\d)/.test(msg)) return true;
  if (e instanceof Error && (e.name === "TimeoutError" || e.name === "AbortError")) return true;
  return /fetch failed|Connect Timeout|ETIMEDOUT|ECONNRESET/i.test(msg);
}