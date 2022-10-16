---
title: "Controllable Music Score Generation and Piano Reduction with Piano‑roll Diffusion"
collection: publications
permalink: /publication/piano-roll-diffusion
excerpt: 'Lejun Min, Gus Xia<br />Our work utilizes conditional diffusion models on image‑like piano‑roll generation. By
exploring means of conditional methods and guidances for diffusion models on music arrangement tasks, we combine
inductive biases of intrinsic musical structure into diffusion‑based models.'
# date: 2009-10-01
# venue: 'Under Preparation'
---
<style>
  /* Custom player style */
  #section3 midi-player {
    display: block;
    width: inherit;
    margin: 4px;
    margin-bottom: 0;
  }

  #section3 midi-player::part(control-panel) {
    background: #ff5;
    border: 2px solid #000;
    border-radius: 10px 10px 0 0;
  }

  #section3 midi-player::part(play-button) {
    color: #353;
    border: 2px solid currentColor;
    background-color: #4d4;
    border-radius: 20px;
    transition: all 0.2s;
    content: 'hello';
  }

  #section3 midi-player::part(play-button):hover {
    color: #0a0;
    background-color: #5f5;
    border-radius: 10px;
  }

  #section3 midi-player::part(time) {
    font-family: monospace;
  }

  /* Custom visualizer style */
  #section3 midi-visualizer .piano-roll-visualizer {
    background: #ffd;
    border: 2px solid black;
    border-top: none;
    border-radius: 0 0 10px 10px;
    margin: 4px;
    margin-top: 0;
    overflow: auto;
  }

  #section3 midi-visualizer svg rect.note {
    opacity: 0.6;
    stroke-width: 2;
  }

  #section3 midi-visualizer svg rect.note[data-instrument="0"] {
    fill: #e22;
    stroke: #500;
  }

  #section3 midi-visualizer svg rect.note[data-instrument="2"] {
    fill: #2ee;
    stroke: #055;
  }

  #section3 midi-visualizer svg rect.note[data-is-drum="true"] {
    fill: #888;
    stroke: #888;
  }

  #section3 midi-visualizer svg rect.note.active {
    opacity: 0.9;
    stroke: #000;
  }
</style>

This is a work-in-progress project. Yet we have already achieved generations of excellent-quality music segments.

Here are some generated 8-bar segments from our unconditional diffusion model trained on
[POP909](https://github.com/music-x-lab/POP909-Dataset) dataset.


<section id="section3">
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
</section>

<script
  src="https://cdn.jsdelivr.net/combine/npm/tone@14.7.58,npm/@magenta/music@1.23.1/es6/core.js,npm/focus-visible@5,npm/html-midi-player@1.5.0"></script>
