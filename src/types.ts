// 核心数据类型定义

/** 从数据源抓取的原始链接 */
export interface RawLink {
  url: string;
  title: string;
  /** 数据源 id，如 hackernews */
  source: string;
  /** 数据源展示名 */
  sourceName: string;
  summary?: string;
  author?: string;
  /** ISO 8601 时间 */
  publishedAt?: string;
  tags?: string[];
  /** 来源自带的流行度信号（点数/星标/点赞/下载等） */
  engagement?: number;
  external?: Record<string, unknown>;
}

/** 完成指纹计算后的链接 */
export interface DedupedLink extends RawLink {
  normalizedUrl: string;
  titleHash: string;
  contentHash: string;
}

/** 评分维度分解 */
export interface ScoreBreakdown {
  /** 相关性 0-1 */
  relevance: number;
  /** 权威性 0-1 */
  authority: number;
  /** 时效性 0-1 */
  timeliness: number;
  /** 社区热度 0-1 */
  engagement: number;
}

/** 完成评分的链接 */
export interface ScoredLink extends DedupedLink {
  /** 综合质量分 0-100 */
  score: number;
  breakdown: ScoreBreakdown;
}

/** 推荐结果 */
export interface Recommendation extends ScoredLink {
  rank: number;
  reasons: string[];
  /** LLM 生成的针对该条内容的中文概述（做了什么/有什么用/新闻讲了什么） */
  overview?: string;
}

/** 用户偏好（预留接口，当前默认为纯评分排序） */
export interface UserPreference {
  /** 兴趣关键词（命中加权，预留实现） */
  keywords?: string[];
  /** 优先来源 */
  preferredSources?: string[];
  /** 排除来源 */
  excludedSources?: string[];
  /** 最低评分门槛 */
  minScore?: number;
}

/** 单个来源的错误信息 */
export interface SourceError {
  source: string;
  message: string;
}

/** 流水线统计 */
export interface PipelineStats {
  date: string;
  /** 抓取到的原始链接数 */
  scraped: number;
  /** 去重后的链接数 */
  deduped: number;
  /** 评分后的链接数 */
  scored: number;
  /** 失败来源 */
  errors: SourceError[];
}

/** 流水线整体结果 */
export interface PipelineResult {
  stats: PipelineStats;
  /** LLM 生成的每日导语摘要（未配置 LLM 时为空） */
  summary?: string;
  recommendations: Recommendation[];
  links: ScoredLink[];
}