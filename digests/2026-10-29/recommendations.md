# 信息雷达 · 每日推荐 (2026-10-29)

> 共推荐 5 条高质量内容，按综合评分排序

## 每日摘要

今日资讯聚焦前沿科技与AI应用。大气化学机制引入可微分动力学ODE以适配机器学习；探讨LLM在改变物理定律下的发现能力；分析LLM群体决策中的记忆失效问题；提出基于潜在视觉推理的视频理解新框架；并针对零样本交通预测引入图感知时空先验网络，展现AI在科学计算与交通领域的创新突破。

## 1. KPPax: preprocess differentiable kinetic ODE for machine learning in atmospheric chemistry

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2610.37655v1
- **概述**: KPPax提出一种可微分的动力学ODE预处理器，旨在解决大气化学机制在KPP生成的高效代码中无法直接适配现代机器学习框架的问题，提升模型训练效率。
- **摘要**: Atmospheric chemical mechanisms are commonly distributed in the language of the Kinetic PreProcessor (KPP), which generates efficient Fortran or C code but does not fit into the differentiable programming frameworks in which machine-learning models are developed. We present KPPax, a kinetic preprocessor that generates differentiable, just-in-time compiled, and vectorisable chemistry code in JAX from mechanisms written in the KPP language. KPPax evaluates the rate law with sparse operations in log space, which keeps it differentiable, and integrates the stiff system with the implicit solvers and the forward- and reverse-mode adjoints of the \texttt{diffrax} library, so that exact sensitivities are obtained without hand-derived adjoint code. We demonstrate two applications with the POLLU benchmark mechanism. In the first, the Fisher information matrix computed from an automatically differentiated Jacobian predicts, before any fit, which of the 25 rate coefficients a flow-tube-like design can identify, and noisy synthetic estimation confirms the predicted uncertainties of the nine identifiable rate coefficients to within about 30\% while revealing clusters of fast reactions of which only ratios are constrained. In the second, a neural-network correction of an emission inventory is trained offline on per-scenario 4D-Var retrievals and then fine-tuned online through the chemical model, which reduces the error of the biogenic correction by a factor of 2.4--5 and recovers information on low-temperature emissions that the individual retrievals lose. KPPax makes KPP mechanisms directly usable for parameter estimation and hybrid physics--machine-learning modelling.
- **综合评分**: 80 (相关性 100% / 权威性 100% / 时效性 74% / 热度 0%)
- **推荐理由**: 提升大气化学模拟与AI结合的效率。

## 2. Can LLMs Uncover Hidden Physical Laws through Free Exploration?

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2610.37649v1
- **概述**: 该研究探讨大型语言模型在物理定律发生改变的世界中，能否通过自由探索发现隐藏的物理规律，检验LLM在科学发现中的潜在推理与观察能力。
- **摘要**: Scientific discovery often begins with an unexpected observation that prompts a new research question. In a world with altered physical laws, can large language models (LLMs) notice unexpected behavior, such as heavier objects falling more slowly, and discover the law through experiments without being told what to investigate? To evaluate this ability, we introduce LongChang, an automated framework that creates simulated worlds with altered physics, where one or more laws differ from ordinary physics. The evaluated LLMs act as explorers, manipulating objects and building tools to investigate their own questions without research tasks or hints about these laws. Separate LLM agents generate and review scenes, review tool designs, and evaluate reports for correctness and experimental support using the altered physical laws and exploration records. These records guide scene evolution for further exploration, allowing the full cycle to run without human intervention. Among 12 LLMs, GPT-6-Astra achieves a discovery rate of 16.7%, while the other 11 score 0%. The exploration records reveal uninvestigated anomalies and only partial identification of the altered physical laws.
- **综合评分**: 80 (相关性 100% / 权威性 100% / 时效性 74% / 热度 0%)
- **推荐理由**: 探索LLM在科学发现中的边界。

## 3. Rare, Relevant, and Still Wrong: How Memory Fails LLM Group Decisions

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2610.37624v1
- **概述**: 文章分析了当LLM群体讨论被压缩为短记忆供最终决策者使用时，保留稀有性或相关性的启发式方法如何导致决策错误，揭示了群体智能中的记忆瓶颈。
- **摘要**: When an LLM group's discussion is compressed into a short memory for a final decision maker, what should the memory keep? Two natural heuristics keep the rarest claims or the claims relevant to the decision criteria. On hidden-profile tasks both look attractive, because how widely a fact is held is confounded with whether it helps. We introduce CrossProfile, a diagnostic benchmark of 60 templates with automatically verified answer keys, in which the ownership of supporting, decoy, and irrelevant facts is crossed while their text is held fixed (480 tasks). Across Qwen2.5-7B, Llama-3.1-8B, and two DeepSeek models, both heuristics fail in predictable places. Selecting by relevance readmits decoys, because decoys are on topic: even a perfect relevance filter loses 23 to 31 points to rarest-first selection in the classic hidden-profile configuration. Rarest-first selection is no better than random selection on average and wins only where the rare facts happen to be the useful ones. In both cases accuracy follows the balance of evidence the memory keeps, not the policy that kept it. The decision model adds a third failure, a form of social proof: it gives extra weight to facts attributed to many agents. Removing the attribution tags, or reassigning them at random with line order fixed, raises accuracy in the classic configuration by 13 to 24 points. In natural discussions the evidence is lost before any memory acts: the complete transcript yields lower accuracy than no notes at all.
- **综合评分**: 80 (相关性 100% / 权威性 100% / 时效性 73% / 热度 0%)
- **推荐理由**: 揭示群体AI决策中的记忆缺陷。

