# 信息雷达 · 每日推荐 (2026-11-04)

> 共推荐 5 条高质量内容，按综合评分排序

## 每日摘要

今日资讯聚焦AI深度应用与前沿科研。重点包括一款利用LLM扮演说谎嫌疑人的侦探游戏，解决遥感问答的图推理模型，以及针对多智能体辩论安全漏洞和LLM编码代理危害性评估的最新基准研究，展示了AI在娱乐、地理信息与系统安全领域的多维突破。

## 1. Show HN: Uncracked City, detective game where you question LLM suspects that lie

- **来源**: Hacker News
- **链接**: https://uncracked.city
- **概述**: 介绍了一款独立开发者打造的侦探游戏，玩家需通过与会撒谎的LLM嫌疑人对话来破案，旨在让玩家发现不同城市的历史与文化。
- **摘要**: To give you some context on the project. I&#x27;m a solo founder and I use AI heavily in my work. The idea came from wanting players to discover cities. Each city has its own history, so every case is set in a real city with real public places. The crime and the people are on other hand invented. The part that I care most is the playable aspect of the game, a model plays the detective and must solve the case before it goes live.<p>As of today: it&#x27;s free on Android, the iOS version is still waiting to be reviewed by Apple. It&#x27;s available in six popular languages, but adding more languages is just a matter of time and demand.My long term vision if it takes off: weekly cases, private parties like a team-building escape game, an MCP so a game master can build their own scenario from ChatGPT or Claude, and maybe tourism offices since players travel the world.
- **作者**: passkey1510
- **综合评分**: 82 (相关性 100% / 权威性 80% / 时效性 95% / 热度 20%)
- **推荐理由**: LLM创新互动玩法，探索游戏叙事新边界。

## 2. OSGR: Observation-Support Graph Reasoning for Earth Observation Question Answering

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2611.04301v1
- **概述**: 提出OSGR模型，通过观察支持图推理解决地球观测档案中的地理查询问题，应对严格时空约束下的检索与推导挑战。
- **摘要**: Answering geographic queries over Earth observation (EO) archives requires solving a joint retrieval-and-derivation problem under strict spatiotemporal constraints. Existing LLM agents fail to ground observation items or suffer from search-space explosion. We propose OSGR, a two-stage framework that factorizes this search into offline symbolic concept deduction and online Relation-Conditioned Grounding. OSGR leverages an offline Observation-Support Graph to deduce valid target-to-result support paths at the concept level, and applies spatiotemporal compatibility kernels to instantiate grounded observation-item sets. On Earth-Bench and DisasterM3-Reason, OSGR improves GPT-4o accuracy from 49.3\% to 63.7\% while reducing the execution-step ratio from 2.9 to 2.5.
- **综合评分**: 81 (相关性 100% / 权威性 100% / 时效性 81% / 热度 0%)
- **推荐理由**: 遥感AI前沿，解决复杂时空推理难题。

## 3. When Debate Amplifies Risk: Social-Bias Vulnerabilities in Multi-Agent Safety Deliberation

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2611.04289v1
- **概述**: 探讨多智能体辩论中存在的社会偏见漏洞，分析辩论过程如何放大安全风险，为检索增强Web应用的安全评估提供理论依据。
- **摘要**: Retrieval-augmented Web applications increasingly employ multi-agent debate (MAD) to aggregate conflicting, noisy, and heterogeneous information, yet deliberation is fundamentally a social process susceptible to interpersonal dynamics. When retrieved Web sources contain latent hazards alongside safe factual content, social biases such as conformity pressure and authority deference can override evidence-grounded safety boundaries. In this work, we investigate whether the social structure of deliberation can paradoxically amplify latent Web safety risks. We introduce SafeConflict-Bias, a controlled counterfactual diagnostic protocol spanning six core Web risk categories, which holds queries and retrieved evidence strictly invariant while isolating conversational majority sway, authority cues, and confidence asymmetry. Empirical evaluation across diverse proprietary and open-source backbones reveals that while isolated models reliably reject unsafe guidance, standard MAD catastrophically capitulates to social pressure---surging unsafe adoption from 0.0\% up to 100.0\% and systematically silencing safe minority evidence. To resolve this systemic fragility without retraining or debate regeneration, we propose RiskTrace-Debias, an inference-time auditing framework uniting evidence-first precommitment, social-metadata masking, and consistency-gated arbitration. RiskTrace-Debias suppresses worst-case unsafe adoption to $\le 2.0\%$ across all architectures without inducing over-refusal, while generating verifiable provenance traces to audit interpersonal manipulation in Web deliberation.
- **综合评分**: 81 (相关性 100% / 权威性 100% / 时效性 81% / 热度 0%)
- **推荐理由**: 揭示多智能体安全盲区，极具警示价值。

