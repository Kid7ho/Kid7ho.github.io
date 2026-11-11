export type Lang = 'en' | 'ko';
export type Text = Record<Lang, string>;

export type LinkItem = { label: Text; href: string };

export const profile = {
  name: { en: 'Jin Myoung Hyun', ko: '현진명' } as Text,
  email: 'jinmyoung.hyun@gmail.com',
  github: 'https://github.com/Kid7ho',
  // Add the LinkedIn URL once the account exists.
  linkedin: 'https://www.linkedin.com/in/imjimmy03/',
  linkedinLabel: 'linkedin.com/in/imjimmy03' as string | null,
  // Put the image in public/ and set the path, for example '/profile.jpg'.
  photo: '/profile.jpg' as string | null,
  monogram: 'JM',
  positions: [
    { role: { en: 'Undergraduate Student', ko: '학부생' }, org: { en: 'Computer Science, Yonsei University', ko: '연세대학교 컴퓨터과학과' } },
    { role: { en: 'Undergraduate Researcher', ko: '학부 연구생' }, org: { en: 'Edge AI Lab (Prof. Dong-Jun Han)', ko: 'Edge AI Lab (지도교수 한동준)' } },
    { role: { en: 'Member', ko: '회원' }, org: { en: 'YAI, Yonsei University AI Society', ko: 'YAI 연세대학교 인공지능 학회' } },
  ] as { role: Text; org: Text }[],
  greeting: {
    hello: { en: 'Hello!', ko: '안녕하세요!' } as Text,
    // Text in [brackets] links to the AI Health Guardian case study.
    paragraphs: [
      {
        en: 'I’m Jin Myoung Hyun, a computer science undergraduate at Yonsei University. I’m interested in how AI systems remember, forget, and earn trust, and I’m currently studying LLM Continual Unlearning at Edge AI Lab, advised by Prof. Dong-Jun Han.',
        ko: '연세대학교 컴퓨터과학과 학부생 현진명입니다. AI가 무엇을 기억하고, 잊고, 믿을 수 있는지에 관심을 두고, 현재 Edge AI Lab에서 한동준 교수님 지도 아래 LLM Continual Unlearning을 공부하고 있습니다.',
      },
      {
        en: 'I also led [AI Health Guardian], a KakaoTalk service that helps older adults check the health information they receive.',
        ko: '또한 어르신이 받은 건강정보를 확인하도록 돕는 카카오톡 서비스 [AI 건강지킴이]를 이끌었습니다.',
      },
    ] as Text[],
  },
};

export const ui = {
  nav: {
    home: { en: 'Home', ko: '홈' },
    research: { en: 'Research', ko: '연구' },
    projects: { en: 'Projects', ko: '프로젝트' },
    resume: { en: 'Resume', ko: '이력서' },
  },
  experience: { en: 'Experience', ko: '경력' },
  recognition: { en: 'Awards', ko: '수상' },
  email: { en: 'Email', ko: '이메일' },
  viewProject: { en: 'See in Details', ko: '자세히 보기' },
  newBadge: 'New',
  openResume: { en: 'Open resume', ko: '이력서 보기' },
  backToProjects: { en: 'All projects', ko: '프로젝트 목록' },
  skip: { en: 'Skip to content', ko: '본문으로 건너뛰기' },
  langLabel: { en: 'Choose language', ko: '언어 선택' },
  menuLabel: { en: 'Main menu', ko: '주 메뉴' },
} satisfies Record<string, unknown>;

export type Experience = {
  // Image in public/logos, shown beside the entry.
  logo: string;
  period: Text;
  role: Text;
  org: Text;
  note?: Text;
};

