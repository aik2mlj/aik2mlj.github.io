// Transcribed from public/files/Lejun Min Résumé.pdf. Keep the two in sync.

export const education = [
  {
    place: 'Stanford University, CCRMA',
    degree: 'Master in Music, Science, and Technology (GPA 4.0/4.0)',
    dates: '2024 – expected Jan. 2027',
    points: [
      'Advisors: Prof. Marina Bosi, Prof. Takako Fujioka',
      'Teaching assistant for Perceptual Audio Coding, Music 422 (Winter 2026)',
    ],
  },
  {
    place: 'Shanghai Jiao Tong University, Zhiyuan College',
    degree: 'Bachelor in Computer Science (Fellowship)',
    dates: '2019 – 2023',
    points: [
      'Member of the ACM Honor Class, an elite CS program for the top 5% of students',
      'Top 1% Outstanding Bachelor’s Thesis (41 out of 3873 graduates)',
    ],
  },
];

export const experience = [
  {
    place: 'Qwen Audio, Alibaba Token Foundry',
    role: 'Research Intern',
    dates: 'June 2026 – Sept. 2026',
    points: [
      'Co-developed Qwen-Audio-3.0-Gen-Preview, a unified generative model for long-form, multi-character audio scenes with explicit temporal control.',
      'Improved downstream semantic alignment of an RVQ-based tokenizer by 25% using contrastive learning and multi-stage training.',
      'Contributed to curation and post-processing of 1M+ hours of audio data.',
    ],
  },
  {
    place: 'Smule Labs',
    role: 'Research Intern',
    dates: 'Oct. 2025 – Dec. 2025, Mar. 2026 – May 2026',
    points: [
      'Developed an end-to-end audio-captioning framework for disentangled music-semantic representations; achieved >0.4 Spearman audio–caption alignment in internal evaluations and validated specialization across five musical attributes.',
    ],
  },
  {
    place: 'Sony CSL Paris',
    role: 'Research Intern',
    dates: 'June 2025 – Sept. 2025',
    points: [
      'Built a two-stage generative music remixing system using mix-invariant representations and conditional generation.',
      'Reduced content-embedding variation across mixes of the same song by >90% in controlled ablations, without requiring stems at inference.',
    ],
  },
  {
    place: 'SoundPatrol & Stanford',
    role: 'Research Assistant',
    dates: 'Feb. 2025 – May 2025',
    points: [
      'Trained singer-identity representations for singing-voice deepfake detection; reduced EER by 10 percentage points and reached 96% top-1 accuracy on SingFake. The system has been integrated into SoundPatrol’s infringement detection pipeline.',
    ],
  },
  {
    place: 'Music X Lab, MBZUAI',
    role: 'Research Assistant',
    dates: 'June 2022 – Dec. 2022, Sept. 2023 – Feb. 2024',
    points: [
      'Developed a four-stage cascaded diffusion system over a hierarchical symbolic language, generating structured pop songs up to 256 measures and significantly outperforming baselines on long-range structure (ICLR 2024 Spotlight, top 5%).',
      'Developed Polyffusion, a piano-roll DDPM supporting five generation and control tasks via masked inpainting and cross-attention; achieved the best objective results on 4/5 tasks and significant gains in naturalness and musicality (ISMIR 2023).',
    ],
  },
];

export const skills = [
  {
    group: 'Audio ML',
    items: [
      'Audio & music generation',
      'Audio tokenization / neural codecs',
      'Audio representation learning',
      'Audio captioning',
      'Music information retrieval',
      'Audio deepfake detection',
      'Perceptual audio coding',
      'Digital signal processing',
    ],
  },
  {
    group: 'ML methods',
    items: ['Diffusion models', 'Transformers', 'Self-supervised learning', 'Multimodal learning', 'Contrastive learning'],
  },
  {
    group: 'Languages & frameworks',
    items: ['Python', 'C++', 'Rust', 'PyTorch', 'TensorFlow', 'Hugging Face', 'torchaudio', 'librosa', 'Accelerate', 'Lightning'],
  },
  { group: 'Audio tools', items: ['JUCE', 'ChucK', 'Ambisonics'] },
  { group: 'ML systems', items: ['Linux', 'Docker', 'Distributed training', 'SLURM', 'MLflow'] },
  { group: 'Spoken', items: ['Mandarin', 'English'] },
];
