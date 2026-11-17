import type { Lang } from './site';

// Layout: t-SNE (scikit-learn, seed 7) over TF-IDF of title + summary, joined with weighted field vectors.
// x and y are normalised to 0..1; y grows downward.

export const fieldOrder = [
  'Continual Unlearning',
  'Machine Unlearning',
  'Continual Learning',
  'PEFT',
  'NLP',
  'Confidence Calibration',
  'CV',
] as const;

export type Field = (typeof fieldOrder)[number] | 'Knowledge Distillation';

export const fieldColor: Record<Field, string> = {
  'Continual Unlearning': '#d92d20',
  'Machine Unlearning': '#e8784f',
  'Continual Learning': '#0a98b0',
  PEFT: '#c08310',
  NLP: '#7a50cc',
  'Confidence Calibration': '#1f8a70',
  CV: '#2d68d2',
  'Knowledge Distillation': '#5f7f91',
};

export type Paper = {
  id: string;
  title: string;
  short: string;
  venue: string;
  year: number;
  fields: Field[];
  url: string;
  summary: Record<Lang, string>;
  x: number;
  y: number;
};

export const papers: Paper[] = [
  {
    "id": "resnet",
    "title": "Deep Residual Learning for Image Recognition",
    "short": "ResNet",
    "venue": "CVPR 2016 · Best Paper",
    "year": 2016,
    "fields": [
      "CV"
    ],
    "url": "https://arxiv.org/abs/1512.03385",
    "summary": {
      "en": "Residual connections let very deep networks train without degrading.",
      "ko": "잔차 연결로 아주 깊은 신경망도 성능 저하 없이 학습되게 함"
    },
    "x": 0.794,
    "y": 0.95
  },
  {
    "id": "rcnn",
    "title": "Rich Feature Hierarchies for Accurate Object Detection and Semantic Segmentation",
    "short": "R-CNN",
    "venue": "CVPR 2014",
    "year": 2014,
    "fields": [
      "CV"
    ],
    "url": "https://arxiv.org/abs/1311.2524",
    "summary": {
      "en": "Classifies region proposals with CNN features for object detection.",
      "ko": "영역 제안을 CNN 특징으로 분류해 객체를 탐지"
    },
    "x": 0.949,
    "y": 0.838
  },
  {
    "id": "yolo",
    "title": "You Only Look Once: Unified, Real-Time Object Detection",
    "short": "YOLO",
    "venue": "CVPR 2016",
    "year": 2016,
    "fields": [
      "CV"
    ],
    "url": "https://arxiv.org/abs/1506.02640",
    "summary": {
      "en": "Treats detection as a single regression problem for real-time object detection.",
      "ko": "탐지를 하나의 회귀 문제로 풀어 실시간으로 객체를 탐지"
    },
    "x": 1.0,
    "y": 0.911
  },
  {
    "id": "vit",
    "title": "An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale",
    "short": "ViT",
    "venue": "ICLR 2021 · Oral",
    "year": 2021,
    "fields": [
      "CV"
    ],
    "url": "https://arxiv.org/abs/2010.11929",
    "summary": {
      "en": "Splits images into patches and classifies them with a plain Transformer.",
      "ko": "이미지를 패치로 나눠 순수 Transformer로 분류"
    },
    "x": 0.885,
    "y": 0.915
  },
  {
    "id": "gan",
    "title": "Generative Adversarial Networks",
    "short": "GAN",
    "venue": "NeurIPS 2014",
    "year": 2014,
    "fields": [
      "CV"
    ],
    "url": "https://arxiv.org/abs/1406.2661",
    "summary": {
      "en": "Trains a generator against a discriminator to learn the data distribution.",
      "ko": "생성자와 판별자를 경쟁시켜 데이터 분포를 학습"
    },
    "x": 0.816,
    "y": 0.845
  },
  {
    "id": "nerf",
    "title": "NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis",
    "short": "NeRF",
    "venue": "ECCV 2020 · Oral, Best Paper HM",
    "year": 2020,
    "fields": [
      "CV"
    ],
    "url": "https://arxiv.org/abs/2003.08934",
    "summary": {
      "en": "Represents a scene as a neural radiance field to render new viewpoints.",
      "ko": "장면을 신경 방사장으로 표현해 새로운 시점의 이미지를 합성"
    },
    "x": 0.918,
    "y": 1.0
  },
  {
    "id": "transformer",
    "title": "Attention Is All You Need",
    "short": "Transformer",
    "venue": "NeurIPS 2017",
    "year": 2017,
    "fields": [
      "NLP"
    ],
    "url": "https://arxiv.org/abs/1706.03762",
    "summary": {
      "en": "Replaces recurrence with self-attention for sequence modeling.",
      "ko": "순환 구조 없이 self-attention만으로 시퀀스를 모델링"
    },
    "x": 0.393,
    "y": 0.581
  },
  {
    "id": "bert",
    "title": "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
    "short": "BERT",
    "venue": "NAACL 2019",
    "year": 2019,
    "fields": [
      "NLP"
    ],
    "url": "https://arxiv.org/abs/1810.04805",
    "summary": {
      "en": "Pre-trains a bidirectional Transformer encoder with masked language modeling.",
      "ko": "Masked LM으로 양방향 Transformer 인코더를 사전학습"
    },
    "x": 0.478,
    "y": 0.579
  },
  {
    "id": "dora",
    "title": "DoRA: Weight-Decomposed Low-Rank Adaptation",
    "short": "DoRA",
    "venue": "ICML 2024 · Oral",
    "year": 2024,
    "fields": [
      "PEFT"
    ],
    "url": "https://arxiv.org/abs/2402.09353",
    "summary": {
      "en": "Splits weights into magnitude and direction, and adapts the direction with LoRA.",
      "ko": "가중치를 크기와 방향으로 나누고 방향을 LoRA로 학습"
    },
    "x": 0.78,
    "y": 0.561
  },
  {
    "id": "diablo",
    "title": "DiaBlo: Diagonal Blocks Are Sufficient For Finetuning",
    "short": "DiaBlo",
    "venue": "ICLR 2026",
    "year": 2026,
    "fields": [
      "PEFT"
    ],
    "url": "https://arxiv.org/abs/2506.03230",
    "summary": {
      "en": "Fine-tunes only the diagonal blocks of weight matrices instead of low-rank adapters.",
      "ko": "low-rank 어댑터 대신 가중치 행렬의 대각 블록만 학습"
    },
    "x": 0.865,
    "y": 0.568
  },
  {
    "id": "mdca",
    "title": "A Stitch in Time Saves Nine: A Train-Time Regularizing Loss for Improved Neural Network Calibration",
    "short": "MDCA",
    "venue": "CVPR 2022",
    "year": 2022,
    "fields": [
      "Confidence Calibration"
    ],
    "url": "https://arxiv.org/abs/2203.13834",
    "summary": {
      "en": "Adds a train-time loss that aligns confidence with accuracy across all classes.",
      "ko": "모든 클래스에서 신뢰도와 정확도를 맞추는 학습 시 정규화 손실"
    },
    "x": 0.375,
    "y": 0.855
  },
  {
    "id": "calib",
    "title": "On Calibration of Modern Neural Networks",
    "short": "Temperature Scaling",
    "venue": "ICML 2017",
    "year": 2017,
    "fields": [
      "Confidence Calibration"
    ],
    "url": "https://arxiv.org/abs/1706.04599",
    "summary": {
      "en": "Shows modern networks are overconfident and fixes it with temperature scaling.",
      "ko": "현대 신경망의 과신 문제를 보이고 temperature scaling으로 보정"
    },
    "x": 0.469,
    "y": 0.838
  },
  {
    "id": "measuring",
    "title": "Measuring Calibration in Deep Learning",
    "short": "Calibration Metrics",
    "venue": "CVPR Workshops 2019",
    "year": 2019,
    "fields": [
      "Confidence Calibration"
    ],
    "url": "https://arxiv.org/abs/1904.01685",
    "summary": {
      "en": "Examines the weaknesses of ECE and proposes better calibration metrics.",
      "ko": "ECE의 한계를 분석하고 더 나은 calibration 지표를 제안"
    },
    "x": 0.438,
    "y": 0.917
  },
  {
    "id": "olora",
    "title": "Orthogonal Subspace Learning for Language Model Continual Learning",
    "short": "O-LoRA",
    "venue": "EMNLP 2023",
    "year": 2023,
    "fields": [
      "Continual Learning"
    ],
    "url": "https://arxiv.org/abs/2310.14152",
    "summary": {
      "en": "Learns each new task in a LoRA subspace orthogonal to earlier tasks.",
      "ko": "새 태스크를 이전 태스크와 직교하는 LoRA 부분공간에서 학습"
    },
    "x": 0.86,
    "y": 0.263
  },
  {
    "id": "inflora",
    "title": "InfLoRA: Interference-Free Low-Rank Adaptation for Continual Learning",
    "short": "InfLoRA",
    "venue": "CVPR 2024",
    "year": 2024,
    "fields": [
      "Continual Learning"
    ],
    "url": "https://arxiv.org/abs/2404.00228",
    "summary": {
      "en": "Designs a LoRA subspace so new tasks do not interfere with old ones.",
      "ko": "새 태스크가 이전 태스크와 간섭하지 않도록 LoRA 부분공간을 설계"
    },
    "x": 0.926,
    "y": 0.316
  },
  {
    "id": "select-distill",
    "title": "Select and Distill: Selective Dual-Teacher Knowledge Transfer for Continual Learning on Vision-Language Models",
    "short": "Select and Distill",
    "venue": "ECCV 2024",
    "year": 2024,
    "fields": [
      "Continual Learning",
      "Knowledge Distillation",
      "CV"
    ],
    "url": "https://arxiv.org/abs/2403.09296",
    "summary": {
      "en": "Picks between the original and the latest model as teacher to keep vision-language models from forgetting.",
      "ko": "원본 모델과 직전 모델 중 교사를 골라 증류해 Vision-Language 모델의 망각을 줄임"
    },
    "x": 0.955,
    "y": 0.221
  },
  {
    "id": "concepts",
    "title": "Which Concepts to Forget and How to Refuse? Decomposing Concepts for Continual Unlearning in Large Vision-Language Models",
    "short": "Concept Decomposition",
    "venue": "CVPR 2026",
    "year": 2026,
    "fields": [
      "Continual Unlearning",
      "CV"
    ],
    "url": "https://arxiv.org/abs/2603.21484",
    "summary": {
      "en": "Breaks forget targets into visual and textual concepts, then routes them to refusal experts.",
      "ko": "지울 대상을 시각·텍스트 개념으로 분해하고 개념별 거부 전문가로 응답"
    },
    "x": 0.402,
    "y": 0.062
  },
  {
    "id": "dilemma",
    "title": "The Forgetting-Retention Dilemma: Certified Unlearning Theory in Continual Learning",
    "short": "Forgetting-Retention Dilemma",
    "venue": "ICML 2026",
    "year": 2026,
    "fields": [
      "Continual Unlearning",
      "Continual Learning"
    ],
    "url": "https://arxiv.org/abs/2606.29832",
    "summary": {
      "en": "Frames unlearning during continual learning as one excess-risk objective with certified guarantees.",
      "ko": "Continual Learning 중의 unlearning을 하나의 초과 위험 목표로 보고 인증 가능한 방법을 제시"
    },
    "x": 0.53,
    "y": 0.105
  },
  {
    "id": "alkn",
    "title": "Adaptive Localization of Knowledge Negation for Continual LLM Unlearning",
    "short": "ALKN",
    "venue": "ICML 2025 · Poster",
    "year": 2025,
    "fields": [
      "Continual Unlearning",
      "NLP"
    ],
    "url": "https://proceedings.mlr.press/v267/wuerkaixi25a.html",
    "summary": {
      "en": "Masks task-vector gradients and adapts unlearning strength to each new request.",
      "ko": "task vector의 gradient를 마스킹하고 요청마다 망각 강도를 조절"
    },
    "x": 0.452,
    "y": 0.177
  },
  {
    "id": "o3",
    "title": "On Large Language Model Continual Unlearning",
    "short": "O³",
    "venue": "ICLR 2025",
    "year": 2025,
    "fields": [
      "Continual Unlearning",
      "NLP"
    ],
    "url": "https://arxiv.org/abs/2407.10223",
    "summary": {
      "en": "Keeps an orthogonal LoRA per unlearning request and loads it with an OOD detector at inference.",
      "ko": "요청마다 직교 LoRA를 두고 추론 시 OOD 탐지기로 불러오는 Continual LLM Unlearning"
    },
    "x": 0.372,
    "y": 0.148
  },
  {
    "id": "lacu",
    "title": "Locality-Aware Continual Unlearning for Diffusion Models",
    "short": "LACU",
    "venue": "arXiv 2025",
    "year": 2025,
    "fields": [
      "Continual Unlearning",
      "Knowledge Distillation",
      "CV"
    ],
    "url": "https://arxiv.org/abs/2512.02657",
    "summary": {
      "en": "Removes concepts from text-to-image diffusion one after another while protecting nearby concepts.",
      "ko": "T2I diffusion에서 개념을 순차적으로 지우면서 의미상 가까운 개념을 보호"
    },
    "x": 0.461,
    "y": 0.0
  },
  {
    "id": "undo",
    "title": "Distillation Robustifies Unlearning",
    "short": "UNDO",
    "venue": "NeurIPS 2025 · Spotlight",
    "year": 2025,
    "fields": [
      "Machine Unlearning",
      "Knowledge Distillation",
      "NLP"
    ],
    "url": "https://arxiv.org/abs/2506.06278",
    "summary": {
      "en": "Shows unlearned knowledge comes back easily, and distills into a noised copy to make forgetting stick.",
      "ko": "지운 지식이 쉽게 되살아남을 보이고, 증류로 망각을 견고하게 만듦"
    },
    "x": 0.0,
    "y": 0.439
  },
  {
    "id": "rklu",
    "title": "Balancing Forget Quality and Model Utility: A Reverse KL-Divergence Knowledge Distillation Approach for Better Unlearning in LLMs",
    "short": "RKLU",
    "venue": "NAACL 2025",
    "year": 2025,
    "fields": [
      "Machine Unlearning",
      "Knowledge Distillation",
      "NLP"
    ],
    "url": "https://aclanthology.org/2025.naacl-long.60/",
    "summary": {
      "en": "Uses reverse-KL distillation to remove only the forget-target part of the token distribution.",
      "ko": "Reverse KL 증류로 토큰 분포에서 지울 대상의 성분만 제거"
    },
    "x": 0.063,
    "y": 0.499
  },
  {
    "id": "undial",
    "title": "UnDIAL: Self-Distillation with Adjusted Logits for Robust Unlearning in Large Language Models",
    "short": "UnDIAL",
    "venue": "NAACL 2025",
    "year": 2025,
    "fields": [
      "Machine Unlearning",
      "Knowledge Distillation",
      "NLP"
    ],
    "url": "https://arxiv.org/abs/2402.10052",
    "summary": {
      "en": "Self-distills with adjusted logits to lower target tokens without unstable gradient ascent.",
      "ko": "조정된 logit으로 자기 증류해 불안정한 gradient ascent 없이 타깃 토큰을 낮춤"
    },
    "x": 0.093,
    "y": 0.419
  }
];
