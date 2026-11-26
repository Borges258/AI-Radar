# 信息雷达 · 每日推荐 (2026-11-26)

> 共推荐 5 条高质量内容，按综合评分排序

## 每日摘要

今日资讯聚焦多模态与Agent前沿。WebVibe探索逆向生成交互网站，Crucible构建化学科研执行环境评估LLM，MedSkill-E²关注医疗Agent技能演化。此外，Navigent提升视觉语言导航几何可靠性，视频LLM研究验证部分线索下的推理能力，展示AI在复杂任务中的最新进展。

## 1. WebVibe: Multimodal Interactive Website Generation via Reverse Synthesis and Visual Self-Distillation

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2611.34292v1
- **概述**: WebVibe提出逆向合成与视觉自蒸馏方法，旨在解决现有模型难以从设计规格生成具有完整交互功能网站的问题，突破静态HTML转换局限。
- **摘要**: Although multimodal large language models translate single screenshots into static HTML, generating interactive functional websites from design specifications still struggles with multi-page routing and stateful widget transitions. Examining existing training pipelines reveals two bottlenecks: (1) in forward data synthesis (X -> Y), writing the specification X before code execution leaves unimplemented or altered requirements in X as supervision noise; and (2) in reinforcement learning, scalar rewards discard the rich state transitions observed during replay. Based on these findings, we introduce WebVibe and Interactive-SDPO to train InteractiveCoder. WebVibe reverses synthesis into Y -> X by verifying cross-page and in-page interactions in the browser before deriving multimodal inputs from replay-confirmed states to build the 31,542-site WebVibe-32K corpus with reusable execution contracts. Interactive-SDPO then conditions a weight-sharing self-teacher on the replay trace and a 2x2 state-transition montage to provide token-level supervision at zero inference-time overhead. On the public Vision2Web L2, one-shot InteractiveCoder-9B nearly 3x its base model's functional score (20.2 to 55.2 FS) and matches a 1T-parameter coding agent in a single pass with 111x fewer total parameters and 78x fewer tokens. On our WebVibeBench, InteractiveCoder-4B and 9B further outperform all evaluated baselines by over 23 points.
- **综合评分**: 82 (相关性 100% / 权威性 100% / 时效性 86% / 热度 0%)
- **推荐理由**: 突破静态网页生成瓶颈，助力前端自动化

## 2. Crucible: Evaluating LLM Agents in Executable Chemistry Research Environments

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2611.34254v1
- **概述**: Crucible构建可执行的化学科研环境，评估LLM Agent在模拟真实化学实验流程中的表现，弥补静态知识问答基准无法衡量实操能力的短板。
- **摘要**: Large language models (LLMs) perform well on chemistry knowledge benchmarks, which mainly assess question answering and isolated tasks. Chemical research, however, requires using specialized tools and interpreting their outputs to obtain chemically valid results. To address this gap, we introduce Crucible Bench to evaluate this ability across all four stages of the design-make-test-analyze (DMTA) cycle. The benchmark contains 1,078 tasks in 12 task families curated from 18 published datasets, covering molecular design, synthesis planning, experimental execution, closed-loop optimization, simulation, and analytical characterization. Agents access 75 domain-specific tools through the Model Context Protocol in seven isolated environments. Sandboxed graders verify the resulting synthesis routes, experimental protocols, and other outputs. Laboratory tasks use robotic simulators or previously measured experimental data. We evaluate 14 LLMs as agents and find that the best achieves an overall score of 0.545, with synthesis planning and closed-loop optimization emerging as the hardest domains. Overall performance does not predict optimization performance well: the model ranked twelfth overall achieves the highest score in closed-loop optimization. Error analysis also shows that agents often submit chemically invalid results despite running their tools successfully. Stronger models benefit more from tool access, but reliable use of chemical software remains a challenge that Crucible Bench can track as models improve.
- **综合评分**: 82 (相关性 100% / 权威性 100% / 时效性 86% / 热度 0%)
- **推荐理由**: 首创化学实操评估，检验Agent落地潜力

