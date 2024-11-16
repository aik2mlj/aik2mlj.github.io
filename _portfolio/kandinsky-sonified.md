---
title: "Kandinsky Sonified"
excerpt: "An interactive audiovisual music sequencer that creates and sonifies Kandinsky-like abstract paintings.<br/><br/><img src='https://i.imgur.com/TcgzOKZ.png' width='60%'>"
date: 2024-11-01
type: "Interactive Audiovisual Design"
collection: portfolio
---

Wassily Kandinsky would wanna play with this. Greatly inspired by his aesthetics and synaesthesia on abstract colors/shapes, this is a designing trial to combine the graphics with the acoustics in an interactive way.

<iframe width="560" height="315" src="https://www.youtube.com/embed/c_0JdNXhYCc?si=1wHH1TxtLOLfGnWO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

![](https://i.imgur.com/Wo1mKBl.png)
![](https://i.imgur.com/TcgzOKZ.png)

Each shape has a timbre, and each color is mapped to a pitch frequency. The volumn of the shape determines the loudness (and certain effects behind). The position determines the panning (audio image).

The interface is pretty intuitive. You can draw squares, lines, and circles by first selecting the corresponding shapes in the toolbar. The color picker is designed to generate a random color with each click. And the eraser can erase a shape by clicking on it. Further interactions include
- Scroll mouse wheel to adjust the playback speed. You can even go reverse!
- Right click switches the sweeping axis.
- When no tool is selected (click again to de-select one), left click on the canvas moves the play head to the mouse position (You can potentially DJ via this).

Codes can be accessed [here](https://github.com/aik2mlj/music256a-projects/tree/main/kandinsky). Make sure to install the latest ChucK and ChuGL versions. Run the code via `chuck kandinsky.ck`.

## Stories & Details

I love my way towards the final design! (final as for deadline, not final as a design). After the mechanism was established at the milestone, I spent quite some time refactoring my code, puting it into multiple files using the brand new import system. More tweaks happened in visual hints and timbre selection.

Architecture:
- `constant.ck`: storing constant values across files.
- `draw.ck`: toolbar design, tool selection, drawing mechanism.
- `mouse.ck`: mouse class.
- `play.ck`: timbre design, acoustic system.
- `shapes.ck`: shapes, playing mechanism.
- `kandinsky.ck`: main file.

Thanks Kunwoo and Andrew for their support!
