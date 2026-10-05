#!/usr/bin/env node
// 快速查看最新报告：同步远端 -> 打开最新 recommendations.md 并在终端打印全部内容
import { execSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(process.cwd());
const digestsDir = join(root, "digests");

// 1) 同步远端（失败不中断，仍尝试查看本地已有报告）
try {
  console.log("> 同步远端报告 (git pull --ff-only)…");
  execSync("git pull --ff-only origin main", { cwd: root, stdio: "inherit" });
} catch (e) {
  console.warn(`[warn] git pull 失败，使用本地已有报告：${e.message}`);
}

// 2) 找到最新日期目录
if (!existsSync(digestsDir)) {
  console.error("本地还没有报告目录。请先在 GitHub Actions 跑一次工作流，或本地执行 npm start。");
  process.exit(1);
}
const dates = readdirSync(digestsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort()
  .reverse();
if (dates.length === 0) {
  console.error("digests 目录为空，暂无报告。");
  process.exit(1);
}
const latest = dates[0];
const file = join(digestsDir, latest, "recommendations.md");
if (!existsSync(file)) {
  console.error(`未找到报告文件：${file}`);
  process.exit(1);
}

// 3) 终端打印
const content = readFileSync(file, "utf8");
const bar = "=".repeat(64);
console.log(`\n${bar}\n最新报告：${latest}/recommendations.md\n${bar}\n`);
console.log(content);
console.log(bar);

// 4) 用系统默认程序打开
try {
  const open =
    process.platform === "win32"
      ? `start "" "${file}"`
      : process.platform === "darwin"
        ? `open "${file}"`
        : `xdg-open "${file}"`;
  execSync(open, { stdio: "ignore" });
  console.log(`\n(已在默认应用中打开：${file})`);
} catch {
  // 打开失败也无妨，内容已打印到终端
}