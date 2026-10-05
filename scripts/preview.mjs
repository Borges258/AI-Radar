#!/usr/bin/env node
// 将最新报告渲染为单个 HTML 并用浏览器打开（仅预览，不含源码视图）
import { execSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const root = resolve(process.cwd());
const digestsDir = join(root, "digests");

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function inline(s) {
  let t = escapeHtml(s);
  t = t.replace(/`([^`]+)`/g, "<code>$1</code>");
  t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  t = t.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  t = t.replace(/(https?:\/\/[^\s<>)]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
  return t;
}

function renderMarkdown(md) {
  const lines = md.split(/\r?\n/);
  let html = "";
  let inList = false;
  let inQuote = false;

  const close = () => {
    if (inList) { html += "</ul>"; inList = false; }
    if (inQuote) { html += "</blockquote>"; inQuote = false; }
  };

  for (const line of lines) {
    const t = line.trim();

    const h = t.match(/^(#{1,6})\s+(.*)$/);
    if (h) { close(); html += `<h${h[1].length}>${inline(h[2])}</h${h[1].length}>`; continue; }

    if (/^(-{3,}|\*{3,})$/.test(t)) { close(); html += "<hr>"; continue; }

    if (t.startsWith(">")) {
      if (!inQuote) { if (inList) { html += "</ul>"; inList = false; } html += "<blockquote>"; inQuote = true; }
      html += `<p>${inline(t.replace(/^>\s?/, ""))}</p>`;
      continue;
    }
    if (inQuote) { html += "</blockquote>"; inQuote = false; }

    if (/^[-*+]\s+/.test(t)) {
      if (!inList) { html += "<ul>"; inList = true; }
      html += `<li>${inline(t.replace(/^[-*+]\s+/, ""))}</li>`;
      continue;
    }
    if (inList) { html += "</ul>"; inList = false; }

    if (t === "") continue;

    html += `<p>${inline(t)}</p>`;
  }
  close();
  return html;
}

function buildPage(title, body) {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)}</title>
<style>
  * { box-sizing: border-box; }
  body { margin: 0; padding: 40px 16px; background: #f6f7f9; font-family: -apple-system, "Segoe UI", "Microsoft YaHei", "PingFang SC", sans-serif; color: #1f2329; line-height: 1.7; }
  .wrap { max-width: 820px; margin: 0 auto; background: #fff; border-radius: 12px; padding: 36px 44px; box-shadow: 0 1px 4px rgba(0,0,0,.06); }
  h1 { font-size: 26px; margin: 0 0 8px; }
  h2 { font-size: 20px; margin: 28px 0 10px; padding-bottom: 6px; border-bottom: 1px solid #eef0f2; }
  h3, h4, h5, h6 { margin: 20px 0 8px; }
  p { margin: 10px 0; }
  a { color: #2563eb; text-decoration: none; word-break: break-all; }
  a:hover { text-decoration: underline; }
  blockquote { margin: 12px 0; padding: 8px 16px; background: #f0f6ff; border-left: 4px solid #2563eb; color: #334155; border-radius: 0 6px 6px 0; }
  code { background: #f1f3f5; padding: 2px 6px; border-radius: 4px; font-family: ui-monospace, Consolas, monospace; font-size: 90%; }
  ul { margin: 10px 0; padding-left: 22px; }
  li { margin: 4px 0; }
  hr { border: none; border-top: 1px solid #e5e7eb; margin: 24px 0; }
</style>
</head>
<body>
<div class="wrap">
${body}
</div>
</body>
</html>`;
}

if (!existsSync(digestsDir)) { console.error("未找到 digests 目录，请先运行一次工作流。"); process.exit(1); }
const dates = readdirSync(digestsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort()
  .reverse();
if (dates.length === 0) { console.error("暂无报告。"); process.exit(1); }
const latest = dates[0];
const mdPath = join(digestsDir, latest, "recommendations.md");
if (!existsSync(mdPath)) { console.error("未找到 recommendations.md"); process.exit(1); }

const body = renderMarkdown(readFileSync(mdPath, "utf8"));
const page = buildPage(`信息雷达 · ${latest}`, body);
const outPath = join(tmpdir(), `info-radar-${latest}.html`);
writeFileSync(outPath, page, "utf8");

const open = process.platform === "win32"
  ? `start "" "${outPath}"`
  : process.platform === "darwin"
    ? `open "${outPath}"`
    : `xdg-open "${outPath}"`;
execSync(open, { stdio: "ignore" });