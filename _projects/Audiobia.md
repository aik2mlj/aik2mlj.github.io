---
title: "Audiobia"
excerpt: "Audio classification project using Google's EfficientNet.<br/><br/><img src='https://github.com/aik2mlj/Audiobia/raw/8b92367505b380ca028b573a9f39b7100fe9b920/pictures/harmonic.png' width='60%'>"
date: 2021-05-31
type: "Programming Project"
collection: projects
---

I chose the audio classification task as the open-topic course project for Machine Learning (CS420). I implemented an audio classification model that adopted pre-trained EfficientNet. To enhance its discernment of audio traits, I extracted harmonic and percussive features from audio data using Harmonic Percussive Source Separation (HPSS), and fed them into EfficientNet for fine-tuning.

- You can see my mini paper [here](https://github.com/aik2mlj/Audiobia/blob/master/minipaper.pdf).

Here are some audio spectrum pictures.

![original](https://github.com/aik2mlj/Audiobia/raw/8b92367505b380ca028b573a9f39b7100fe9b920/pictures/original.png)
![percussive](https://github.com/aik2mlj/Audiobia/raw/8b92367505b380ca028b573a9f39b7100fe9b920/pictures/percussive.png)
![harmonic](https://github.com/aik2mlj/Audiobia/raw/8b92367505b380ca028b573a9f39b7100fe9b920/pictures/harmonic.png)
![masked](https://github.com/aik2mlj/Audiobia/raw/8b92367505b380ca028b573a9f39b7100fe9b920/pictures/masked.png)
