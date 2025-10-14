---
title: "Polyffusion: A Diffusion Model for Polyphonic Score Generation with Internal and External Controls"
collection: publications
excerpt: '<b>Lejun Min</b>, Junyan Jiang, Gus Xia, Jingwei Zhao<br/>In Proceedings of the 24th International Society for Music Information Retrieval Conference (ISMIR 2023)'
# date: 2009-10-01
# venue: 'Under Preparation'
---

**Lejun Min**, Junyan Jiang, Gus Xia, Jingwei Zhao

In Proceedings of the 24th International Society for Music Information Retrieval Conference (ISMIR 2023)

We propose Polyffusion, a diffusion model that generates polyphonic music scores by regarding music as image-like piano roll representations. The model is capable of controllable music generation with two paradigms: internal control and external control. Internal control refers to the process in which users pre-define a part of the music and then let the model infill the rest, similar to the task of masked music generation (or music inpainting). External control conditions the model with external yet related information, such as chord, texture, or other features, via the cross-attention mechanism. We show that by using internal and external controls, Polyffusion unifies a wide range of music creation tasks, including melody generation given accompaniment, accompaniment generation given melody, arbitrary music segment inpainting, and music arrangement given chords or textures. Experimental results show that our model significantly outperforms existing Transformer and sampling-based baselines, and using pre-trained disentangled representations as external conditions yields more effective controls. 

- The paper can be viewed [here](https://arxiv.org/abs/2307.10304).
- The corresponding demo page is [here](https://polyffusion.github.io/).
