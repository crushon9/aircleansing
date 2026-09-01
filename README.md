# Lecella AIR CLEANSING

`lecella.co.kr`에서 제공할 AIR CLEANSING 제품 소개 사이트 소스다.

현재 버전은 데이터베이스가 없는 Next.js 정적 제품 랜딩페이지다. 제품 콘텐츠는 우선 로컬 데이터로 구성하며, 다음 단계에서 Sanity CMS와 연결한다.

## 요구 환경

- Node.js `>=22.13.0`
- npm

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`으로 확인한다.

## 검증

```bash
npm run build
npm test
npm run lint
```

## 현재 구조

- `app/page.tsx`: 제품 소개 페이지와 로컬 콘텐츠
- `app/globals.css`: 반응형 디자인
- `app/layout.tsx`: 검색 및 공유 메타데이터
- `public/images/`: 웹용으로 가공한 제품 이미지
- `out/`: 빌드 시 생성되는 Cloudflare Pages 배포용 정적 파일

## 운영 방향

- 공개 사이트: Cloudflare Pages
- 소스 관리: GitHub
- 콘텐츠 관리: Sanity
- 관리자 주소: `admin.lecella.co.kr`
- 방문자 데이터베이스: 사용하지 않음
- 판매: 스마트스토어 또는 카페24 등 외부 판매 페이지로 연결

원본 제품 이미지, 설계 문서, 접속정보와 하네스 문서는 이 저장소 밖의 로컬 작업 폴더에서 관리한다.