export const experience: Experience[] = [
  {
    logo: '/logos/yai-logo.jpeg',
    period: { en: 'Jan 2027 – Jun 2027 (incoming)', ko: '2027.01 – 2027.06 (예정)' },
    role: { en: 'Vice President, 19th cohort', ko: '19기 운영부장 (부회장)' },
    org: { en: 'YAI, Yonsei University AI Society', ko: 'YAI 연세대학교 인공지능 학회' },
  },
  {
    logo: '/logos/yonsei.svg',
    period: { en: 'Jul 2026 – Present', ko: '2026.07 – 현재' },
    role: { en: 'Undergraduate Researcher', ko: '학부 연구생' },
    org: { en: 'Edge AI Lab, Yonsei University', ko: '연세대학교 Edge AI Lab' },
    note: {
      en: 'Studying LLM Continual Unlearning with Prof. Dong-Jun Han.',
      ko: '한동준 교수님 지도 아래 LLM Continual Unlearning 공부 중',
    },
  },
  {
    logo: '/logos/liner.svg',
    period: { en: 'Jul 2026 – Nov 2026', ko: '2026.07 – 2026.11' },
    role: { en: 'Team Lead', ko: '팀장' },
    org: { en: 'AI Health Guardian, YAI × Liner Industry-University Cooperation', ko: 'AI 건강지킴이, YAI × Liner 산학협력' },
    note: {
      en: 'Entered a contest with a service built on the Liner API, led its planning and development end to end, and took it to field volunteer sessions with older adults.',
      ko: 'Liner API를 활용한 서비스로 공모전에 참가해 기획 및 개발 전체를 담당, 최종적으로 어르신 대상 현장 봉사까지 진행',
    },
  },
  {
    logo: '/logos/yai-logo.jpeg',
    period: { en: 'Jan 2026 – Present', ko: '2026.01 – 현재' },
    role: { en: 'Member, 17th cohort – Present', ko: '회원, 17기 – 현재' },
    org: { en: 'YAI, Yonsei University AI Society', ko: 'YAI 연세대학교 인공지능 학회' },
    note: {
      en: 'Joined AI paper studies, industry collaborations, and YAICON projects.',
      ko: '인공지능 논문 스터디, 산학협력 및 YAICON 프로젝트 참여',
    },
  },
  {
    logo: '/logos/army.png',
    period: { en: 'Mar 2024 – Sep 2025', ko: '2024.03 – 2025.09' },
    role: { en: 'Military service', ko: '군 복무' },
    org: { en: 'Republic of Korea Army', ko: '대한민국 육군' },
    note: { en: 'Honorably discharged as a sergeant.', ko: '병장 만기 전역' },
  },
  {
    logo: '/logos/dli.jpg',
    period: { en: 'Jan 2024 – Feb 2024', ko: '2024.01 – 2024.02' },
    role: { en: 'Undergraduate Researcher', ko: '학부 연구생' },
    org: { en: 'DLI Lab, Yonsei University', ko: '연세대학교 DLI Lab' },
    note: {
      en: 'Studied NLP through Stanford CS224N and paper reviews with Prof. Jinyoung Yeo’s lab.',
      ko: '여진영 교수님 연구실에서 Stanford CS224N 기반 NLP 스터디 및 논문 리뷰 진행',
    },
  },
  {
    logo: '/logos/yonsei.svg',
    period: { en: 'Mar 2022 – Feb 2028 (expected)', ko: '2022.03 – 2028.02 (졸업 예정)' },
    role: { en: 'B.S. in Computer Science', ko: '컴퓨터과학과 학사' },
    org: { en: 'Yonsei University', ko: '연세대학교' },
    note: {
      en: 'GPA 4.05/4.30, major GPA 4.15/4.30, through Spring 2026.',
      ko: '평점 4.05/4.30, 전공 평점 4.15/4.30 (2026년 1학기까지)',
    },
  },
];

export const awards: { date: Text; title: Text; note: Text }[] = [
  {
    date: { en: 'Sep 2026', ko: '2026.09' },
    title: {
      en: 'Gyeonggi Volunteer Center Ideathon 2026: Chairperson’s Award',
      ko: '2026 자원봉사 아이디어톤: 경기도자원봉사센터이사장상',
    },
    note: {
      en: 'Team lead',
      ko: '팀장 역할',
    },
  },
  {
    date: { en: 'Spring 2026', ko: '2026-1학기' },
    title: {
      en: 'Yonsei University Spring 2026 Academic Excellence Award',
      ko: '연세대학교 2026-1학기 학업성적 우수상',
    },
    note: { en: '', ko: '' },
  },
];

export type Publication = {
  date: Text;
  authors: Text;
  title: Text;
  venue: Text;
  role: Text;
  url?: string;
  links?: LinkItem[];
};

