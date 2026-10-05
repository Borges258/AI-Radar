import type { RawLink, SourceError } from "../types";
import type { SourceConfig } from "../config";
import type { Logger } from "../logger";
import type { Source } from "./types";
import { HackerNewsSource } from "./hackernews";
import { ArxivSource } from "./arxiv";
import { LobstersSource } from "./lobsters";
import { DevToSource } from "./devto";
import { GithubSource } from "./github";
import { HuggingFaceSource } from "./huggingface";

export interface SourceRunner {
  source: Source;
  enabled: boolean;
  max: number;
}

/**
 * 构建数据源运行器。
 * 新增来源渠道：在 sources 数组中加一行即可，其余流程无需改动。
 */
export function buildSources(sourcesConfig: Record<string, SourceConfig>): SourceRunner[] {
  const all: Source[] = [
    new HackerNewsSource(),
    new ArxivSource(),
    new LobstersSource(),
    new DevToSource(),
    new GithubSource(),
    new HuggingFaceSource(),
  ];
  return all.map((source) => {
    const cfg = sourcesConfig[source.id] ?? {};
    return { source, enabled: cfg.enabled !== false, max: cfg.max ?? 30 };
  });
}

class SourceFetchError extends Error {
  constructor(
    public sourceName: string,
    message: string,
  ) {
    super(message);
    this.name = "SourceFetchError";
  }
}

/**
 * 并发抓取所有启用的数据源，单个来源失败不影响整体流程（隔离 + 容错）。
 */
export async function fetchAll(
  runners: SourceRunner[],
  log: Logger,
): Promise<{ links: RawLink[]; fetched: string[]; errors: SourceError[] }> {
  const enabled = runners.filter((r) => r.enabled);
  const results = await Promise.allSettled(
    enabled.map(async (runner) => {
      try {
        const links = await runner.source.fetch();
        return { runner, links: links.slice(0, runner.max) };
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        throw new SourceFetchError(runner.source.name, msg);
      }
    }),
  );

  const links: RawLink[] = [];
  const fetched: string[] = [];
  const errors: SourceError[] = [];

  results.forEach((res) => {
    if (res.status === "fulfilled") {
      const { runner, links: ls } = res.value;
      links.push(...ls);
      fetched.push(runner.source.id);
      log.info(`[${runner.source.name}] 抓取 ${ls.length} 条`);
    } else {
      const err = res.reason as SourceFetchError;
      log.error(`[${err.sourceName}] 抓取失败: ${err.message}`);
      errors.push({ source: err.sourceName, message: err.message });
    }
  });

  return { links, fetched, errors };
}