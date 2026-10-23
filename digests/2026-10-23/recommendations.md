# 信息雷达 · 每日推荐 (2026-10-23)

> 共推荐 5 条高质量内容，按综合评分排序

## 每日摘要

今日雷达聚焦AI前沿应用与挑战：量化交易基准Quant-Arena、机器人操控测试LIBERO-10、企业文档隐性线索丢失、法律决策模型缺失权威、以及物理世界模型校准。涵盖金融、具身智能、企业合规及多模态推理，助您洞察AI在垂直领域落地的最新边界与痛点。

## 1. Quant-Arena: Benchmarking LLM Agents for Quantitative Trading Research

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2610.30113v1
- **概述**: 提出Quant-Arena基准，测试大模型智能体在量化交易研究中的假设提出、信号实现及历史数据回测能力，评估其迭代决策水平。
- **摘要**: Quantitative research is an iterative loop: a researcher proposes a market hypothesis, implements it as an executable signal, tests it on historical data, and decides what to keep. Existing benchmarks score formulas, code, or individual trading decisions, leaving open whether large language models (LLMs) can complete this loop and produce strategies that work beyond the research period. We introduce Quant-Arena, a benchmark and public leaderboard for end-to-end quantitative research on real A-share market data. A model constructs features and stock-scoring code, receives feedback only on 2022--2023, and freezes one strategy for assessment on the sealed year 2024. A cash-account evaluator applies trading constraints and costs, including market impact estimated from a simulated order book. Scores are dominated by realized excess return and complemented by signal quality and the diversity of features used by the strategy. We evaluate nine frontier models, among which GPT-6 Astra scores highest; yet no model beats the equal-weight market in 2024. Quant-Arena is open to submissions from any model or agent harness.
- **综合评分**: 80 (相关性 100% / 权威性 100% / 时效性 74% / 热度 0%)
- **推荐理由**: 量化交易Agent基准测试稀缺

## 2. From Reasoning to Action: Benchmarking Frontier AI Models on LIBERO-10 Robot Manipulation Tasks

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2610.30051v1
- **概述**: 基于LIBERO-10任务基准，测试前沿AI模型在视觉理解、推理及工具使用等方面的能力，探索通用AI在机器人操控领域的潜力。
- **摘要**: Recent advances in frontier AI models have demonstrated remarkable capabilities in visual understanding, reasoning, planning, and tool use, raising the possibility of using general-purpose AI models for robot manipulation without task-specific training. However, their manipulation capabilities have not been systematically evaluated on standardized robotics benchmarks. In this report, we present a unified closed-loop manipulation framework for evaluating frontier AI models on the LIBERO-10 benchmark. Our framework enables models to control a robot directly through visual observations, robot proprioception, and structured tool calls, primarily by specifying target end-effector poses and gripper commands, without task-specific fine-tuning or pretrained manipulation skills. We evaluate six frontier AI models, including GPT-6 Astra, GPT-6.1 Sol, GPT-6 Luna, Claude Opus 5, Claude Opus 5.5, and Gemini-4 Argon, across three reasoning effort levels, resulting in 18 configurations and 1,800 evaluation episodes. Our results show that GPT-6 Astra achieves the highest success rate of 44%, followed by Gemini-4 Argon at 43%. Increasing reasoning effort generally improves manipulation performance, but the benefits vary across models and come at additional inference cost. We also observe substantial differences across tasks, with models performing relatively well on object placement tasks but struggling with precise spatial arrangements and complex multi-step interactions. These findings demonstrate both the potential and limitations of frontier AI models for robot manipulation, highlighting the challenges of translating reasoning capabilities into reliable physical actions. We release our evaluation framework and experimental results to support reproducible benchmarking and future research on reasoning-based robot manipulation.
- **综合评分**: 80 (相关性 100% / 权威性 100% / 时效性 74% / 热度 0%)
- **推荐理由**: 机器人操控前沿模型能力标尺

