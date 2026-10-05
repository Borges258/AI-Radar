import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import type { Logger } from "./logger";
import { buildFingerprints } from "./fingerprint";
import type { ScoredLink } from "./types";

interface StateFile {
  lastRun?: string;
  seenFingerprints: string[];
}

/** 最近保留的历史指纹条数上限 */
const MAX_SEEN = 50000;

/**
 * 状态持久化：保存历史已见指纹，用于跨日去重。
 * 避免重复链接在连续多日的抓取中被反复推荐。
 */
export class Store {
  private path: string;

  constructor(
    private dir = "data",
    filename = "state.json",
    private log: Logger,
  ) {
    this.path = join(dir, filename);
  }

  loadSeen(): Set<string> {
    try {
      const raw = JSON.parse(readFileSync(this.path, "utf-8")) as StateFile;
      return new Set(raw.seenFingerprints ?? []);
    } catch {
      this.log.debug("未找到历史状态文件，首次运行");
      return new Set();
    }
  }

  /** 将本次保留链接的指纹并入历史集合并落盘 */
  save(links: ScoredLink[], seen: Set<string>): void {
    for (const link of links) {
      const fp = buildFingerprints(link);
      seen.add(`u:${fp.normalizedUrl}`);
      if (fp.titleHash) seen.add(`t:${fp.titleHash}`);
      if (fp.contentHash) seen.add(`c:${fp.contentHash}`);
    }

    const underscored: string[] = [...seen].slice(-MAX_SEEN);
    const state: StateFile = { lastRun: new Date().toISOString(), seenFingerprints: underscored };
    mkdirSync(dirname(this.path), { recursive: true });
    writeFileSync(this.path, JSON.stringify(state, null, 2));
    this.log.debug(`状态已保存，历史指纹 ${underscored.length} 条`);
  }
}