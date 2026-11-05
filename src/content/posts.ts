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
    period: { en: 'Feb 2024', ko: '2024.02' },
    summary: {
      en: 'Two-player Othello on an 8x8 board, played in the browser.',
      ko: '8x8 보드에서 두 명이 즐기는 오델로로, 브라우저에서 플레이할 수 있습니다.',
    },
    image: '/projects/unity-games/othello.jpg',
    links: play('othello'),
  },
  {
    title: { en: 'Omok', ko: '오목' },
    period: { en: 'Feb 2024', ko: '2024.02' },
    summary: {
      en: 'Two-player Omok, built alongside Othello.',
      ko: '오델로와 함께 만든 2인용 오목 게임입니다.',
    },
    image: '/projects/unity-games/omok.jpg',
    links: play('omok'),
  },
  {
    title: { en: 'Galaga', ko: 'Galaga' },
    period: { en: 'Aug 2023', ko: '2023.08' },
    summary: {
      en: 'A Unity version of the classic arcade shooter.',
      ko: '고전 아케이드 슈팅 게임을 Unity로 구현했습니다.',
    },
  },
  {
    title: { en: 'Project Box', ko: 'Project Box' },
    period: { en: 'Dec 2022 – Mar 2023', ko: '2022.12 – 2023.03' },
    summary: {
      en: 'A puzzle game by three computer science students. I handled player movement and the camera.',
      ko: '컴퓨터과학과 3인 팀의 퍼즐 게임으로, 플레이어 이동과 카메라를 맡았습니다.',
    },
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
      en: 'A gravity platformer from high school, entered in GIGDC.',
      ko: '고등학교 때 만든 중력 플랫폼 게임으로, GIGDC에 출품했습니다.',
    },
    image: '/projects/unity-games/hexavity.jpg',
    links: play('hexavity'),
  },
  {
    title: { en: 'Kinetic Wall Clock', ko: 'Kinetic Wall Clock' },
    period: { en: '2020', ko: '2020' },
    summary: {
      en: 'Inspired by "A Million Times 120" by Humans since 1982: many clock hands move together to form the time and wave patterns.',
      ko: 'Humans since 1982의 작품 "A Million Times 120"에서 영감을 받아, 여러 시계의 바늘이 함께 움직이며 시각과 물결 무늬를 만듭니다.',
    },
    image: '/projects/unity-games/kinetic-wall-clock.jpg',
    links: play('kinetic-wall-clock'),
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
      en: 'A 5x5 tile-flipping puzzle made with two classmates. I led the team and built the game, and we released it on Google Play.',
      ko: '학우 2명과 만든 5x5 타일 뒤집기 퍼즐입니다. 팀장으로 구현을 맡아 Google Play에 출시했습니다.',
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
      en: 'A team Unity project from 2017, where I contributed 35 of the 151 commits.',
      ko: '2017년 팀 Unity 프로젝트로, 전체 151개 커밋 중 35개를 작성했습니다.',
    },
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
      en: 'A size chart does not show how clothes will actually fit. Real Fit is a pipeline for showing that fit before you buy, made by a six-person team at YAICON.',
      ko: '사이즈표만으로는 옷이 실제로 어떻게 맞을지 알기 어렵습니다. Real Fit은 구매 전에 그 핏을 보여 주는 파이프라인으로, YAICON에서 6인 팀이 만들었습니다.',
    },
    sections: [
      {
        heading: { en: 'The problem', ko: '문제' },
        body: [
          {
            en: 'Size-related returns are a common problem in online clothing. The project asked whether body measurements, garment data, and reviews could produce a try-on image that reflects the size you actually pick.',
            ko: '온라인 의류 구매에서는 사이즈 때문에 반품하는 일이 흔합니다. 이 프로젝트는 체형 정보, 상품 정보, 리뷰를 활용해 고른 사이즈가 반영된 착용 이미지를 만들 수 있는지 다루었습니다.',
          },
        ],
      },
      {
        heading: { en: 'The pipeline', ko: '파이프라인' },
        list: [
          { en: 'Measure the body in 3D with SHAPY.', ko: 'SHAPY로 3D 체형을 측정합니다.' },
          { en: 'Crawl Musinsa products and reviews.', ko: '무신사 상품과 리뷰를 수집합니다.' },
          { en: 'Generate a size-aware try-on image with a FLUX-based model.', ko: 'FLUX 기반 모델로 사이즈를 반영한 Virtual Try-On 이미지를 생성합니다.' },
          { en: 'Use review information as a condition.', ko: '리뷰 정보를 조건으로 반영합니다.' },
        ],
      },
      {
        heading: { en: 'My part', ko: '맡은 일' },
        body: [
          {
            en: 'I collected and cleaned the Musinsa data: 6,858 reviews and 9,297 images, including the height, weight, and purchased size given in the reviews.',
            ko: '무신사 데이터 수집과 정제를 맡아 리뷰 6,858건, 이미지 9,297장을 모으고, 리뷰에 담긴 키, 몸무게, 구매 사이즈 정보를 정리했습니다.',
          },
        ],
        columns: 2,
        figures: [
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
