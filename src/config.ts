import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { UserPreference } from "./types";

/** 数据源配置 */
export interface SourceConfig {
  enabled?: boolean;
  max?: number;
}

export interface RadarConfig {
  /** 覆盖领域关键词（用于相关性评分） */
  keywords: string[];
  /** 数据源开关与抓取上限（key 为 source id） */
  sources: Record<string, SourceConfig>;
  /** 每日目标有效链接数 */
  targetLinks: number;
  /** 每日推荐数量 */
  recommendationCount: number;
  /** 内容相似度去重阈值 0-1（越大越严格） */
  dedupSimilarityThreshold: number;
  /** 用户偏好（预留接口，默认纯评分） */
  preference: UserPreference;
}

const DEFAULTS: RadarConfig = {
  keywords: [
    "ai",
    "artificial intelligence",
    "llm",
    "large language model",
    "machine learning",
    "deep learning",
    "agent",
    "rag",
    "transformer",
    "gpt",
    "claude",
    "openai",
    "anthropic",
    "model",
    "neural",
    "inference",
    "vector database",
    "fine-tun",
    "generative",
    "langchain",
    "multimodal",
  ],
  sources: {},
  targetLinks: 30,
  recommendationCount: 5,
  dedupSimilarityThreshold: 0.85,
  preference: { keywords: [], preferredSources: [], excludedSources: [], minScore: 0 },
};

/**
 * 加载配置：优先读取根目录 config.json（或 RADAR_CONFIG 指定的路径），
 * 缺失时回退到内置默认值，保证无配置也可运行。
 */
export function loadConfig(): RadarConfig {
  const cfgPath = process.env.RADAR_CONFIG ?? join(process.cwd(), "config.json");
  try {
    const raw = JSON.parse(readFileSync(cfgPath, "utf-8")) as Partial<RadarConfig>;
    return {
      ...DEFAULTS,
      ...raw,
      preference: { ...DEFAULTS.preference, ...(raw.preference ?? {}) },
      sources: raw.sources ?? {},
    };
  } catch {
    return { ...DEFAULTS, preference: { ...DEFAULTS.preference } };
  }
}