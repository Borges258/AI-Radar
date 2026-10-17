# 信息雷达 · 每日推荐 (2026-10-17)

> 共推荐 5 条高质量内容，按综合评分排序

## 每日摘要

今日前沿聚焦于AI自主进化、3D内容生成及多语言安全评估。MLExpert探索AI4AI自主研发，3DCodeVerse赋能3D世界代码化，研究揭示LLM在印地语下的评估感知差异，CDLMs优化Transformer设计，OmniVerifier-C1提升复杂视觉验证，展现智能系统多元化突破。

## 1. MLExpert: Towards a Generalist Agentic Model for Autonomous Machine Learning Engineering

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2610.22344v1
- **概述**: MLExpert旨在开发一种通用的代理模型，用于自主进行机器学习工程，推动AI系统自我研发与进化的AI4AI前沿方向。
- **摘要**: Large language models (LLMs) are expanding from assisting scientific research and engineering to autonomously developing and improving AI systems, advancing AI for AI (AI4AI) as a pathway toward recursive self-improvement (RSI). Workflow-driven machine learning engineering (MLE) systems provide a practical path toward this pursuit through complex orchestration that manages long-horizon experimentation, while recent MLE systems adopt model-directed interaction, allowing models to autonomously organize experiments and adapt optimization strategies based on execution feedback. However, feedback from each experiment reflects several preceding decisions, and a long MLE run contains many such costly experiments. Training must therefore select useful supervision from long interaction trajectories and learn from intermediate outcomes. We propose a post-training method for autonomous long-horizon MLE optimization and apply it to train MLExpert, a 35B Mixture-of-Experts agentic model. We design the Kaggle-MLE Factory to construct executable tasks and an interaction harness for model-directed experimentation. Hierarchical agentic SFT transfers general tool-use and coding capabilities to MLE through outcome-guided supervision. Windowed Interaction RL (WIRL) treats the multi-turn decisions between successive experiment results as an execution window and assigns it a shared outcome-based reward. Asynchronous collection and policy correction support policy updates before the trajectory ends. On MLE-Bench Lite, MLExpert improves the average medal rate of the base model from 37.9% to 72.7%, achieving performance comparable to larger frontier models such as Kimi-K3 and GLM-5.3. Further experiments show that MLExpert improves performance on NatureBench Lite, agent scaffold optimization, and algorithm optimization, suggesting that the learned optimization capability generalizes to other tasks.
- **综合评分**: 80 (相关性 100% / 权威性 100% / 时效性 74% / 热度 0%)
- **推荐理由**: AI自主研发前沿标杆

## 2. 3DCodeVerse: Exploring 3D Worlds as Code

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2610.22341v1
- **概述**: 3DCodeVerse构建了一个研究生态系统，允许编程代理大规模创建可编辑且可验证的3D内容，极大扩展了3D世界生成的能力。
- **摘要**: We introduce 3DCodeVerse, a research ecosystem that enables coding agents to create editable and verifiable 3D content at scale. 3DCodeVerse comprises large-scale, high-quality datasets of executable 3D code, a coding harness for spatial reasoning and automated verification, and practical guidance for 3D coding. First, we construct 3DCodeVerse-2M, a large-scale curated dataset of standalone 3D executable code. We build this corpus by collecting open-source data, converting specialized representations, and generating new programs with coding agents. Each program is packaged with the source files and associated assets required for execution in its declared environment, along with available descriptions and verification records. Second, we develop the 3DCodeVerse Harness, a multi-agent directed acyclic graph framework for generating and refining 3D content. It uses execution checks, spatial measurements, and visual feedback to automatically evaluate and revise generated programs without human feedback during generation. Third, we conduct systematic empirical studies of 3D coding, establishing baselines with fine-tuned open models and deriving practical guidance through component-level analyses of our harness. Extensive experiments demonstrate that fine-tuning on our dataset significantly improves the 3D coding capabilities of open-source models. Notably, our 3DCodeVerse harness achieves a 90% win rate against Claude Design (3D Object) in pairwise human evaluations, when both are utilized by Claude Opus 5.5.
- **综合评分**: 80 (相关性 100% / 权威性 100% / 时效性 74% / 热度 0%)
- **推荐理由**: 3D内容生成新范式

