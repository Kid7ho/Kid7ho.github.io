import type { LinkItem, Text } from './site';

// Detail pages shown by "See in Details". Each post's slug matches a project in site.ts.
// Put images in public/projects/<slug>/ and list them in a section's `figures`.

export type Figure = { src: string; alt: Text; caption?: Text };

export type PostSection = {
  heading: Text;
  body?: Text[];
  list?: Text[];
  figures?: Figure[];
  // How many images to show per row on wide screens.
  columns?: 1 | 2 | 3 | 4;
};

export type Post = {
  slug: string;
  lead: Text;
  sections: PostSection[];
};

export type Game = {
  title: Text;
  period: Text;
  summary: Text;
  image?: string;
  links?: LinkItem[];
};

const play = (slug: string): LinkItem[] => [
  { label: { en: 'Play on itch.io', ko: 'itch.io에서 플레이' }, href: `https://kid7ho.itch.io/${slug}` },
];

// Newest first.
export const games: Game[] = [
  {
    title: { en: 'Othello', ko: '오델로' },
    period: { en: 'Jan 2022', ko: '2022.01' },
    summary: {
      en: 'Two-player Othello on an 8x8 board, played in the browser.',
      ko: '8x8 보드에서 두 명이 즐기는 오델로로, 브라우저에서 플레이할 수 있습니다.',
    },
    image: '/projects/unity-games/othello.jpg',
    links: play('othello'),
  },
  {
    title: { en: 'Omok', ko: '오목' },
    period: { en: 'Jan 2022', ko: '2022.01' },
    summary: {
      en: 'Two-player Omok, built alongside Othello.',
      ko: '오델로와 함께 만든 2인용 오목 게임입니다.',
    },
    image: '/projects/unity-games/omok.jpg',
    links: play('omok'),
  },
  {
    title: { en: 'High School Portfolio', ko: '고등학교 포트폴리오' },
    period: { en: '2021', ko: '2021' },
    summary: {
      en: 'One Unity app that brings together ten of my projects, with an NCMB backend and about 10,000 lines of code.',
      ko: '프로젝트 10종을 하나로 묶은 Unity 앱입니다. NCMB 백엔드를 붙였고 코드는 약 1만 줄입니다.',
    },
    links: play('portfolio-jimmy'),
  },
  {
    title: { en: 'Angry Bird', ko: 'Angry Bird' },
    period: { en: '2021', ko: '2021' },
    summary: {
      en: 'A simple take on Angry Birds. The pull of the slingshot sets the launch speed, and Unity physics handles the rest.',
      ko: 'Angry Birds의 기본 방식을 구현했습니다. 새총을 당긴 거리로 초기 속도를 정하고, 이후 움직임은 Unity 물리로 처리했습니다.',
    },
    image: '/projects/unity-games/angry-bird.jpg',
    links: play('angry-bird'),
  },
  {
    title: { en: 'Hexavity', ko: 'Hexavity' },
    period: { en: '2020', ko: '2020' },
    summary: {
      en: 'A six-stage platformer built around switching gravity in six directions. I worked on development in a four-person high school club team, and we entered it in GIGDC.',
      ko: '중력을 여섯 방향으로 바꾸며 6개 스테이지를 지나는 플랫폼 게임입니다. 고등학교 동아리 4인 팀에서 개발을 맡았고, GIGDC에 출품했습니다.',
    },
    image: '/projects/unity-games/hexavity.jpg',
    links: play('hexavity'),
  },
  {
    title: { en: 'Kinetic Wall Clock', ko: 'Kinetic Wall Clock' },
    period: { en: '2020', ko: '2020' },
    summary: {
      en: 'A solo project inspired by ClockClock from Humans since 1982: many clock hands move together to form the time and wave patterns.',
      ko: 'Humans since 1982의 작품 ClockClock에서 영감을 받은 개인 프로젝트로, 여러 시계의 바늘이 함께 움직이며 시각과 물결 무늬를 만듭니다.',
    },
    image: '/projects/unity-games/kinetic-wall-clock.jpg',
    links: [
      ...play('kinetic-wall-clock'),
      { label: { en: 'Demo video', ko: '시연 영상' }, href: 'https://youtu.be/0WA_0bPcAnc' },
    ],
  },
  {
    title: { en: 'Flappy Bird', ko: 'Flappy Bird' },
    period: { en: '2020', ko: '2020' },
    summary: {
      en: 'A Flappy Bird remake built around collision and gravity, with three lives and wider gaps so a run lasts longer.',
      ko: '충돌과 중력을 중심으로 만든 Flappy Bird로, 더 오래 즐기도록 목숨 3개와 넓은 장애물 간격을 적용했습니다.',
    },
    image: '/projects/unity-games/flappy-bird.jpg',
    links: play('flappy-bird'),
  },
  {
    title: { en: 'Tile Game', ko: 'Tile Game' },
    period: { en: '2019', ko: '2019' },
    summary: {
      en: 'A 5x5 tile-flipping puzzle with 30 levels, made with two classmates. I led the team and built the game, and we released it on Google Play.',
      ko: '학우 2명과 만든 30개 레벨의 5x5 타일 뒤집기 퍼즐입니다. 팀장으로 구현을 맡아 Google Play에 출시했습니다.',
    },
    image: '/projects/unity-games/tile-game.jpg',
    links: play('tile-game'),
  },
  {
    title: { en: 'Tank Game', ko: 'Tank Game' },
    period: { en: '2019', ko: '2019' },
    summary: {
      en: 'A two-player tank battle for a school presentation contest, extended from the Unity Tanks! tutorial with FPS and TPS modes.',
      ko: '교내 발표 대회를 위해 Unity Tanks! 튜토리얼을 확장한 2인 탱크 대전 게임으로, FPS와 TPS 모드를 추가했습니다.',
    },
    image: '/projects/unity-games/tank-game.jpg',
    links: play('tank-game'),
  },
  {
    title: { en: 'Molly Molly', ko: 'Molly Molly' },
    period: { en: '2018', ko: '2018' },
    summary: {
      en: 'My first complete game: a 60-second whack-a-mole with animated moles, different scores for each type, and a saved high score.',
      ko: '처음으로 완성한 게임입니다. 60초 동안 두더지를 잡는 게임으로, 종류별 점수와 최고 점수 저장을 구현했습니다.',
    },
    image: '/projects/unity-games/molly-molly.jpg',
    links: play('molly-molly'),
  },
  {
    title: { en: 'SemiColon', ko: 'SemiColon' },
    period: { en: '2017', ko: '2017' },
    summary: {
      en: 'Where it all started. In my second year of middle school I joined the 2nd Gyeonggi Game Gifted Camp, wrote code for the first time, and won the top award, which got me seriously interested in programming.',
      ko: '처음 게임 코딩을 접한 프로젝트입니다. 중학교 2학년 때 제2회 경기영재게임캠프에 참여해 처음 코딩을 해 보았고, 최우수상을 받으며 코딩에 본격적으로 흥미를 갖게 되었습니다.',
    },
    links: [{ label: { en: 'About the camp', ko: '캠프 소개 글' }, href: 'https://blog.naver.com/gyeonggi_gov/221032638272?viewType=pc' }],
  },
];