export const research = {
  title: { en: 'Research', ko: '연구' } as Text,
  current: {
    heading: { en: 'LLM Continual Unlearning', ko: 'LLM Continual Unlearning' } as Text,
    body: {
      en: 'I study how large language models can remove requested information one request after another while keeping the knowledge they should retain.',
      ko: '대규모 언어 모델이 연속된 삭제 요청마다 지정된 정보를 지우면서 남겨야 할 지식은 유지하는 방법을 연구합니다.',
    } as Text,
  },
  interests: {
    heading: { en: 'Interests', ko: '관심 분야' } as Text,
    items: [
      { en: 'Machine Unlearning', ko: 'Machine Unlearning' },
      { en: 'Continual Learning', ko: 'Continual Learning' },
      { en: 'Federated Learning', ko: 'Federated Learning' },
      { en: 'On-Device AI', ko: 'On-Device AI' },
      { en: 'Trustworthy AI', ko: '신뢰할 수 있는 AI' },
    ] as Text[],
  },
  publicationsHeading: { en: 'Publications', ko: '논문' } as Text,
  roleLabel: { en: 'My role', ko: '본인 역할' } as Text,
  // Newest first. Set `url` to the paper's page or a PDF in public/papers: the title then links to it.
  // `links` are extra links shown under the paper, such as code.
  publications: [
    {
      date: { en: 'In preparation', ko: '준비 중' } as Text,
      authors: {
        en: 'Y. Choi, K. Lee, J. M. Hyun',
        ko: 'Y. Choi, K. Lee, J. M. Hyun',
      } as Text,
      title: {
        en: 'Sensitivity Stacking: Intuitive Backpropagation Without Index Hell',
        ko: 'Sensitivity Stacking: Intuitive Backpropagation Without Index Hell',
      } as Text,
      venue: {
        en: 'In preparation for ICLR 2027 Blog Post Track',
        ko: 'ICLR 2027 Blog Post Track 제출 준비 중',
      } as Text,
      role: {
        en: 'Co-second author (tentative); writing and idea development',
        ko: '공동 2저자 예정, 일부 집필과 아이디어 발전',
      } as Text,
    },
    {
      date: { en: 'Oct 2026', ko: '2026.10' } as Text,
      authors: {
        en: 'Y. Choi, N. Kwak, H. J. Lee, K. Lee, J. M. Hyun',
        ko: '최윤혁, 곽나연, 이현준, 이강원, 현진명',
      } as Text,
      title: {
        en: 'How You Mark It Matters: Particle-Level Framing Effects in a Korean Search Agent',
        ko: '한국어 검색 에이전트 환경에서 조사 단위 프레이밍이 미치는 영향 분석',
      } as Text,
      venue: { en: 'HCLT 2026, Oral', ko: 'HCLT 2026, Oral' } as Text,
      url: '/papers/How_You_Mark_It_Matters_HCLT_2026.pdf',
      links: [
        { label: { en: 'Code and draft', ko: '코드와 초고' }, href: 'https://github.com/choiyh592/How_You_Mark_It_Matters' },
        { label: { en: 'Conference website', ko: '학술대회 홈페이지' }, href: 'https://sites.google.com/view/hclt2026' },
      ] as LinkItem[],
      role: { en: 'Co-built experimental data and reviewed the manuscript', ko: '실험 데이터 공동 구축, 논문 검수' } as Text,
    },
    {
      date: { en: 'Sep 2026', ko: '2026.09' } as Text,
      authors: {
        en: 'K. Lee†, Y. Choi†, J. M. Hyun, H. J. Lee, N. Kwak',
        ko: '이강원†, 최윤혁†, 현진명, 이현준, 곽나연',
      } as Text,
      title: {
        en: 'Self-Claimed Authority Cues and Application-Layer Fact Verification in a Korean-Language Commercial Generative Search API',
        ko: '한국어 상용 생성형 검색 API의 자기주장 권위 단서와 응용 계층 사실검증',
      } as Text,
      venue: { en: 'Korea AI 2026', ko: '제7회 한국 인공지능 학술대회' } as Text,
      links: [
        { label: { en: 'Conference website', ko: '학술대회 홈페이지' }, href: 'https://koreaai.org/' },
      ] as LinkItem[],
      role: { en: 'Co-built experimental data and reviewed the manuscript', ko: '실험 데이터 공동 구축, 논문 검수' } as Text,
    },
  ] as Publication[],
  note: { en: '† Equal first authors', ko: '† 공동 제1저자' } as Text,
};

export type Project = {
  isNew?: boolean;
  slug: string;
  title: Text;
  period: Text;
  summary: Text;
  role: Text;
  stack: string;
  links: LinkItem[];
};

