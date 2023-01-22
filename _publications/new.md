---
title: "Piano‑roll Diffusion"
collection: publications
---

<h1>Piano-roll Diffusion</h1>

<h2>Generation</h2>

<style>
  /* Custom player style */
  midi-player {
    display: block;
    width: inherit;
    margin: 4px;
    margin-bottom: 0;
  }

  midi-player::part(control-panel) {
    background: #252a34;
    border: 2px solid #000;
    border-radius: 10px 10px 0 0;
  }

  midi-player::part(play-button) {
    color: #353;
    border: 2px solid currentColor;
    background-color: #4d4;
    border-radius: 20px;
    transition: all 0.2s;
    content: 'hello';
  }

  midi-player::part(play-button):hover {
    color: #0a0;
    background-color: #5f5;
    border-radius: 10px;
  }

  midi-player::part(time) {
    font-family: monospace;
  }

  /* Custom visualizer style */
  midi-visualizer .piano-roll-visualizer {
    background: #252a34;
    border: 2px solid black;
    border-top: none;
    border-radius: 0 0 10px 10px;
    margin: 4px;
    margin-top: 0;
    overflow: auto;
  }

  midi-visualizer svg rect.note {
    opacity: 0.6;
    stroke-width: 2;
  }

  midi-visualizer svg rect.note[data-instrument="0"] {
    fill: #e22;
    stroke: #500;
  }

  midi-visualizer svg rect.note[data-instrument="2"] {
    fill: #2ee;
    stroke: #055;
  }

  midi-visualizer svg rect.note[data-is-drum="true"] {
    fill: #888;
    stroke: #888;
  }

  midi-visualizer svg rect.note.active {
    opacity: 0.9;
    stroke: #000;
  }
</style>

<section id="section3">
    <midi-player src="/media/uncond_pop909_0.mid" sound-font visualizer="#Vis_uncond"> </midi-player>
    <midi-player src="/media/uncond_pop909_1.mid" sound-font visualizer="#Vis_uncond"> </midi-player>
    <midi-player src="/media/uncond_pop909_2.mid" sound-font visualizer="#Vis_uncond"> </midi-player>
    <midi-player src="/media/uncond_pop909_3.mid" sound-font visualizer="#Vis_uncond"> </midi-player>

    <midi-visualizer type="piano-roll" id="Vis_uncond"> </midi-visualizer>
</section>

<h2>Internal Control (Inpainting)</h2>

<h3>Inpaint accompaniment given melody</h3>

The sampling length is 8 bars (16s). Therefore each 8-bar segment may have different texture and chord progression.

<section>
    Melody:
    <midi-player src="/media/uncond_inp_below_canon_mld.mid" sound-font visualizer="#Vis_inp_below_mld"> </midi-player>

    <midi-visualizer src="/media/uncond_inp_below_canon_mld.mid" type="piano-roll" id="Vis_inp_below_mld">
    </midi-visualizer>

    Inpainted result:

    <midi-player src="/media/uncond_inp_below_canon_0.mid" sound-font visualizer="#Vis_inp_below"> </midi-player>
    <midi-player src="/media/uncond_inp_below_canon_1.mid" sound-font visualizer="#Vis_inp_below"> </midi-player>
    <midi-visualizer type="piano-roll" id="Vis_inp_below"> </midi-visualizer>

    Melody:
    <midi-player src="/media/uncond_inp_below_ode_mld.mid" sound-font visualizer="#Vis_inp_below_mld_1"> </midi-player>
    <midi-visualizer src="/media/uncond_inp_below_ode_mld.mid" type="piano-roll" id="Vis_inp_below_mld_1">
    </midi-visualizer>

    Inpainted result:
    <midi-player src="/media/uncond_inp_below_ode_0.mid" sound-font visualizer="#Vis_inp_below_1"> </midi-player>
    <midi-player src="/media/uncond_inp_below_ode_1.mid" sound-font visualizer="#Vis_inp_below_1"> </midi-player>
    <midi-visualizer type="piano-roll" id="Vis_inp_below_1"> </midi-visualizer>
</section>

<script
    src="https://cdn.jsdelivr.net/combine/npm/tone@14.7.58,npm/@magenta/music@1.23.1/es6/core.js,npm/focus-visible@5,npm/html-midi-player@1.5.0"></script>
