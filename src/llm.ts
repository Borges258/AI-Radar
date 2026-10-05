import type { Recommendation } from "./types";

/** LLM 配置：从环境变量读取，密钥不入库 */
export interface LlmConfig {
  apiKey?: string;
  baseUrl: string;
  model: string;
}

const DEFAULT_BASE_URL = "https://apihub.agnes-ai.com/v1";
const DEFAULT_MODEL = "agnes-3.0-flash";

export function loadLlmConfig(): LlmConfig {
  return {
    apiKey: process.env.LLM_API_KEY || undefined,
    baseUrl: process.env.LLM_BASE_URL || DEFAULT_BASE_URL,
    model: process.env.LLM_MODEL || DEFAULT_MODEL,
  };
}

export function llmEnabled(cfg: LlmConfig): boolean {
  return Boolean(cfg.apiKey);
}

/** LLM 生成的推荐报告 */
export interface LlmReport {
  summary: string;
  reasons: string[];
  overviews: string[];
}

/** 生成每日推荐报告：导语摘要 + 每条个性化推荐理由（OpenAI 兼容接口） */
export async function generateReport(recs: Recommendation[]): Promise<LlmReport> {
  const cfg = loadLlmConfig();
  if (!llmEnabled(cfg)) throw new Error("LLM_API_KEY 未配置，请设置环境变量或仓库密钥");

  const listText = recs
    .map((r, i) => `${i + 1}. [${r.sourceName}] ${r.title} — ${truncate(r.summary, 180)}`)
    .join("\n");

  const prompt = `你是「信息雷达」每日资讯推荐助手。请根据下面的 Top 推荐链接生成：
1. "summary"：一段简短的中文每日导语摘要（80~120 字，概括今天值得关注的主题与亮点）；
2. "overviews"：为每一条推荐写一句中文概述（60~100 字，简要说明这个项目/工具做了什么、有什么用，或这篇新闻主要讲了什么）；
3. "reasons"：为每一条推荐写一句个性化推荐理由（中文，30 字以内，突出其核心价值）。

只输出 JSON，不要任何多余文字，且 overviews 与 reasons 的数组长度必须与推荐列表条数一致，格式：
{"summary":"...","overviews":["...","..."],"reasons":["...","..."]}

推荐列表：
${listText}`;

  const content = await chatCompletion(cfg, prompt);
  return parseReportJson(content, recs.length);
}

async function chatCompletion(cfg: LlmConfig, userContent: string): Promise<string> {
  const url = `${cfg.baseUrl.replace(/\/+$/, "")}/chat/completions`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cfg.apiKey}`,
    },
    body: JSON.stringify({
      model: cfg.model,
      messages: [{ role: "user", content: userContent }],
      temperature: 0.3,
    }),
    signal: AbortSignal.timeout(60000),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`LLM HTTP ${res.status}: ${body.slice(0, 300)}`);
  }
  const data = (await res.json()) as ChatResponse;
  const content = data.choices?.[0]?.message?.content;
  if (!content) throw new Error("LLM 返回为空");
  return content;
}

interface ChatResponse {
  choices?: { message?: { content?: string } }[];
}

function parseReportJson(content: string, count: number): LlmReport {
  const cleaned = content.replace(/```json/gi, "").replace(/```/g, "").trim();
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  if (start === -1 || end === -1) throw new Error("LLM 返回内容不是合法 JSON");
  const obj = JSON.parse(cleaned.slice(start, end + 1)) as { summary?: string; reasons?: string[]; overviews?: string[] };
  return {
    summary: typeof obj.summary === "string" ? obj.summary.trim() : "",
    reasons: Array.isArray(obj.reasons)
      ? obj.reasons.slice(0, count).map((r) => String(r).trim())
      : [],
    overviews: Array.isArray(obj.overviews)
      ? obj.overviews.slice(0, count).map((r) => String(r).trim())
      : [],
  };
}

function truncate(s: string | undefined, len: number): string {
  if (!s) return "";
  return s.length > len ? `${s.slice(0, len)}…` : s;
}