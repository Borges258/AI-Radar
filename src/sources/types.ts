import type { RawLink } from "../types";

/**
 * 数据源接口。
 * 新增来源渠道只需：1) 实现该接口；2) 在 registry.ts 中注册。
 */
export interface Source {
  /** 唯一 id（用于配置开关与评分权重） */
  id: string;
  /** 展示名 */
  name: string;
  /** 抓取并返回原始链接 */
  fetch(): Promise<RawLink[]>;
}