export const featured: Project = {
  slug: 'ai-health-guardian',
  isNew: true,
  title: { en: 'AI Health Guardian', ko: 'AI 건강지킴이' },
  period: { en: 'Jul 2026 – Nov 2026', ko: '2026.07 – 2026.11' },
  summary: {
    en: 'A KakaoTalk service for older adults. Share a health claim, and it checks academic papers and Korean food-safety data, then answers with a four-level traffic light.',
    ko: '어르신이 받은 건강정보를 카카오톡으로 공유하면 논문과 식약처 데이터를 확인해 4단계 신호등으로 알려 주는 서비스입니다.',
  },
  role: {
    en: 'Team lead. Planned and built the service.',
    ko: '팀장. 서비스 기획과 개발 전체 담당',
  },
  stack: 'Python, Docker, Fly.io, Liner API, Kakao Chatbot',
  links: [
    { label: { en: 'Open KakaoTalk channel', ko: '카카오톡 채널 열기' }, href: 'https://pf.kakao.com/_FZXrX' },
    { label: { en: 'View code', ko: '코드 보기' }, href: 'https://github.com/Kid7ho/yai_ai_health_check' },
  ],
};

// The entry with isNew fills the top slot on the Projects page and gets the New badge.
// To feature a new project, add it here with isNew: true and remove the flag from the old one.
export const projects: Project[] = [
  featured,
  {
    slug: 'mapmory',
    title: { en: 'Mapmory', ko: 'Mapmory' },
    period: { en: 'Jul 2026 – Sep 2026', ko: '2026.07 – 2026.09' },
    summary: {
      en: 'An iOS journal where photos unlock places on a custom vector map, with group sharing. Development finished; not released.',
      ko: '사진으로 지도를 해금하는 iOS 기록 앱입니다. 커스텀 벡터 지도와 그룹 공유를 구현했으며, 개발을 마쳤고 출시는 하지 않았습니다.',
    },
    role: { en: 'Developer on a two-person team', ko: '2인 팀 개발' },
    stack: 'SwiftUI, SwiftData, Supabase',
    links: [{ label: { en: 'Instagram', ko: 'Instagram' }, href: 'https://www.instagram.com/mapmory_official/' }],
  },
  {
    slug: 'real-fit',
    title: { en: 'Real Fit Recommendation System', ko: 'Real Fit Recommendation System' },
    period: { en: 'Apr 2026 – Jun 2026', ko: '2026.04 – 2026.06' },
    summary: {
      en: 'One photo, height, and weight are enough to estimate your body, recommend a size, and show a virtual try-on that reflects the fit. Made at the 8th YAICON.',
      ko: '사진 한 장과 키, 체중으로 체형을 추정해 사이즈를 추천하고, 실제 핏을 반영한 가상 피팅을 보여 줍니다. 제8회 YAICON에서 진행했습니다.',
    },
    role: {
      en: 'Built the pipeline and crawled Musinsa data on a six-person team: 6,858 reviews and 9,297 images',
      ko: '6인 팀에서 파이프라인 구축과 무신사 데이터 크롤링 담당: 리뷰 6,858건, 이미지 9,297장',
    },
    stack: 'Python, CatVTON, FLUX, SHAPY, Web Crawling',
    links: [{ label: { en: 'YAICON post', ko: 'YAICON 소개 게시물' }, href: 'https://www.instagram.com/p/Daj8mwtmJuM/' }],
  },
  {
    slug: 'market-direction',
    title: { en: 'LSTM vs. ResNet for Market Direction', ko: 'LSTM vs. ResNet 주가 방향 예측' },
    period: { en: 'Jan 2026 – Mar 2026', ko: '2026.01 – 2026.03' },
    summary: {
      en: 'A controlled comparison on 3-class market direction. Best observed test accuracy was 43.85% for LSTM and 41.22% for ResNet34, against 33.3% chance. ResNet overfit to 100% train accuracy.',
      ko: '3분류 주가 방향 예측 비교 실험입니다. 최고 테스트 정확도는 LSTM 43.85%, ResNet34 41.22%(무작위 33.3%)였고, ResNet은 학습 정확도 100%로 과적합되었습니다.',
    },
    role: { en: 'Built, trained, and analyzed the models on a three-person team', ko: '3인 팀에서 모델 구현, 학습, 결과 분석 담당' },
    stack: 'Python, PyTorch',
    links: [{ label: { en: 'Code', ko: '코드' }, href: 'https://github.com/Kid7ho/YAI-17_Toy-Project_Stock-Trading' }],
  },
  {
    slug: 'trash-workshop',
    title: { en: 'Trash Workshop', ko: '쓰레기 공작소' },
    period: { en: 'Jun 2023', ko: '2023.06' },
    summary: {
      en: 'A mobile web guide that classifies trash from a photo and shows local disposal rules from public data.',
      ko: '사진으로 쓰레기를 분류하고 공공데이터로 지역별 배출 정보를 알려 주는 모바일 웹입니다.',
    },
    role: { en: 'Front end, AI training, and preprocessing on a three-person team', ko: '3인 팀에서 프론트엔드, AI 학습, 전처리 담당' },
    stack: 'JavaScript, Web APIs',
    links: [],
  },
  {
    slug: 'unity-games',
    title: { en: 'Unity games', ko: 'Unity 게임 모음' },
    period: { en: '2017 – 2022', ko: '2017 – 2022' },
    summary: {
      en: 'Where I started programming: the Unity projects I have made since 2017, most of them playable in the browser.',
      ko: '프로그래밍을 시작한 곳입니다. 2017년부터 만든 Unity 프로젝트를 모았고, 대부분 브라우저에서 해 볼 수 있습니다.',
    },
    role: { en: 'Mostly solo; team lead on Tile Game, released on Google Play', ko: '대부분 개인 프로젝트. Tile Game은 팀장으로 Google Play 출시' },
    stack: 'Unity, C#',
    links: [{ label: { en: 'Play on itch.io', ko: 'itch.io에서 플레이' }, href: 'https://kid7ho.itch.io/' }],
  },
];