## 3. What the Author Wrote, What the Agent Reads: Silent Cue Loss in Enterprise Document Ingestion

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2610.30026v1
- **概述**: 分析企业文档摄取过程中，Word或PDF转Token时导致的“隐性线索丢失”问题，探讨其对智能体执行合规政策或工单填写的影响。
- **摘要**: Enterprise agents act on documents. Before an agent can follow a policy, answer a compliance question or file a ticket, some ingestion layer must turn a Word file or PDF into tokens - and that layer is where an agent deployed in the wild silently loses information. We show that one layer is lost by every mainstream converter - the meaning an author encodes in how text looks - and that the loss makes agents confidently wrong rather than visibly incomplete. We build a task from 76 real policy documents: recover the requirements the author singled out, scored against the file's own OOXML properties by a deterministic matcher with no LLM judge. Formatting-blind ingestion collapses from micro F1 0.690 to 0.150 (docling) and 0.075 (plain text), a gap that replicates across six answering models from two vendors - five Claude models spanning the Opus, Sonnet and Haiku tiers, and OpenAI's GPT-5.6. An agent that cannot see the cue guesses, and docling's false-positive rate on requirements the author did not flag is four times ours. A span-level leave-one-out localises the loss to two cues - highlight (+0.302) and colour (+0.262), both Holm-adjusted p < 1e-4 - while bold, italic, monospace and strikethrough each sit within +/-0.003 of zero. The same asymmetry appears in PDF. Colour is also the cue no mainstream converter preserves and no parsing benchmark scores, and it is common: 32.8% of 6,460 documents carry a deliberate colour or highlight, 10.3% on an obligation. A pre-registered test shows that typing a cue for the agent adds +0.085 beyond merely preserving it (Holm-adjusted p = 0.049). We validate the labels against rendered page images through an independent modality (kappa = 0.72) and bound what wording alone can achieve (AUC 0.664). For agent builders the practical finding is that ingestion, not reasoning, is where this reliability is won or lost, and that the fix is cheap and measurable.
- **综合评分**: 80 (相关性 100% / 权威性 100% / 时效性 73% / 热度 0%)
- **推荐理由**: 揭示企业文档摄取隐性风险

## 4. Commit or Abstain? System One Decision Models, LLMs, and Missing Legal Authority

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2610.29961v1
- **概述**: 探讨系统一决策模型与大语言模型在法律应用中的局限，指出其缺乏可验证的法律权威，并提出可扩展、低成本模型的需求。
- **摘要**: Given the enormous number of claims to be checked, verifiable legal AI requires scalable, cost-effective models that answer the practical needs of law. System One decision models are built on large language models but, instead of generating text, return a calibrated probability for each option. This suits the verification of legal authority, where the question is closed: a given holding, or none of them. We test whether such models abstain when the correct authority is missing. We extend CaseHOLD with an abstention condition in which the correct holding is replaced in 1,670 of 5,314 items, and compare four decision models with six generative LLMs. When no option is correct, generative LLMs still pick one in 38-86% of items; the most cautious decision model does so in 30%. On standard CaseHOLD, a decision model matches the best generative LLM (88.1% vs. 88.2%) at 1/55 of the cost. Accepting that LLM's answer only when a decision model agrees halves its wrong citations, and distilling a decision model's probabilities into Qwen3-8B, without labels, yields a well-calibrated local model. Legal AI should be judged by its wrong citations, not by accuracy alone.
- **综合评分**: 80 (相关性 100% / 权威性 100% / 时效性 73% / 热度 0%)
- **推荐理由**: 法律AI可验证性痛点解析

## 5. PhysiCalWorld: In-Context Physics Calibration for World Models

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2610.30125v1
- **概述**: 介绍PhysiCalWorld框架，通过上下文物理校准解决现有世界模型因观察窗口狭窄而无法揭示物理属性的问题，提升场景感知精度。
- **摘要**: Existing world models typically perceive a scene through current visual frame or a narrow history window. However, these observations may not reveal the physics properties that determine transition dynamics, such as an object's mass distribution, joint damping, or surface friction. Without calibrating these physics factors for world models, predictions tend to regress toward an empirical prior and induce severe drift in novel test scenes. To this end, we propose PhysiCalWorld, which calibrates action-conditioned world models to the instance-specific dynamics via in-context prompting, without fine-tuning or analytical physics modeling. Our method encodes an exploratory interaction clip collected within the test scene into a compact physics descriptor token, which grounds subsequent predictions in the scene's actual physical behavior. PhysiCalWorld is trained end-to-end with the latent prediction loss alone, without physics labels. At inference time, the descriptor token is extracted once and can be reused across rollouts with negligible compute overhead. We evaluate PhysiCalWorld across four environments covering diverse physics variations and show that it substantially improves rollout prediction accuracy and visual planning success rate. The learned descriptors also form a physically structured latent space and generalize beyond the physics ranges seen during training.
- **综合评分**: 76 (相关性 90% / 权威性 100% / 时效性 74% / 热度 0%)
- **推荐理由**: 世界模型物理校准新突破
