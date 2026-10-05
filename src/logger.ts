import { appendFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

export type LogLevel = "debug" | "info" | "warn" | "error";

const LEVEL: Record<LogLevel, number> = { debug: 10, info: 20, warn: 30, error: 40 };

/**
 * 结构化日志：输出到控制台同时落盘到 logs/radar-YYYY-MM-DD.log，
 * 用于每日定时任务的问题排查。
 */
export class Logger {
  private file: string;

  constructor(
    private level: LogLevel = "info",
    logDir = "logs",
  ) {
    mkdirSync(logDir, { recursive: true });
    this.file = join(logDir, `radar-${new Date().toISOString().slice(0, 10)}.log`);
  }

  private write(level: LogLevel, args: unknown[]): void {
    if (LEVEL[level] < LEVEL[this.level]) return;
    const line = `[${new Date().toISOString()}] [${level.toUpperCase()}] ${args
      .map(formatArg)
      .join(" ")}`;
    if (level === "error") console.error(line);
    else if (level === "warn") console.warn(line);
    else console.log(line);
    try {
      appendFileSync(this.file, line + "\n");
    } catch (e) {
      console.error("日志写入失败:", e);
    }
  }

  debug(...a: unknown[]): void {
    this.write("debug", a);
  }
  info(...a: unknown[]): void {
    this.write("info", a);
  }
  warn(...a: unknown[]): void {
    this.write("warn", a);
  }
  error(...a: unknown[]): void {
    this.write("error", a);
  }
}

function formatArg(a: unknown): string {
  if (a instanceof Error) return a.stack ?? a.message;
  if (typeof a === "string") return a;
  try {
    return JSON.stringify(a);
  } catch {
    return String(a);
  }
}

export const log = new Logger();