## 3. Evaluation Awareness Beyond English: Do LLMs Act Differently When Tested in Indic Languages?

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2610.22333v1
- **概述**: 研究探讨了LLM在印地语等非英语环境中的评估感知现象，发现模型在测试时表现更谨慎，揭示了跨语言安全评估的新挑战。
- **摘要**: Large language models (LLMs) can often tell when they are being tested. This ability, known as evaluation awareness, can lead models to act more cautiously during safety evaluations than in real use. Existing work has studied evaluation awareness almost entirely in English, although models serve users in many languages. Indic languages are spoken by over a billion people, yet evaluation awareness remains almost entirely unstudied in them. We test four instruction-tuned models from three families in five Indic languages alongside English. A set of cues varies whether the model is told that it is monitored and whether the monitoring is a safety test. Models refuse harmful requests more often when they are told that they are being tested. This increase appears in all four models and all six languages. In Indic languages, refusal of harmful requests rises by 14.4 percentage points on average. The test cue also brings Indic refusal of harmful requests level with English, but raises refusal of benign Indic requests from 6.9% to 11.3%. We release all 47,880 judged responses to support further work. These results suggest that safety evaluations in Indic languages may not reflect how models treat their everyday users.
- **综合评分**: 80 (相关性 100% / 权威性 100% / 时效性 74% / 热度 0%)
- **推荐理由**: 揭示跨语言安全盲区

## 4. Designing Transformers for Continuous Diffusion Language Models

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2610.22330v1
- **概述**: 文章专门设计了适用于连续扩散语言模型的Transformer架构，旨在优化并行语言生成效率，解决现有架构不适用的问题。
- **摘要**: Continuous diffusion language models (CDLMs) offer an alternative approach to parallel language generation; however, most existing studies directly use transformer architectures from either causal large language models (LLMs) or Diffusion Transformers (DiTs) for image generation, which were not optimized for CDLMs. In this paper, we conduct a systematic study on Transformer architectures for CDLMs and introduce Language Diffusion Transformer (LangDiT), combining feature and query-key normalization, wider noise conditioning, likelihood-shortcut gradient routing and calibration, and confidence-gated training self-conditioning. LangDiT significantly reduces generation perplexity in matched LangFlow comparisons, establishing a new state of the art in continuous language generation across different model formulations. Using LangFlow as a representative CDLM, LangDiT as a plug-and-play backbone leads to a new state-of-the-art model with a generation perplexity (GenPPL) of 21.72 using 1024 NFEs and 44.72 GenPPL using 128 NFEs on the unconditional generation of 1024-token sequences on the OpenWebText dataset. When adapted to Plaid-style CDLM formulations, LangDiT results in a new leading GenPPL of 11.33 using 1024 denoising NFEs, and 27.51 GenPPL using 128 denoising NFEs. These gains are achieved while retaining each model's underlying representation, training objective, and inference sampler, isolating transformer architecture as a fundamental source of improvement. Our study identifies architectural design as an important source of improvement in continuous diffusion language models.
- **综合评分**: 80 (相关性 100% / 权威性 100% / 时效性 74% / 热度 0%)
- **推荐理由**: 扩散语言模型架构优化

## 5. OmniVerifier-C1: Decomposed Graded Verifier for Rule-Governed Generative World Modeling

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2610.22355v1
- **概述**: OmniVerifier-C1提出了一种分解式分级验证器，通过规则治理提升生成式世界建模在复杂多模态场景下的视觉验证鲁棒性。
- **摘要**: Generative visual verifiers play a crucial role in advancing multimodal intelligence. To enhance the robustness of visual verifiers in complex multimodal scenarios involving compositional requirements, we move beyond conventional binary verifiers that produce only True/False discrete judgments and introduce a verifier that automatically decomposes complex prompts or environmental rules into fine-grained components and assigns pointwise scores to provide a continuous and more informative critique signal. Our experiments further demonstrate that these structured and interpretable outputs improve the verifier's generalization to out-of-domain multimodal critic tasks. To train this verifier, we introduce a Decoupled RL training strategy that jointly optimizes sub-question-level binary judgment and global alignment scoring, using precise local feedback to develop fine-grained verification capabilities that provide a foundation for reliable continuous scoring at the global level. Under a general reinforcement learning framework, we first empirically demonstrate that the proposed pointwise graded verifier significantly outperforms binary verifiers in traditional text-to-image scenarios. We then extend our investigation to rule-governed generative world modeling where generative models are leveraged for world simulation and world reasoning under explicit rules. From a theoretical standpoint, we further show that a pairwise verification paradigm yields more accurate critiques than the pointwise formulation when ground-truth images are available, with empirical results on diverse structured world-modeling tasks such as Maze and Sudoku further validating the effectiveness of our approach. Overall, our findings suggest a key insight: the transition from generative models to structured world-modeling agents critically hinges on the availability of accurate pairwise graded visual verifiers.
- **综合评分**: 80 (相关性 100% / 权威性 100% / 时效性 74% / 热度 0%)
- **推荐理由**: 复杂视觉验证鲁棒性增强
