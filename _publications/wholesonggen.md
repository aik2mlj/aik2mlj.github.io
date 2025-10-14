---
title: "Whole-song Hierarchical Generation of Symbolic Music Using Cascaded Diffusion Models"
collection: publications
excerpt: "Ziyu Wang, <b>Lejun Min</b>, Gus Xia<br/><b>Spotlight (top 5%)</b> in Proc. 12th International Conference on Learning Representations (ICLR 2024)"
date: 2024-05-01
# venue: 'Under Preparation'
---

Ziyu Wang, **Lejun Min**, Gus Xia

**Spotlight (top 5%)** in Proc. 12th International Conference on Learning Representations (ICLR 2024)

Recent deep music generation studies have put much emphasis on _music structure_ and _long-term_ generation. However, we are yet to see high-quality, well-structured whole-song generation. In this paper, we make the first attempt to model a full music piece under the realization of _compositional hierarchy_. With a focus on symbolic representations of pop songs, we define a hierarchical language, in which each level of hierarchy focuses on the context dependency at a certain music scope. The high-level languages reveal whole-song form, phrase, and cadence, whereas the low-level languages focus on notes, chords, and their local patterns. A cascaded diffusion model is trained to model the hierarchical language, where each level is conditioned on its upper levels. Experiments and analysis show that our model is capable of generating full-piece music with recognizable global verse-chorus structure and cadences, and the music quality is higher than the baselines. Additionally, we show that the proposed model is _controllable_ in a flexible way. By sampling from the interpretable hierarchical languages or adjusting external model controls, users can control the music flow via various features such as phrase harmonic structures, rhythmic patterns, and accompaniment texture.

[arXiv](https://arxiv.org/abs/2405.09901) | [OpenReview](https://openreview.net/forum?id=sn7CYWyavh) | [Demo Page](https://wholesonggen.github.io/)
