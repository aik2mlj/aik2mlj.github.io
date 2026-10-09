---
title: "Semantic Refinement of Universal Audio Representations through Audio-Description Alignment"
date: 2026-09-08
lane: research
authors: "**Lejun Min**, Junyu Dai, Ruichen Zheng, Xinyue Fan, Yang Xiang, Huaichen Zhang, Xingchen Song, Yufei Shi, Han Zhao, Xiangang Li"
venue: arXiv 2026
links:
  - label: arXiv
    url: https://arxiv.org/abs/2609.08429
---

**Lejun Min**, Junyu Dai, Ruichen Zheng, Xinyue Fan, Yang Xiang, Huaichen Zhang, Xingchen Song, Yufei Shi, Han Zhao, Xiangang Li

arXiv preprint arXiv:2609.08429, September 2026. Submitted to ICASSP 2027

Universal audio representations must preserve acoustic detail while making high-level concepts accessible across speech, music, environmental sound, and downstream models of different capacities. We study semantic refinement of an acoustically pretrained encoder by adding audio-description alignment to a foundation of BEST-RQ, reconstruction, and CTC. We compare matched control, shuffled-description, and correctly paired trajectories to distinguish correct correspondence from an extra contrastive objective. Each endpoint is frozen and evaluated with a temporal-mean linear probe and a sequence-aware LLM readout, testing whether the refined information is directly accessible and remains useful to a stronger model. Across three paired seeds, correct alignment improves domain-balanced classification by 4.66 points with the linear probe and 2.59 points with the sequence-aware LLM, with positive changes in every domain. Correct pairing accounts for 87% of the linear-probe gain, while the LLM shows its clearest correspondence-specific benefit in captioning. Dense acoustic objectives provide complementary gains under both readouts. A separate 24-layer continuation remains competitive with leading public encoders under the shared evaluator, supporting the recipe beyond the controlled study.

- The paper can be viewed [here](https://arxiv.org/abs/2609.08429).