export const projectsPage = {
  title: { en: 'Projects', ko: '프로젝트' } as Text,
  lead: {
    en: 'Things I have built, from early games to services used by real people.',
    ko: '초기 게임부터 실제 사용자가 쓰는 서비스까지, 직접 만든 것들입니다.',
  } as Text,
  roleLabel: { en: 'My role', ko: '맡은 일' } as Text,
  stackLabel: { en: 'Stack', ko: '기술' } as Text,
};

export const caseStudy = {
  title: featured.title,
  howItWorks: {
    heading: { en: 'How it is used', ko: '사용 방법' } as Text,
    figures: [
      { src: '/projects/ai-health-guardian/step-share.jpg', alt: { en: 'Tapping share on a video', ko: '영상에서 공유 버튼을 누르는 화면' }, caption: { en: '1. Tap share on the video.', ko: '1. 영상에서 공유를 누릅니다.' } },
      { src: '/projects/ai-health-guardian/step-copy.jpg', alt: { en: 'Choosing copy link', ko: '링크 복사를 고르는 화면' }, caption: { en: '2. Copy the link.', ko: '2. 링크를 복사합니다.' } },
      { src: '/projects/ai-health-guardian/step-paste.jpg', alt: { en: 'Pasting the link into the chat', ko: '채팅창에 링크를 붙여넣는 화면' }, caption: { en: '3. Paste it into the chat.', ko: '3. 채팅창에 붙여넣습니다.' } },
      { src: '/projects/ai-health-guardian/step-result.jpg', alt: { en: 'A result card', ko: '결과 카드' }, caption: { en: '4. Read the result card.', ko: '4. 결과 카드를 확인합니다.' } },
    ],
  },
  lead: {
    en: 'Health videos and messages spread faster than older adults can check them. This service makes checking as easy as sharing.',
    ko: '건강 영상과 메시지는 어르신이 확인하는 속도보다 빠르게 퍼집니다. 이 서비스는 확인을 공유만큼 쉽게 만듭니다.',
  } as Text,
  sections: [
    {
      heading: { en: 'The problem', ko: '문제' } as Text,
      body: {
        en: 'Of the 100 most-viewed YouTube videos on senior health, 42 were made with generative AI, and 24 of those impersonated experts (Korea Health Promotion Institute). Many older adults forward such videos to family and friends without doubting them.',
        ko: '유튜브 노인 건강 영상 조회수 상위 100건 중 42건은 생성형 AI로 제작되었고, 그중 24건은 전문가를 사칭했습니다(한국건강증진개발원). 많은 어르신이 이런 영상을 의심 없이 가족과 지인에게 전달합니다.',
      } as Text,
    },
    {
      heading: { en: 'The approach', ko: '해결 방식' } as Text,
      body: {
        en: 'There is no new app to install. Older adults share a link or message to a KakaoTalk channel. The service extracts the claims, searches papers through Liner, checks Korean food-safety data, and returns a result card they can pass on. The scope is food and supplements. It never diagnoses.',
        ko: '새 앱을 설치할 필요가 없습니다. 카카오톡 채널에 링크나 메시지를 공유하면 주장을 추출하고, Liner로 논문을 찾고, 식약처 데이터를 대조해 공유 가능한 결과 카드로 답합니다. 범위는 음식과 건강기능식품이며, 진단은 하지 않습니다.',
      } as Text,
    },
  ],
  verdictHeading: { en: 'Four possible answers', ko: '네 가지 답변' } as Text,
  verdictNote: {
    en: 'A rule table makes the final call, so the same evidence always gets the same answer. When the evidence is weak, the service says it does not know.',
    ko: '최종 판정은 규칙표가 내리므로 같은 근거에는 항상 같은 답이 나옵니다. 근거가 부족하면 모른다고 답합니다.',
  } as Text,
  verdicts: [
    { en: 'Trustworthy', ko: '믿을 만해요', tone: 'good' },
    { en: 'Be careful', ko: '조심하세요', tone: 'mid' },
    { en: 'Warning', ko: '주의하세요', tone: 'bad' },
    { en: 'Unknown', ko: '알 수 없어요', tone: 'none' },
  ],
  roleHeading: { en: 'My role', ko: '맡은 일' } as Text,
  role: {
    en: 'I led the five-person team and did all of the planning and development myself. Teammates supported the volunteer sessions and the final presentation at the ideathon.',
    ko: '5인 팀을 이끌며 서비스 기획과 개발을 모두 직접 진행했습니다. 팀원들은 봉사 진행과 공모전 본선 발표 등을 도왔습니다.',
  } as Text,
  resultsHeading: { en: 'Results so far', ko: '현재까지의 결과' } as Text,
  results: [
    { en: 'Key-claim recall rose from 40% to about 80% on 45 real links after adding an LLM extractor.', ko: 'LLM 주장 추출을 도입해 실제 링크 45건에서 핵심 주장 재현율을 40%에서 약 80%로 높였습니다.' },
    { en: 'Paper stance classification reached 89% accuracy on 383 pairs.', ko: '논문 입장 분류는 383쌍에서 정확도 89%를 기록했습니다.' },
    { en: 'A neurology professor reviewed 20 cases and found the verdicts broadly appropriate.', ko: '신경과 교수의 사례 20건 의료 자문에서 판정 체계가 전반적으로 적절하다는 의견을 받았습니다.' },
    { en: 'At the first volunteer session, 20 of 34 surveyed older adults said they would use the service.', ko: '첫 현장 봉사에서 설문한 어르신 34명 중 20명이 사용 의향을 밝혔습니다.' },
    { en: 'Won the Chairperson’s Award at the Gyeonggi Volunteer Center Ideathon 2026.', ko: '2026 자원봉사 아이디어톤에서 경기도자원봉사센터이사장상을 받았습니다.' },
  ] as Text[],
  status: {
    en: 'Contest schedule through Nov 10, 2026; YAICON through Nov 25, 2026. Final numbers and results will be added once confirmed.',
    ko: '공모전 일정은 2026.11.10, YAICON은 2026.11.25까지입니다. 최종 수치와 결과는 확정되는 대로 추가합니다.',
  } as Text,
  stackHeading: { en: 'Built with', ko: '사용 기술' } as Text,
  stack: {
    en: 'Python, Kakao Chatbot, Liner Academic Search and Model APIs, Korean food-safety Open API, Docker, Fly.io',
    ko: 'Python, 카카오 챗봇, Liner Academic Search·Model API, 식약처 Open API, Docker, Fly.io',
  } as Text,
};

export const resumePage = {
  title: { en: 'Resume', ko: '이력서' } as Text,
  lead: {
    en: 'One page, in English and Korean.',
    ko: '영문과 국문 모두 한 페이지입니다.',
  } as Text,
  files: [
    { lang: 'en' as Lang, label: { en: 'Download English PDF', ko: '영문 PDF 내려받기' }, href: '/resume/Jin_Myoung_Hyun_Resume_EN.pdf', preview: '/resume/resume-en.png' },
    { lang: 'ko' as Lang, label: { en: 'Download Korean PDF', ko: '국문 PDF 내려받기' }, href: '/resume/Jin_Myoung_Hyun_Resume_KO.pdf', preview: '/resume/resume-ko.png' },
  ],
  previewTitle: { en: 'Resume preview', ko: '이력서 미리보기' } as Text,
};
