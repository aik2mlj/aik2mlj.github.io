---
title: "Controllable Music Score Generation and Piano Reduction with Piano‑roll Diffusion"
collection: publications
permalink: /publication/piano-roll-diffusion
excerpt: 'Lejun Min, Gus Xia<br/>Our work utilizes conditional diffusion models on image‑like piano‑roll generation. By exploring means of conditional methods and guidances for diffusion models on music arrangement tasks, we combine inductive biases of intrinsic musical structure into diffusion‑based models.'
# date: 2009-10-01
# venue: 'Under Preparation'
---

This is a work-in-progress project. Yet we have already achieved generations of excellent-quality music segments.

Here are some generated 8-bar segments from our unconditional diffusion model trained on
[POP909](https://github.com/music-x-lab/POP909-Dataset) dataset.


<midi-player src="/media/uncond_pop909_0.mid" sound-font visualizer="#Vis_uncond_pop909_0">
</midi-player>

<midi-visualizer src="/media/uncond_pop909_0.mid" type="piano-roll" id="Vis_uncond_pop909_0">
</midi-visualizer>

<midi-player src="/media/uncond_pop909_1.mid" sound-font visualizer="#Vis_uncond_pop909_1">
</midi-player>

<midi-visualizer src="/media/uncond_pop909_1.mid" type="piano-roll" id="Vis_uncond_pop909_1">
</midi-visualizer>

<midi-player src="/media/uncond_pop909_2.mid" sound-font visualizer="#Vis_uncond_pop909_2">
</midi-player>

<midi-visualizer src="/media/uncond_pop909_2.mid" type="piano-roll" id="Vis_uncond_pop909_2">
</midi-visualizer>

<midi-player src="/media/uncond_pop909_3.mid" sound-font visualizer="#Vis_uncond_pop909_3">
</midi-player>

<midi-visualizer src="/media/uncond_pop909_3.mid" type="piano-roll" id="Vis_uncond_pop909_3">
</midi-visualizer>

<script
  src="https://cdn.jsdelivr.net/combine/npm/tone@14.7.58,npm/@magenta/music@1.23.1/es6/core.js,npm/focus-visible@5,npm/html-midi-player@1.5.0"></script>
