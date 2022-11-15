---
title: "Gigantic Splight"
excerpt: "A 3D fluids simulation project based on Taichi framework. Several fun ways of interactions are combined.<br/><br/><img src='/images/fluid_simulation.png' width='60%'>"
date: 2022-06-01
type: "CG Project"
collection: projects
---

Fluid simulation has been a challenge in Computer Graphics domain. In this project we implemented Macklin and Müller’s algorithm specified in their paper [Macklin and Müller 2013](https://mmacklin.com/pbf_sig_preprint.pdf). To achieve real-timeness, we utilized Taichi framework to render the fluid in real time, which is proven to be robust and handy comparing to CUDA programming. We also raised several interactive ways to enhance its playability. In order to have a better realistic view, foam simulation is also added into our scene. Generally, our work can be regarded as a re-implementation of the algorithm with augmentations in rendering, gaming and interaction. In the end, we also prove with statistics that the algorithm is efficient and robust.

<iframe width="560" height="315" src="https://www.youtube.com/embed/yLRa-U5cDIQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- You can find our midi paper [here](https://github.com/PorygonGroup/Gigantic-Splight/blob/master/Simulating_Particle_Based_Fluids.pdf).
- Our code can be found [here](https://github.com/PorygonGroup/Gigantic-Splight/).

