---
title: "Polyffusion: A Diffusion Model for Polyphonic Score Generation with Internal and External Controls"
collection: publications
excerpt: 'Lejun Min, Junyan Jiang, Gus Xia'
# date: 2009-10-01
# venue: 'Under Preparation'
---

Lejun Min, Junyan Jiang, Gus Xia

This paper has been submitted to **IJCAI 2023, AI The Arts And Creativity**.

In this paper, we propose a novel method to generate polyphonic music scores with a diffusion model by regarding music as image-like piano roll representations. We distinguish between two paradigms of *controllable* music generation under a diffusion framework: internal control and external control. Internal control refers to the process that users first pre-define a part of the music and let the model infill the rest, which is similar to the task of masked music generation (or music inpainting). External control means to condition the model with external yet related information, such as chord, texture, or other statistics of music, via the cross-attention mechanism. We show that by using internal and external controls, our model unifies a wide range of music creation tasks, including melody generation given accompaniment, accompaniment generation given melody, arbitrary music segment inpainting, and general music arrangement given chords or textures. Experimental results show that our model achieves better generative quality compared to existing autoregressive and sampling-based baselines, and using pre-trained disentangled representations as external conditions yields more effective controls.

The corresponding demo page is [here](https://polyffusion.github.io/).