export const posts: Post[] = [
  {
    slug: 'mapmory',
    lead: {
      en: 'A photo journal where the map only fills in once you have been there. Every photo unlocks the place it was taken.',
      ko: '직접 가 본 곳만 지도에 채워지는 사진 기록 앱입니다. 사진을 올리면 찍은 장소가 해금됩니다.',
    },
    sections: [
      {
        heading: { en: 'The idea', ko: '아이디어' },
        body: [
          {
            en: 'Mapmory has one rule: a photo is the unlock. Import a photo and its location opens on the map. One photo is enough, and there is no way to fill the map without one. The more photos a place has, the more its color changes, so the map slowly becomes a record of where you have been.',
            ko: '맵모리의 원칙은 하나입니다. 사진이 곧 해금입니다. 사진을 가져오면 촬영 위치가 지도에서 열리고, 한 장이면 충분합니다. 사진 없이는 지도를 채울 수 없습니다. 사진이 쌓일수록 색이 바뀌어, 지도가 그동안 다닌 곳의 기록이 됩니다.',
          },
        ],
        columns: 2,
        figures: [
          {
            src: '/projects/mapmory/unlock.jpg',
            alt: { en: 'A map region before and after it is unlocked by a photo', ko: '사진으로 해금되기 전과 후의 지도 지역' },
            caption: { en: 'A photo unlocks the place it was taken.', ko: '사진을 올리면 촬영 장소가 해금됩니다.' },
          },
          {
            src: '/projects/mapmory/colors.jpg',
            alt: { en: 'Region colors that change with the number of photos', ko: '사진 수에 따라 바뀌는 지역 색상' },
            caption: { en: 'Colors change as photos build up.', ko: '사진이 쌓일수록 색이 바뀝니다.' },
          },
        ],
      },
      {
        heading: { en: 'What it does', ko: '주요 기능' },
        list: [
          {
            en: 'Custom vector map: administrative boundaries drawn directly with SwiftUI Canvas, from province down to neighborhood level.',
            ko: '커스텀 벡터 지도: SwiftUI Canvas로 행정구역 경계를 직접 그리며, 시/도부터 읍/면/동까지 볼 수 있습니다.',
          },
          {
            en: 'Day bundles: photos from the same day are grouped, and the title and diary belong to the bundle.',
            ko: '하루 묶음: 같은 날 찍은 사진을 하나로 묶고, 제목과 일기는 묶음 단위로 남깁니다.',
          },
          {
            en: 'Groups: create a group, invite up to eight members, share photos on one map, and react with likes and comments.',
            ko: '그룹: 최대 8명이 하나의 지도에 사진을 모으고, 좋아요와 댓글로 반응할 수 있습니다.',
          },
          {
            en: 'Calendar and personal map: see each day by group color, or keep a private map of your own.',
            ko: '캘린더와 개인 지도: 날짜별 기록을 그룹 색으로 확인하고, 혼자 쓰는 지도도 만들 수 있습니다.',
          },
        ],
        columns: 2,
        figures: [
          {
            src: '/projects/mapmory/groups.jpg',
            alt: { en: 'Group map, calendar, feed and settings screens', ko: '그룹 지도, 달력, 피드, 설정 화면' },
            caption: { en: 'One group shares a map and a record.', ko: '그룹이 지도와 기록을 함께 씁니다.' },
          },
          {
            src: '/projects/mapmory/themes.jpg',
            alt: { en: 'Maps themed by group', ko: '그룹별 테마가 적용된 지도' },
            caption: { en: 'Each group gets its own map style.', ko: '그룹마다 지도를 다르게 꾸밀 수 있습니다.' },
          },
          {
            src: '/projects/mapmory/calendar.jpg',
            alt: { en: 'Calendar with group colors', ko: '그룹 색이 표시된 달력' },
            caption: { en: 'The calendar shows which group each day belongs to.', ko: '달력에서 날짜별 그룹을 확인할 수 있습니다.' },
          },
          {
            src: '/projects/mapmory/personal.jpg',
            alt: { en: 'Personal map and diary list', ko: '개인 지도와 일기 목록' },
            caption: { en: 'The personal map works as a diary.', ko: '개인 지도는 일기장처럼 쓸 수 있습니다.' },
          },
        ],
      },
      {
        heading: { en: 'How it is built', ko: '구현' },
        body: [
          {
            en: 'The app is written in SwiftUI with SwiftData for local storage. Original photos stay in the Photos library and are referenced rather than copied. Group features run on Supabase, with Google sign-in, and shared photos are uploaded in compressed form.',
            ko: 'SwiftUI로 만들고 SwiftData로 기기에 저장합니다. 원본 사진은 복사하지 않고 사진 앱의 원본을 참조합니다. 그룹 기능은 Supabase와 Google 로그인으로 구현했고, 공유 사진은 압축본으로 업로드합니다.',
          },
        ],
      },
      {
        heading: { en: 'Status', ko: '진행 상태' },
        body: [
          {
            en: 'Built by a two-person team between July and September 2026: 335 commits and about 35,000 lines of Swift. Development is finished, but the app has not been released on the App Store and the project is currently paused.',
            ko: '2026년 7월부터 9월까지 2인 팀으로 개발했으며, 커밋 335개, Swift 약 3.5만 줄입니다. 개발은 마쳤지만 App Store에는 출시하지 않았고, 현재 프로젝트는 중단된 상태입니다.',
          },
        ],
      },
    ],
  },
  {
    slug: 'real-fit',
    lead: {
      en: 'From one full-body photo, height, and weight, RFRS measures the body, predicts how a garment will fit (slim, regular, or loose), and aims to show a try-on image that reflects that fit. Made by a six-person team at the 8th YAICON.',
      ko: '전신사진 한 장과 키, 체중으로 신체 치수를 재고, 옷이 slim, regular, loose 중 어떻게 맞을지 예측해, 그 핏을 반영한 가상 피팅 이미지를 보여 주는 것을 목표로 했습니다. 제8회 YAICON에서 6인 팀이 만들었습니다.',
    },
    sections: [
      {
        heading: { en: 'The problem', ko: '문제' },
        body: [
          {
            en: 'Size-related returns are a common problem in online clothing, and a size chart alone does not show how something will fit. Our goal was a try-on model built on real body measurements, with two contributions: measuring actual sizes from a photo alone, and reflecting the real sense of fit in the try-on image.',
            ko: '온라인 의류 구매에서는 사이즈 때문에 반품하는 일이 흔하고, 사이즈표만으로는 실제 핏을 알기 어렵습니다. 그래서 사용자의 신체 스펙을 바탕으로 한 실측 가상피팅 모델을 목표로 삼았습니다. 사진만으로 실측 사이즈를 측정하는 것과, 실측 사이즈를 바탕으로 실제 핏감을 반영하는 것이 핵심입니다.',
          },
        ],
      },
      {
        heading: { en: 'Pipeline', ko: '파이프라인' },
        body: [
          {
            en: 'Three inputs come from crawled Musinsa data and the user: a full-body photo, the garment image, and text reviews. The photo goes to SHAPY for body measurements, the garment image keeps its detail and texture, and the reviews yield a fit label and a size recommendation. All three feed the virtual try-on model.',
            ko: '입력은 사용자 전신 사진, 의류 이미지, 텍스트 리뷰 세 가지이며, 학습 데이터는 무신사에서 크롤링했습니다. 사진은 SHAPY로 신체 치수를 재고, 의류 이미지는 디테일과 텍스처를 보존하며, 리뷰에서는 핏 라벨과 추천 사이즈를 뽑아 가상 피팅 모델에 함께 넣습니다.',
          },
        ],
        columns: 1,
        figures: [
          {
            src: '/projects/real-fit/pipeline.jpg',
            alt: { en: 'Pipeline diagram from user photo, garment image, and reviews to the virtual try-on result', ko: '사용자 사진, 의류 이미지, 리뷰에서 가상 피팅 결과로 이어지는 파이프라인 구조도' },
            caption: { en: 'The overall pipeline as designed for the final presentation.', ko: '최종 발표에서 설계한 전체 파이프라인입니다.' },
          },
        ],
      },
      {
        heading: { en: 'Body measurement', ko: '신체 측정' },
        body: [{ en: 'SHAPY estimates SMPL-X shape and pose from a single RGB image, and chest, waist, hips, and height are measured on the 3D mesh. Measuring the 3D body instead of 2D pixels keeps the numbers stable when the pose changes.', ko: 'SHAPY로 RGB 이미지 한 장에서 SMPL-X 체형과 자세를 추정하고, 3D 메시 위에서 가슴, 허리, 엉덩이 둘레와 키를 잽니다. 2D 픽셀이 아닌 3D 구조로 재기 때문에 자세가 바뀌어도 치수가 안정적입니다.' }],
        columns: 1,
        figures: [
          {
            src: '/projects/real-fit/body-measurement.jpg',
            alt: { en: 'Input photo, the 3D body mesh from SHAPY, and the extracted measurements', ko: '입력 사진, SHAPY로 만든 3D 인체 메시, 추출한 신체 치수' },
            caption: { en: 'From left: the input photo, the reconstructed 3D mesh, and the measurements taken from it (height 1.65 m, chest 0.84 m, waist 0.74 m, hips 0.91 m).', ko: '왼쪽부터 입력 사진, 복원한 3D 메시, 메시에서 잰 치수입니다(키 1.65m, 가슴 0.84m, 허리 0.74m, 엉덩이 0.91m).' },
          },
          {
            src: '/projects/real-fit/shapy-paper.jpg',
            alt: { en: 'Architecture figure from the paper A Focused Human Body Model for Accurate Anthropometric Measurements Extraction', ko: 'A Focused Human Body Model for Accurate Anthropometric Measurements Extraction 논문의 구조도' },
            caption: { en: 'The body-measurement model we referred to: Chen et al., "A Focused Human Body Model for Accurate Anthropometric Measurements Extraction."', ko: '신체 측정에 참고한 모델의 구조도입니다(Chen et al., "A Focused Human Body Model for Accurate Anthropometric Measurements Extraction").' },
          },
        ],
      },
      {
        heading: { en: 'Fit classification', ko: '핏 분류' },
        body: [{ en: 'fit_classifier takes the user\'s height and weight, the product\'s chest width per size, and review keywords such as "runs large". It computes ease (chest width minus estimated chest), checks reviews from buyers with similar bodies, then takes a majority vote with a confidence score to return slim, regular, or loose.', ko: 'fit_classifier는 사용자의 키와 몸무게, 제품의 사이즈별 가슴단면, "크게 나와요" 같은 리뷰 키워드를 입력받습니다. 가슴단면에서 추정 가슴둘레를 뺀 여유분을 계산하고, 체형이 비슷한 리뷰어의 후기로 보완한 뒤, 다수결과 신뢰도로 slim, regular, loose를 정합니다.' }],
        columns: 1,
        figures: [
          {
            src: '/projects/real-fit/fit-classifier.jpg',
            alt: { en: 'fit_classifier diagram: user, product size, and review inputs, three stages, slim regular or loose output', ko: 'fit_classifier 구조도: 사용자, 제품 사이즈, 리뷰 입력과 3단계 처리, slim·regular·loose 출력' },
            caption: { en: 'fit_classifier takes three inputs and returns a personal fit in three stages.', ko: 'fit_classifier는 세 가지 입력을 받아 3단계로 개인 핏을 정합니다.' },
          },
        ],
      },
      {
        heading: { en: 'Virtual try-on structure', ko: '가상 피팅 구조' },
        body: [{ en: 'A garment-agnostic preprocessor (rectangular mask and DensePose) feeds a Fit-Aware Layout Generator, a Stable Diffusion 1.5 UNet conditioned on the fit label through FiLM (AdaLN). Its layout features were meant to reach a frozen CatVTON (FLUX) model through a Multi-Scale Fit Injector attached to four FLUX blocks.', ko: '사각형 마스크와 DensePose로 옷 정보를 지운 입력을 만들고, Fit-Aware Layout Generator(Stable Diffusion 1.5 UNet)에 핏 라벨을 FiLM(AdaLN)으로 조건화합니다. 이렇게 만든 레이아웃 특징을 Multi-Scale Fit Injector로 고정된 CatVTON(FLUX)의 4개 블록에 주입하는 구조입니다.' }],
        columns: 1,
        figures: [
          {
            src: '/projects/real-fit/vton-architecture.jpg',
            alt: { en: 'VTON architecture with Phase 1 and Phase 2 training targets; Phase 2 is marked as not implemented', ko: 'Phase 1과 Phase 2 학습 대상으로 나뉜 VTON 구조도, Phase 2는 구현 미완료로 표시' },
            caption: { en: 'Phase 1 (preprocessor and layout generator) was trained; Phase 2 (fit injector, red box) was not completed.', ko: 'Phase 1(전처리와 레이아웃 생성기)은 학습했고, 빨간 상자의 Phase 2(핏 주입기)는 완성하지 못했습니다.' },
          },
        ],
      },
      {
        heading: { en: 'Data', ko: '데이터' },
        body: [
          {
            en: 'We crawled Musinsa tops only (long- and short-sleeve T-shirts) to keep training efficient, taking the most-reviewed items in each category and adding slim-fit keywords such as tight, muscle fit, and cropped. For each item we saved the representative photo, measurements per size, and buyer ratings on size, color, thickness, and stretch, plus every review\'s photos and text: 6,858 reviews and 9,297 images in total.',
            ko: '학습 효율을 위해 무신사 상의(긴소매·반소매 티셔츠)만 크롤링했고, 카테고리마다 후기가 많은 순으로 모은 뒤 슬림핏, 타이트, 머슬핏, 크롭, 스키니 키워드로 slim 데이터를 보강했습니다. 의류마다 대표 사진, 사이즈별 상세 수치, 사이즈·색감·두께감·신축성 평가를, 후기마다 사진과 텍스트를 저장해 리뷰 6,858건, 이미지 9,297장을 모았습니다.',
          },
          {
            en: 'With snap data added, the fit training set came to 7,621 pairs (992 slim, 4,429 regular, 2,200 loose), labeled from official Musinsa fit data rather than by hand-written rules.',
            ko: '여기에 스냅 데이터를 더해 핏 학습 데이터는 7,621쌍(slim 992건, regular 4,429건, loose 2,200건)이 되었고, 핏 라벨은 경험식이 아닌 무신사 공식 핏 데이터를 기반으로 했습니다.',
          },
        ],
        columns: 2,
        figures: [
          {
            src: '/projects/real-fit/crawl-products.jpg',
            alt: { en: 'Slide on crawling size measurements and buyer ratings into products.csv', ko: '사이즈별 상세 수치와 구매자 평가를 products.csv로 크롤링한 슬라이드' },
            caption: { en: 'Product data: measurements per size and buyer ratings, saved to products.csv.', ko: '의류 데이터: 사이즈별 상세 수치와 구매자 평가를 products.csv에 저장했습니다.' },
          },
          {
            src: '/projects/real-fit/crawl-reviews.jpg',
            alt: { en: 'Slide on crawling review photos and text into reviews.csv', ko: '후기 사진과 텍스트를 reviews.csv로 크롤링한 슬라이드' },
            caption: { en: 'Review data: each review\'s photos and text, saved to reviews.csv (6,858 reviews, 9,297 images).', ko: '후기 데이터: 후기마다 사진과 텍스트를 reviews.csv에 저장했습니다(리뷰 6,858건, 이미지 9,297장).' },
          },
          {
            src: '/projects/real-fit/crawl-targets.jpg',
            alt: { en: 'Musinsa category list, product pages, and slim-fit search results used for crawling', ko: '크롤링에 쓴 무신사 카테고리 목록, 상품 페이지, slim 키워드 검색 결과' },
            caption: { en: 'Crawling targets: T-shirt categories sorted by review count, plus slim-fit keyword searches.', ko: '크롤링 대상: 후기순으로 정렬한 티셔츠 카테고리와 slim 키워드 검색 결과입니다.' },
          },
          {
            src: '/projects/real-fit/height-weight.jpg',
            alt: { en: 'Scatter plot of height and weight from 6,000 reviews', ko: '리뷰 6,000건의 키와 몸무게 산점도' },
            caption: {
              en: 'Height and weight in an early version of the dataset (6,000 reviews).',
              ko: '초기 데이터셋의 키와 몸무게 분포입니다(리뷰 6,000건).',
            },
          },
        ],
      },
      {
        heading: { en: 'Results', ko: '결과' },
        list: [
          {
            en: 'The CatVTON baseline (FLUX.1-Fill-dev) ran on an A5000 server at about 85 seconds per image.',
            ko: 'CatVTON 베이스라인(FLUX.1-Fill-dev)을 A5000 서버에서 실제로 돌려 이미지 한 장에 약 85초가 걸리는 것을 확인했습니다.',
          },
          {
            en: 'fit_classifier returns a personal fit for a product and a body in a single call.',
            ko: 'fit_classifier는 제품과 신체 정보를 넣으면 한 번의 호출로 개인 핏을 돌려줍니다.',
          },
          {
            en: 'Phase 1 trained the Fit-Aware Layout Generator on the 7,621 pairs (cross-entropy loss, A5000, batch 4, 20 epochs).',
            ko: 'Phase 1에서 Fit-Aware Layout Generator를 7,621쌍으로 학습했습니다(cross-entropy loss, A5000, batch 4, 20 epochs).',
          },
          {
            en: 'Phase 2, the Multi-Scale Fit Injector, was not finished: its gradients vanished during training, so the fit label does not yet change the try-on image.',
            ko: 'Phase 2인 Multi-Scale Fit Injector는 학습 중 gradient가 소멸해 완성하지 못했습니다. 그래서 아직 핏 라벨이 가상 피팅 이미지에 반영되지는 않습니다.',
          },
        ],
        columns: 1,
        figures: [
          {
            src: '/projects/real-fit/catvton-baseline.jpg',
            alt: { en: 'CatVTON baseline: the input photo and two results wearing a Lee T-shirt and a graphic T-shirt', ko: 'CatVTON 베이스라인: 원본 사진과 Lee 티셔츠, 그래픽 티셔츠를 입힌 두 결과' },
            caption: { en: 'CatVTON baseline. From left: the input, a Lee T-shirt, and a graphic T-shirt. The fit label is not applied yet.', ko: 'CatVTON 베이스라인 결과입니다. 왼쪽부터 원본, Lee 티셔츠, 그래픽 티셔츠이며, 아직 핏 라벨은 반영되지 않았습니다.' },
          },
        ],
      },
      {
        heading: { en: 'My part', ko: '맡은 일' },
        body: [
          {
            en: 'I worked on building the pipeline and crawling the data.',
            ko: '파이프라인 구축과 데이터 크롤링을 맡았습니다.',
          },
        ],
      },
    ],
  },
  {
    slug: 'market-direction',
    lead: {
      en: 'Stock prices are usually treated as a time series, but traders read them as chart patterns. We tested whether a vision model on chart images could match a sequence model on the same data.',
      ko: '주가는 보통 시계열로 다루지만, 실제 투자자는 차트의 패턴을 읽습니다. 같은 데이터에서 차트 이미지를 보는 비전 모델이 시계열 모델만큼 예측할 수 있는지 실험했습니다.',
    },
    sections: [
      {
        heading: { en: 'The setup', ko: '실험 구성' },
        body: [
          {
            en: 'This was a toy project by a three-person team in the YAI 17th cohort, presented in March 2026. I built and trained the models and analyzed the results. Both models received the same market windows: LSTM as numeric sequences, ResNet as candlestick images.',
            ko: 'YAI 17기 3인 팀의 Toy Project로, 2026년 3월에 발표했습니다. 저는 모델 구현, 학습, 결과 분석을 맡았습니다. 두 모델에 같은 구간의 데이터를 주되, LSTM에는 숫자 시계열을, ResNet에는 캔들스틱 이미지를 입력했습니다.',
          },
        ],
        columns: 1,
        figures: [
          {
            src: '/projects/market-direction/pipeline.jpg',
            alt: { en: 'Pipeline from market data to labels, LSTM and ResNet models, and comparison', ko: '시장 데이터, 라벨링, LSTM과 ResNet 모델, 성능 비교로 이어지는 파이프라인' },
            caption: { en: 'The experiment pipeline.', ko: '실험 파이프라인입니다.' },
          },
        ],
      },
      {
        heading: { en: 'Redesigning the experiment', ko: '실험 재설계' },
        body: [
          {
            en: 'The first attempt used five years of NVIDIA data with five return classes. In later epochs the models stopped finding patterns and predicted the most common class, so the results meant little.',
            ko: '1차 실험은 NVIDIA 5년 데이터를 5개 수익률 구간으로 분류했습니다. 그러나 학습 후반으로 갈수록 모델이 패턴을 찾지 않고 가장 많은 클래스로만 예측해 결과를 신뢰할 수 없었습니다.',
          },
          {
            en: 'For the second attempt we changed the data and the labels: ten years of SPY and QQQ (2015 to 2025), eight for training and two for testing, 60-day windows with OHLCV and moving averages, and three equal classes for down, flat, and up.',
            ko: '2차 실험에서는 데이터와 라벨을 바꿨습니다. SPY와 QQQ 10년 치(2015~2025)를 학습 8년, 테스트 2년으로 나누고, 60일 구간의 OHLCV와 이동평균선을 사용했으며, 하락, 보합, 상승을 같은 비율의 3개 클래스로 나눴습니다.',
          },
        ],
        columns: 1,
        figures: [
          {
            src: '/projects/market-direction/candlestick.jpg',
            alt: { en: 'Slide showing a sliding window turned into a candlestick image', ko: '슬라이딩 윈도우를 캔들스틱 이미지로 변환하는 설명 슬라이드' },
            caption: { en: 'Each window became a candlestick image for ResNet.', ko: '각 구간을 ResNet용 캔들스틱 이미지로 변환했습니다.' },
          },
        ],
      },
      {
        heading: { en: 'Results', ko: '결과' },
        body: [
          {
            en: 'Best observed test accuracy was 43.85% for LSTM and 41.22% for ResNet34, against 33.3% for chance. ResNet reached 100% training accuracy, a clear sign of overfitting, while LSTM stayed at 56.80%. These figures come from the epochs with the best test score, so they should be read as an upper bound, not as a working predictor.',
            ko: '최고 테스트 정확도는 LSTM 43.85%, ResNet34 41.22%로 무작위 기준 33.3%보다 높았습니다. ResNet은 학습 정확도가 100%에 도달해 뚜렷하게 과적합되었고, LSTM은 56.80%에 머물렀습니다. 이 수치는 테스트 성능이 가장 좋은 Epoch 기준이므로 상한으로 봐야 하며, 실제로 쓸 수 있는 예측 모델이라는 뜻은 아닙니다.',
          },
        ],
        columns: 1,
        figures: [
          {
            src: '/projects/market-direction/results.jpg',
            alt: { en: 'Table comparing LSTM and ResNet34 results', ko: 'LSTM과 ResNet34 결과 비교표' },
            caption: { en: 'LSTM and ResNet34 compared.', ko: 'LSTM과 ResNet34 비교 결과입니다.' },
          },
        ],
      },
      {
        heading: { en: 'What I would change', ko: '한계와 다음 단계' },
        list: [
          {
            en: 'Price and volume alone miss macro factors, news, and sentiment.',
            ko: '가격과 거래량만으로는 거시 지표, 뉴스, 투자 심리를 반영할 수 없습니다.',
          },
          {
            en: 'Time and compute limited the size of the dataset and the range of the tuning.',
            ko: '시간과 자원의 제약으로 데이터 규모와 파라미터 탐색 범위가 제한되었습니다.',
          },
          {
            en: 'A next step would be a multi-modal model that combines the sequence and chart views, with news added through NLP.',
            ko: '다음 단계로는 시계열과 차트를 결합하고 NLP로 뉴스를 더한 멀티모달 모델을 생각하고 있습니다.',
          },
        ],
      },
    ],
  },
  {
    slug: 'trash-workshop',
    lead: {
      en: 'Point your phone at a piece of trash and find out how to throw it away, when, and where. A mobile web app built for an Internet Programming course.',
      ko: '쓰레기를 휴대폰으로 찍으면 어떻게, 언제, 어디에 버려야 하는지 알려 줍니다. 인터넷 프로그래밍 수업에서 만든 모바일 웹입니다.',
    },
    sections: [
      {
        heading: { en: 'Where it came from', ko: '시작' },
        body: [
          {
            en: 'The assignment in Internet Programming (CSI2109) was a mobile mash-up that used at least two web APIs. Living in a dormitory had recently left me unsure how to sort my own trash, and I had already built an animal-face test with Teachable Machine in high school. Our three-person team combined the two ideas.',
            ko: '인터넷 프로그래밍(CSI2109) 과제는 Web API를 2개 이상 활용한 모바일 매시업이었습니다. 기숙사에 살면서 분리배출을 처음 직접 해 보며 생겼던 궁금증과, 고등학교 때 Teachable Machine으로 만든 동물상 테스트를 떠올려 3인 팀에서 두 아이디어를 결합했습니다.',
          },
        ],
      },
      {
        heading: { en: 'What it does', ko: '주요 기능' },
        list: [
          {
            en: 'Photo search: a Teachable Machine model, trained on AI Hub data, identifies the trash and shows how to sort it.',
            ko: '사진 검색: AI Hub 데이터로 학습한 Teachable Machine 모델이 쓰레기를 판별해 분리배출 방법을 알려 줍니다.',
          },
          {
            en: 'Disposal map: Geolocation and Kakao Map find your district, then show when and where to take each type of trash, based on Seoul public data.',
            ko: '배출 지도: Geolocation과 Kakao Map으로 지역구를 찾고, 서울시 공공데이터를 바탕으로 종류별 배출 요일과 장소를 보여 줍니다.',
          },
          {
            en: 'Collection book: items you search are added to a collection and can be shared with Kakao Share, using DeepAI image similarity and MongoDB Atlas.',
            ko: '도감: 검색한 물건이 도감에 등록되고 Kakao Share로 공유할 수 있습니다. DeepAI 이미지 유사도와 MongoDB Atlas를 사용했습니다.',
          },
        ],
        columns: 4,
        figures: [
          {
            src: '/projects/trash-workshop/camera.jpg',
            alt: { en: 'Taking a photo of a plastic bottle', ko: '페트병을 촬영하는 화면' },
            caption: { en: 'Take a photo.', ko: '사진을 찍습니다.' },
          },
          {
            src: '/projects/trash-workshop/result.jpg',
            alt: { en: 'Result page explaining how to dispose of a plastic bottle', ko: '페트병 분리배출 방법을 안내하는 결과 화면' },
            caption: { en: 'See how to sort it.', ko: '배출 방법을 확인합니다.' },
          },
          {
            src: '/projects/trash-workshop/map.jpg',
            alt: { en: 'Map of Seoul districts', ko: '서울시 지역구 지도' },
            caption: { en: 'Find your district.', ko: '지역구를 선택합니다.' },
          },
          {
            src: '/projects/trash-workshop/schedule.jpg',
            alt: { en: 'Disposal schedule for a district', ko: '지역구별 배출 일정' },
            caption: { en: 'Check the schedule.', ko: '배출 일정을 확인합니다.' },
          },
        ],
      },
      {
        heading: { en: 'Architecture', ko: '구조' },
        columns: 1,
        figures: [
          {
            src: '/projects/trash-workshop/architecture.jpg',
            alt: { en: 'Diagram of the user connected to the search, map and collection platforms and their APIs', ko: '사용자와 검색, 지도, 도감 플랫폼 및 API의 연결 구조' },
            caption: { en: 'The web APIs behind each feature.', ko: '기능별로 사용한 Web API입니다.' },
          },
        ],
      },
      {
        heading: { en: 'My part', ko: '맡은 일' },
        body: [
          {
            en: 'I worked on the front end, trained the AI model, and handled data preprocessing.',
            ko: '프론트엔드, AI 학습, 데이터 전처리를 맡았습니다.',
          },
        ],
      },
    ],
  },
  {
    slug: 'unity-games',
    lead: {
      en: 'I started programming by making games in Unity. Here is everything worth showing, newest first. Most of them can be played in the browser.',
      ko: 'Unity로 게임을 만들며 프로그래밍을 시작했습니다. 그동안 만든 프로젝트를 최신순으로 정리했습니다. 대부분 브라우저에서 바로 플레이할 수 있습니다.',
    },
    sections: [],
  },
];

export function findPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
