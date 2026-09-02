# Lecella AIR CLEANSING

`lecella.co.kr`에서 제공할 AIR CLEANSING 제품 소개 사이트의 배포 가능한 소스 저장소다.

현재 구현은 Next.js App Router로 만든 단일 제품 랜딩페이지이며, 서버 데이터베이스나 별도 API 없이 정적 HTML로 내보낸다. 페이지 조립, 섹션 컴포넌트, 반복 콘텐츠 데이터, 클라이언트 효과를 분리했다.

## 기술 구성

- Next.js `16.3.1`
- React `19.2.8`
- TypeScript `5.9.3`
- 정적 내보내기(`output: "export"`)
- ESLint, React/접근성 규칙, Node.js 내장 테스트 러너

## 큰 폴더 구조

```text
site/
├── app/
│   ├── _components/home/   # 홈 섹션, 네비게이션, 콘텐츠 데이터
│   ├── globals.css        # 시각 시스템과 반응형 레이아웃
│   ├── interactive-effects.tsx
│   ├── layout.tsx
│   └── page.tsx           # 섹션 순서 조립
├── docs/                  # 구현 스펙과 AI 작업 하네스
├── public/                # 웹 이미지, 파비콘, Cloudflare 헤더
├── tests/                 # 정적 출력 검증
├── next.config.ts
├── package.json
└── README.md
```

원본 이미지는 이 Git 저장소에 넣지 않는다. 워크스페이스 루트의 `../img/`를 원본 보관 영역으로 사용하고, 사이트에는 웹용 파생 이미지만 `public/images/`에 둔다.

## 렌더링 구조

- `app/page.tsx`는 섹션 컴포넌트의 순서만 조립하는 Server Component다.
- `app/_components/home/intro-sections.tsx`는 히어로, 브랜드 이야기, 시각 요약, 제품 소개를 관리한다.
- `app/_components/home/detail-sections.tsx`는 설계 기준, 원료, 기술, 공간, 사용법, 구매 안내와 푸터를 관리한다.
- `app/_components/home/content.ts`는 반복 렌더링하는 카드·단계·원료 데이터를 관리한다.
- `app/_components/home/navigation.tsx`는 플로팅 로고, 데스크톱·모바일 네비게이션, 구매 버튼을 관리한다.
- `app/interactive-effects.tsx`만 클라이언트 컴포넌트다. 노출, 스크롤, 현재 섹션 표시, 반응형 플로팅 톤, 카드·입자·아로마 효과를 담당한다.

## 페이지 순서

현재 사용자 여정은 문제 인식 → 제품 이해 → 설계 근거 → 사용 가이드 → 구매 안내 흐름으로 구성된다.

1. 히어로
2. 브랜드 이야기
3. 시각 요약
4. 제품 소개
5. 설계 기준
6. 핵심 원료
7. 분산 기술
8. 공간 루틴
9. 사용 방법
10. 구매 안내
11. 푸터

섹션 `id`와 데스크톱·모바일 네비게이션 순서는 항상 같아야 한다.

## 문서

- [`docs/LANDING_PAGE_SPEC.md`](docs/LANDING_PAGE_SPEC.md): 섹션 순서, 소스 구조, 시각·반응형 원칙
- [`docs/AGENT_HARNESS.md`](docs/AGENT_HARNESS.md): 후속 AI 작업의 데스크톱·노트북·모바일 필수 검증 체크리스트

## 로컬 실행

필요 환경은 Node.js `>=22.13.0`과 npm이다.

```bash
npm install
npm run dev
```

개발 서버는 `http://127.0.0.1:3000`에서 실행된다.

## 검증

```bash
npm run lint
npm run build
npm test
```

- `npm run lint`: TypeScript, React, 접근성, Next.js 규칙을 검사한다.
- `npm run build`: 정적 사이트를 `out/`에 생성한다.
- `npm test`: 생성된 HTML, 이미지와 보안 헤더를 검사한다.

UI 변경은 데스크톱 `1920×1080`, 13인치 노트북 `1366×768`, 모바일 `390×844`에서 추가로 확인한다.

## Git에 포함하지 않는 경로

- `node_modules/`
- `.next/`
- `out/`
- `output/`
- `.playwright-cli/`
- 환경 파일, 로컬 로그, 임시 캡처·백업 파일

위 경로는 삭제해도 설치·빌드·브라우저 검증 과정에서 다시 생성된다.

## 운영 방향

- 공개 사이트: Cloudflare Pages
- 소스 관리: 이 `site/` Git 저장소와 GitHub
- 콘텐츠 관리: 향후 Sanity Content Lake 연결
- 판매: 스마트스토어 또는 카페24 등 외부 판매 페이지로 연결

회원가입, 자체 결제, 주문·재고 관리, 자체 SQL 데이터베이스는 초기 범위가 아니다.