## 3. MedSkill-E$^{2}$: Evaluating and Evolving Skills for Medical Agents

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2611.34250v1
- **概述**: MedSkill-E²针对医疗LLM Agent，研究当技能规则描述不完整时如何评估和演化技能，以提升Agent在复杂医疗任务中的鲁棒性与准确性。
- **摘要**: Large language model (LLM) agents increasingly use skills to access domain knowledge and complete real-world tasks. We observe that even when a skill specifies the rules and procedures needed for a task, agents may fail to apply them effectively during autonomous execution, a phenomenon we call skill Enable But Underuse (EBU). This issue is particularly consequential in medical tasks, where overlooking a single critical constraint can yield a plausible but incorrect result. To evaluate and address EBU, we introduce MedSkill-E$^{2}$, a framework for evaluating and evolving skills for medical agents. We construct EBU-Bench, a challenging benchmark covering 12 medically relevant task groups and associated skills, to evaluate agents' ability to use available skills autonomously. We quantify the EBU gap as the difference in skill-use accuracy between autonomous use and explicitly guided reading and application of the same skill. On EBU-Bench, all evaluated model-harness combinations exhibit EBU, with a mean gap of 43.94 percentage points (pp). For the same model, skill-use accuracy under autonomous use differs by up to 38.96 pp across harnesses. Motivated by these observations, we propose EBU-Evolve, which uses execution feedback from autonomous and explicitly guided skill use to distill effective guidance into reusable skill instructions. Relative to their pre-evolution versions, the revised skills improve skill-use accuracy during autonomous execution by 33.33 to 55.17 pp and continue to yield improvements when transferred across multiple models and harnesses. Our results show that autonomous skill-use accuracy varies across harnesses with the model and skill held fixed, and model rankings can change. EBU can persist even after a skill is opened. EBU-Evolve improves autonomous skill-use accuracy on unseen tasks within the same skill, with gains transferring across models and harnesses.
- **综合评分**: 82 (相关性 100% / 权威性 100% / 时效性 86% / 热度 0%)
- **推荐理由**: 解决医疗Agent技能脆弱性，提升鲁棒性

## 4. Navigent: A Geometry-Grounded Agentic Framework for Vision Language Navigation

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2611.34249v1
- **概述**: Navigent提出基于几何基础的Agent框架，利用几何约束增强视觉语言导航模型在复杂环境中的可靠性，替代传统专用导航策略，提升通用性。
- **摘要**: Vision-and-Language Navigation (VLN) with general-purpose multimodal large language models (MLLMs) offers a flexible alternative to task-specific navigation policies, while reliable long-horizon execution remains challenging. Agents must track navigation progress, detect discrepancies between commanded and actual motion, and recognize when movement has passed relevant landmarks or entrances. We present Navigent, an agentic VLN framework built around a frozen MLLM and a Geometry-Grounded Execution Critic (GEC). GEC performs two complementary checks: action-to-motion consistency, which evaluates measured displacement against commanded movement, and motion-to-landmark consistency, which tracks agent-selected visual anchors and entrance candidates in world coordinates. Detected discrepancies interrupt the remaining action sequence and trigger reobservation, local adjustment, or node-based recovery. Historical visual memory supports progress tracking across extended routes. An offline self-improvement procedure further analyzes successful and failed training trajectories to refine navigation prompts and GEC logic while keeping model weights fixed. On the R2R-CE validation-unseen split (1,839 episodes) and RxR-CE validation-unseen split(3,669 episodes), Navigent achieves 84.0%/86.0% SR and 72.9%/69.1% SPL, respectively, demonstrating the value of geometry-grounded execution verification for reliable agentic navigation. Project Page: https://marslab-navigent.github.io/navigent.github.io/ Code: https://github.com/MarsLab-Navigent/Navigent
- **综合评分**: 82 (相关性 100% / 权威性 100% / 时效性 86% / 热度 0%)
- **推荐理由**: 几何约束增强导航，提高VLN可靠性

## 5. Out of Sight, Not Out of Clues: Can Video LLMs Guess from Partial Evidence?

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2611.34126v1
- **概述**: 研究探讨视频LLM在证据部分缺失场景下的推断能力，通过模拟第一视角记录或监控审查中的信息残缺情况，测试模型基于有限线索进行合理猜测的性能。
- **摘要**: In real-world applications like egocentric recording, visual accessibility, and surveillance review, visual evidence for Video Large Language Models (Video LLMs) is often only partially captured. A reliable model should match its response to the evidence: answering when sufficient, guessing from visible clues when partial, and abstaining when absent. Yet existing benchmarks enforce a binary answerable-or-unanswerable split, leaving partial evidence unmeasured and obscuring whether failures arise from missing evidence or misjudging sufficiency. We introduce ClueProbe, a diagnostic benchmark to (1) separate perceiving evidence from judging sufficiency, and (2) validate our diagnosis via targeted fine-tuning. ClueProbe comprises 1,721 human-annotated questions across 598 natural videos, labeled Answerable, Guessable, or Unanswerable, alongside controlled perturbations altering wording or visual input. Evaluating 10 open-source and proprietary Video LLMs reveals that failures stem from judgment rather than perception: models perceive the evidence yet lack graded sufficiency awareness, answering or refusing outright while rarely guessing from partial clues. Targeted fine-tuning shows that this reflects missing supervision rather than insufficient capacity: supervising the guess level lifts appropriate guessing from 1.6% to 40.4% without extra false refusals, whereas conventional refusal tuning rejects 92% of guessable questions. Data and code will be released at https://github.com/suat-llm/ClueProbe.
- **综合评分**: 82 (相关性 100% / 权威性 100% / 时效性 84% / 热度 0%)
- **推荐理由**: 探索视频LLM残差推理，贴近真实应用