## 4. VideoLVR: Latent Visual Reasoning over Grounded Video Evidence

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2610.37613v1
- **概述**: VideoLVR提出在扎根视频证据上进行潜在视觉推理的方法，解决传统基于语言的思维链在视频理解中缺乏可靠中间表示的问题，提升多模态模型推理准确性。
- **摘要**: Chain-of-thought reasoning has substantially advanced video understanding in multimodal large language models (MLLMs). However, language-based reasoning traces do not provide a reliable mechanism for models to revisit relevant visual evidence, leading to visual forgetting and impairing their ability to reason over video content. Existing approaches maintain visual grounding during reasoning in two main ways: they either refer to evidence using textual coordinates, which specify symbolic locations rather than the visual content itself, or reinsert cropped regions or frames into the multimodal context, preserving visual details at the cost of substantial context expansion. To address these limitations, we introduce VideoLVR, which constructs latent visual evidence from local regions at relevant video moments, thereby providing visual support for intermediate reasoning steps. To supervise latent visual evidence generation, we introduce a visual token prediction objective that formulates visual token reconstruction as prediction over a vocabulary derived from the input video, thereby unifying visual evidence reconstruction and text generation within the same token prediction framework. This shared prediction framework enables MLLMs to reason over interleaved text tokens and latent visual states while integrating evidence from different moments. We further extend VideoLVR to reinforcement learning by treating sampled visual tokens as actions alongside text tokens and jointly optimizing the policy using final-answer rewards. By efficiently revisiting task-relevant visual information during reasoning, VideoLVR improves video understanding without substantially expanding the multimodal context. Experiments on multiple video benchmarks demonstrate its effectiveness, especially on tasks requiring fine-grained visual evidence.
- **综合评分**: 80 (相关性 100% / 权威性 100% / 时效性 73% / 热度 0%)
- **推荐理由**: 增强视频理解的可解释性与精度。

## 5. GAS-PFN: Graph-Aware Spatiotemporal Prior-Data Fitted Networks for Zero-Shot Traffic Forecasting

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2610.37598v1
- **概述**: GAS-PFN结合图感知时空先验与数据拟合网络，实现零样本交通流量预测，克服监督式图模型需大量数据的问题，利用道路拓扑和时序动态提升预测泛化能力。
- **摘要**: Traffic forecasting requires modeling complex temporal dynamics and the spatial dependencies imposed by road topology. Supervised graph-based models achieve strong performance, but are often trained for a particular dataset and sensor graph, making deployment to new or evolving networks costly. Prior-Data Fitted Networks (PFNs) offer a zero-shot alternative by learning in-context inference from synthetic task priors, which provide an explicit mechanism for encoding domain-specific assumptions. Existing forecasting PFNs, however, do not explicitly represent the graph-structured dependencies governing traffic dynamics. To combine graph-aware traffic modeling with zero-shot adaptation, we introduce the Graph-Aware Spatiotemporal Prior-Data Fitted Network (GAS-PFN). GAS-PFN incorporates sampled road topology into its synthetic task prior through random-walk diffusion, teaching the model to learn graph-coupled dynamics during pretraining. Its co-designed inference architecture uses two mask-conditioned passes through a shared Transformer backbone to separately model sensor-specific temporal dynamics and spatiotemporal interactions among neighboring sensors before integrating their representations for prediction. This design enables GAS-PFN to use target-network structure and context without parameter updates. Across six benchmarks at the 90-minute horizon, GAS-PFN reduces MSE by 34.0% on average relative to TimePFN, its closest PFN-based predecessor. It also reduces MSE by 27.7% on average relative to four recent industry-developed general-purpose zero-shot forecasters. In this comparison, all models receive 90 minutes of contiguous recent history, and any additional context is drawn from each dataset's chronological training split. These results indicate that aligning PFN priors and inference architectures with graph structure improves in-context learning for zero-shot traffic forecasting.
- **综合评分**: 80 (相关性 100% / 权威性 100% / 时效性 73% / 热度 0%)
- **推荐理由**: 实现无需标注数据的精准交通预测。
