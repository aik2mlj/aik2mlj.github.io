---
title: "Sonic Skateboard"
excerpt: "Turn a skateboard into an instrument.<br/><br/><img src='https://pub-29c70120d3f24ac491b747be7b6a79e6.r2.dev/2025/11/a02bf4b87d38dc38b92e3796f2fbf2af.JPG' width='40%'>"
date: 2025-06-04
type: "New Interfaces for Musical Expression"
collection: portfolio
---

<style>
    img {
        display: block;
        margin: 2rem auto;
        max-width: 100%;
        border-radius: 10px;
        border: 2px solid #444;
        box-shadow: 0 0 20px #000;
    }

    .gallery {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
        margin: 2.5rem 0;
    }

    .gallery img {
        width: 260px;
        border-radius: 8px;
        border: 2px solid #444;
        box-shadow: 0 0 20px #000;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .gallery img:hover {
        transform: scale(1.05);
        box-shadow: 0 0 30px #ff0000aa;
    }
</style>

As a skater, I’ve always been fascinated by how skateboarding allows one to explore different terrains through movement and feedback. You *feel* the space — your mind and body become one with it. Playing music, on the other hand, opens a sonic, imaginary, and ever-morphing space — *a flow* of its own. Can these spaces — the physical and the sonic — be brought together? What if the skateboard itself became the instrument, and the skater the performer?

In the realm of new interfaces for musical expression (NIME), the mapping between a physical interface and the parameters of digital sound synthesis is at the heart of the design. Deconstructing a sport and reinterpreting its movements as musical gestures can be approached in many ways. In skateboarding, rotation plays a central role. A skater can rotate the board around the **x-axis** (e.g., manuals), the **y-axis** (e.g., leaning to turn), and the **z-axis** (e.g., shove-its). These combinations of rotations form the foundation of the rich vocabulary of skateboard tricks.

<img src="https://i.imgur.com/ms1jMYK.png" alt="skateboard diagram"
    style="width:300px; max-width:90%; display:block; margin:2rem auto; border-radius:10px; border:2px solid #444; box-shadow:0 0 20px #000;">

The main technical work focused on wiring a microcontroller and sensors capable of capturing angular motion and transmitting the data wirelessly to a sound engine. New media artist and skater Simon Morris realized [a similar idea](https://web.archive.org/web/20070315064315/http://www.therealsimon.com/) and presented it at [NIME 2007](https://www.nime.org/proc/morris2007/index.html). In contrast to his sensor setup, I used an **Adafruit Huzzah32 ESP32 Feather** microcontroller paired with a **BNO085 9-DoF sensor**. My classmate [Gregg Oliva](https://www.greggoliva.com/) created an excellent [Arduino tutorial](https://docs.google.com/document/d/1WVJYNPEY4cX4OBjbL-dEY5dioVa9OIjl6uuZTinvYi4) for sending MIDI data via Bluetooth using this configuration. This allowed me to capture rotational data across all three axes and transmit them as **MIDI CC signals** in real time — ready to be mapped to sonic parameters.

The musical component was written in [ChucK](https://chuck.stanford.edu/). I’ve long been drawn to FM synthesis for its minimalist structure and expressive richness, and I’ve always wanted to bring it into a metal-music context. I mapped the three MIDI CC signals to control the **pitch**, **loudness**, and **modulation depth** of an FM synthesizer. By riding, turning, and performing tricks on the skateboard, these parameters evolved dynamically, producing a continuously morphing lead timbre. Accompanied by a heavy metal guitar loop (also written in ChucK) and a pre-recorded drum track, I performed this *Sonic Skateboard* piece live — transforming physical motion into musical expression.

<div class="gallery">
    <a href="https://pub-29c70120d3f24ac491b747be7b6a79e6.r2.dev/2025/11/e6f2b62a89591ab266bbce13ac5e01a3.jpg"
        target="_blank">
        <img src="https://pub-29c70120d3f24ac491b747be7b6a79e6.r2.dev/2025/11/e6f2b62a89591ab266bbce13ac5e01a3.jpg"
            alt="Sonic Skateboard 4">
    </a>

    <a href="https://pub-29c70120d3f24ac491b747be7b6a79e6.r2.dev/2025/11/ef91eae7262901aa6ad4f440405533b5.jpg"
        target="_blank">
        <img src="https://pub-29c70120d3f24ac491b747be7b6a79e6.r2.dev/2025/11/ef91eae7262901aa6ad4f440405533b5.jpg"
            alt="Sonic Skateboard 5">
    </a>

    <a href="https://pub-29c70120d3f24ac491b747be7b6a79e6.r2.dev/2025/11/26e2b29208da40d1d231bfbfac2b0f21.jpg"
        target="_blank">
        <img src="https://pub-29c70120d3f24ac491b747be7b6a79e6.r2.dev/2025/11/26e2b29208da40d1d231bfbfac2b0f21.jpg"
            alt="Sonic Skateboard 6">
    </a>

    <a href="https://pub-29c70120d3f24ac491b747be7b6a79e6.r2.dev/2025/11/e5e2ca403d90320a5d231b734992db83.JPG"
        target="_blank">
        <img src="https://pub-29c70120d3f24ac491b747be7b6a79e6.r2.dev/2025/11/e5e2ca403d90320a5d231b734992db83.JPG"
            alt="Sonic Skateboard 1">
    </a>
    <a href="https://pub-29c70120d3f24ac491b747be7b6a79e6.r2.dev/2025/11/a02bf4b87d38dc38b92e3796f2fbf2af.JPG"
        target="_blank">
        <img src="https://pub-29c70120d3f24ac491b747be7b6a79e6.r2.dev/2025/11/a02bf4b87d38dc38b92e3796f2fbf2af.JPG"
            alt="Sonic Skateboard 2">
    </a>
    <a href="https://pub-29c70120d3f24ac491b747be7b6a79e6.r2.dev/2025/11/94a129830f8afd79252f6992f8e285c9.jpg"
        target="_blank">
        <img src="https://pub-29c70120d3f24ac491b747be7b6a79e6.r2.dev/2025/11/94a129830f8afd79252f6992f8e285c9.jpg"
            alt="Sonic Skateboard 3">
    </a>
</div>