## 4. Strategist: Evolving Reasoning with Agents

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2611.03618v1
- **概述**: 提出Strategist框架，强调推理策略在智能体系统中的核心地位，通过演化式推理优化模型调用过程，提升智能体表现。
- **摘要**: A model is only half of an AI agent system. The other half is the inference strategy: the reasoning procedure that turns model calls into a response. Today that second half is written by hand, and the experience of building one strategy never carries to the next. We introduce Strategist, a meta-agent that evolves inference strategies across tasks. Each strategy is written as a blueprint,executable code that other strategies can reuse, and together the blueprints form a library. Given a task and a small development set, Strategist retrieves related blueprints, writes candidate strategies, tests them on real samples, and revises them from the results. Every candidate then enters the library, so later tasks build on earlier discoveries. On 30 benchmarks, Strategist beats the strongest baseline on 24 and matches its average accuracy (74.7% vs.74.0%) at 39% lower inference cost. Its strategies also transfer to unseen tasks and other models without further search. The part of an AI system that is not improved on its own now does.
- **综合评分**: 80 (相关性 100% / 权威性 100% / 时效性 74% / 热度 0%)
- **推荐理由**: 优化推理策略，提升智能体核心效能。

## 5. VeriHarm-Bench: Measuring Harmful Success in LLM Coding Agents Verifiably

- **来源**: ArXiv
- **链接**: http://arxiv.org/abs/2611.03575v1
- **概述**: 发布VeriHarm-Bench基准，用于可验证地测量LLM编码代理执行危险操作（如修改系统配置）时的有害成功率，聚焦智能体安全性。
- **摘要**: Large language model (LLM) coding agents increasingly operate with shell access, allowing them to write scripts, move files, alter permissions, and modify system configurations. However, an agent may achieve a user's goal while causing unintended harm, such as deleting unrelated files, weakening access controls, or corrupting data, in response to benign inputs without explicit jailbreaking. This failure mode is particularly important because apparent task success may reassure users that an agent behaved correctly, causing harmful side effects to go unnoticed. We call this harmful success: the agent successfully completes the intended benign task while simultaneously causing unintended harm. Despite its importance, harmful success is difficult to measure because conventional task-success metrics overlook harmful behaviors, while existing safety evaluations are often designed solely to assess harmful outcomes. We introduce VeriHarm, an automatic framework for constructing programmatically verifiable benchmarks that directly measure harmful success. VeriHarm minimally perturbs coding tasks to elicit unintended harmful behavior while maintaining the benignity of the task and preserving the original task objective. It then synthesizes executable harm tests that, together with the original task-correctness tests, evaluate both task accuracy and harmful outcomes. Frontier agents, including GPT-5.6-Sol and Claude-Opus-5, achieve an average task accuracy of 95% on our curated VeriHarm-Bench, yet still struggle to complete tasks safely: their safe success rate, the fraction of tasks completed successfully without triggering the designated harm, averages only 37%. These results suggest that successful task completion can frequently coexist with unintended harm, and that task-success metrics alone may substantially understate the potential safety risks of coding agents.
- **综合评分**: 80 (相关性 100% / 权威性 100% / 时效性 73% / 热度 0%)
- **推荐理由**: 量化编码代理危害，筑牢AI安全防线。
