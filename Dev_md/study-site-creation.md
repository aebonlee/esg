# DreamIT Study 사이트 생성 이력

## 기본 정보
- **생성일**: 2026-04-07
- **사이트 ID**: study
- **도메인**: https://study.dreamitbiz.com
- **GitHub**: https://github.com/aebonlee/study
- **테마 컬러**: #059669 (녹색 — 성장/학습)
- **DB 접두어**: study_

## 사이트 개요
- **이름**: DreamIT Study
- **한글명**: 공부 잘하는 방법
- **주제**: 학습법, 기억력 향상, 시간관리, 시험전략 등 효과적인 학습 노하우
- **기술 스택**: React 19 + Vite 7 + TypeScript + Supabase

## 카테고리 구성 (3개)
| ID | 한글 | 영문 | 아이콘 |
|----|------|------|--------|
| fundamentals | 학습기초 | Study Fundamentals | fa-solid fa-book-open |
| strategy | 학습전략 | Study Strategies | fa-solid fa-brain |
| management | 자기관리 | Self Management | fa-solid fa-clock |

## 학습 토픽 (8개)
| # | ID | 한글 | 카테고리 | 난이도 |
|---|-----|------|----------|--------|
| 1 | study-habits | 학습 습관 만들기 | fundamentals | beginner |
| 2 | memory | 기억력 향상법 | fundamentals | intermediate |
| 3 | note-taking | 노트 필기 전략 | fundamentals | beginner |
| 4 | focus | 집중력 강화법 | strategy | intermediate |
| 5 | reading | 독서법과 속독 | strategy | intermediate |
| 6 | exam-strategy | 시험 전략과 대비 | strategy | advanced |
| 7 | time-mgmt | 시간 관리와 계획 | management | beginner |
| 8 | motivation | 동기부여와 멘탈 관리 | management | intermediate |

## 주요 페이지
- **Home** (`/`): Hero 섹션 + 통계(8 토픽/500+ 학습자/3 카테고리/95% 만족도) + 카테고리 카드 + CTA
- **Courses** (`/courses`, `/courses/:id`): 8개 학습 토픽 상세 카드 (커리큘럼, 특징, 대상, 난이도)
- **About** (`/about`): 미션/비전 + 핵심가치 4개 + 팀 소개
- **Notice** (`/notice`): 공지사항 (준비중)
- **QnA** (`/qna`): Q&A (준비중)

## 기능 설정
- **shop**: false (스토어 비활성화)
- **community**: true
- **search**: true
- **auth**: true (로그인/회원가입)
- **license**: false

## 생성 과정

### 1단계: 템플릿 복사
- `templete-ref`의 모든 소스 파일을 `study/`로 복사 (.git, node_modules, dist 제외)
- `.env` 파일은 biz-hub에서 복사 후 VITE_SITE_URL만 수정

### 2단계: 핵심 설정 파일 수정
- `package.json`: name → `dreamitbiz-study`
- `public/CNAME`: `study.dreamitbiz.com`
- `vite.config.ts`: port → 5181
- `src/config/site.ts`: 전체 사이트 설정 (카테고리 3개, 학습토픽 8개)

### 3단계: types 확장
- `src/types/index.ts`: Category, LearningSite 인터페이스 추가, SiteConfig에 categories/learningSites 필드 추가

### 4단계: 콘텐츠 페이지 생성
- `src/pages/Home.tsx`: biz-hub Home 패턴 (Hero + 통계 + 카테고리 카드 + CTA)
- `src/pages/Courses.tsx`: biz-hub Courses 패턴 (카테고리별 상세 카드)
- `src/pages/About.tsx`: biz-hub About 패턴 (미션/비전/가치/팀)
- `src/pages/Notice.tsx`: biz-hub Notice 패턴 (준비중)
- `src/pages/QnA.tsx`: biz-hub QnA 패턴 (준비중)

### 5단계: PublicLayout 라우트 추가
- `/courses`, `/courses/:id`, `/about`, `/notice`, `/qna` 라우트 추가
- ScrollToTop 컴포넌트 추가

### 6단계: 번역 키 추가
- `src/utils/translations.ts`: site.nav, site.home, site.courses, site.difficulty, site.about, site.notice, site.qna 키 추가 (ko/en)

### 7단계: index.html 메타 태그
- title, description, OG 태그, keywords, theme-color 모두 study 사이트 내용으로 변경

### 8단계: 빌드 확인
- `npm install`: 87 packages, 0 vulnerabilities
- `npm run build`: tsc 0 errors, vite build 성공 (6.87s)

### 9단계: 커밋 & 푸시 & 배포
- git commit → push → gh-pages deploy

## 참조 패턴
- **템플릿**: `templete-ref` (기본 구조, 공용 컴포넌트)
- **biz-hub 패턴**: Home/Courses/About/Notice/QnA 페이지 구조, Category/LearningSite 타입

## 파일 구조
```
study/
├── public/
│   ├── CNAME (study.dreamitbiz.com)
│   ├── favicon.svg
│   └── og-image.png
├── src/
│   ├── components/
│   │   ├── layout/ (Navbar.tsx, Footer.tsx)
│   │   ├── AuthGuard.tsx
│   │   ├── CommentSection.tsx
│   │   ├── ImageUpload.tsx
│   │   ├── Pagination.tsx
│   │   ├── SearchModal.tsx
│   │   └── SEOHead.tsx
│   ├── config/
│   │   ├── admin.ts
│   │   └── site.ts ★
│   ├── contexts/ (Auth, Cart, Language, Theme, Toast)
│   ├── hooks/ (useAOS, useCountUp)
│   ├── layouts/
│   │   └── PublicLayout.tsx ★
│   ├── pages/
│   │   ├── Home.tsx ★
│   │   ├── Courses.tsx ★ (신규)
│   │   ├── About.tsx ★ (신규)
│   │   ├── Notice.tsx ★ (신규)
│   │   ├── QnA.tsx ★ (신규)
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   ├── ForgotPassword.tsx
│   │   ├── MyPage.tsx
│   │   ├── Cart.tsx
│   │   ├── Checkout.tsx
│   │   ├── OrderConfirmation.tsx
│   │   ├── OrderHistory.tsx
│   │   └── NotFound.tsx
│   ├── styles/ (12 CSS files)
│   ├── types/
│   │   └── index.ts ★
│   ├── utils/
│   │   └── translations.ts ★
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── Dev_md/
│   └── study-site-creation.md
├── .env
├── .gitignore
├── index.html ★
├── package.json ★
├── tsconfig.json
└── vite.config.ts ★
```
(★ = 수정/신규 생성된 파일)
