# hyehwa-samgyeopsal

혜화삼겹살대통령직영본점 홈페이지. 다른 음식점에도 재사용할 수 있는 Next.js App Router 기반 구조입니다. 실제로 제공되지 않은 정보와 사진은 비워 두었습니다.

## 실행

Node.js 20.19 이상을 권장합니다.

```sh
npm ci
cp .env.example .env.local
npm run dev
```

브라우저에서 http://localhost:3000 을 엽니다. 도메인·분석 ID가 없어도 로컬 실행과 빌드가 가능합니다.

```sh
npm run lint
npm run typecheck
npm run build
npm run format:check
npm start
```

Next.js 16, React 19, TypeScript, Tailwind CSS 4, Swiper, next/image를 사용합니다. 버전은 `package-lock.json`으로 고정합니다. Tailwind 4의 PostCSS 설정은 `postcss.config.mjs`, 스타일은 `app/globals.css`에 있습니다.

## 주로 수정할 세 곳

| 위치                 | 수정할 내용                                                       |
| -------------------- | ----------------------------------------------------------------- |
| `data/restaurant.ts` | 상호명, 영문명, 주소, 전화, 영업시간, 소개, 특징, 사진 목록, 리뷰 |
| `data/menu.ts`       | 일반 메뉴, 카테고리, 가격, 대표 메뉴                              |
| `data/lunch.ts`      | 점심·세트·추가 메뉴                                               |
| `data/links.ts`      | 예약, 네이버 예약, 카카오톡, Instagram, 지도 링크                 |
| `data/content.ts`    | 페이지 제목, 홈 섹션 제목, 준비 중 안내 문구                      |
| `data/navigation.ts` | 공통 메뉴 및 경로                                                 |
| `config/site.ts`     | SEO, 검색 키워드, 점심 페이지 사용 여부, OG 이미지                |
| `config/theme.ts`    | 기본 브랜드 색상 5개                                              |
| `public/images/`     | 실제 이미지 파일                                                  |

`data`는 실제 표시 데이터, `config`는 설정, `public/images`는 이미지입니다. 컴포넌트에 매장 정보를 직접 넣지 않습니다. 상호 변경 시 `data/restaurant.ts`와 음식점별 SEO 문구인 `config/site.ts`, 홈 지역 문구인 `data/content.ts`를 확인하세요.

## 파일 구조

```text
app/                  5개 페이지, 공통 layout, CSS, SEO, 404
components/
  layout/             Header, MobileMenu, Footer, FloatingContact
  common/             제목, 이미지 슬라이더, 외부 링크, 방문 정보
  home/               Hero, 예약·문의 섹션
  menu/               메뉴 카드, 카테고리별 목록
config/               site.ts, theme.ts
data/                 음식점 데이터 및 화면 문구
types/                매장·이미지·메뉴 TypeScript 타입
public/images/
  logo/ hero/ menu/ lunch/ interior/ about/ common/
```

페이지별로 한 번만 사용하는 홈 섹션은 `app/page.tsx`에 두었습니다. 불필요하게 섹션마다 파일을 나누지 않았습니다.

## 메뉴 입력 예시

아래는 형식 설명이며 실제 메뉴가 아닙니다. 확인된 메뉴만 `data/menu.ts`의 `menus`에 입력하세요.

```ts
{
  id: 'unique-menu-id',
  category: '확인된 카테고리',
  name: '실제 메뉴명',
  price: '실제 가격과 단위',
  description: '확인된 설명',
  image: '/images/menu/menu_01.webp',
  featured: true,
}
```

- `id`는 중복되지 않게 입력합니다.
- `featured: true`인 메뉴가 홈 대표 메뉴에 표시됩니다.
- 카테고리는 데이터에서 자동으로 묶습니다.
- 메뉴 이미지가 없으면 `image: ''`로 두세요. 사진 준비 중 영역을 표시합니다.
- 가격은 `"금액 / 중량"`처럼 표시할 문자열을 입력합니다.
- 점심 메뉴는 같은 항목에 `kind: 'main' | 'set' | 'extra'` 중 하나를 추가합니다.
- `config/site.ts`의 `lunchEnabled: false`로 점심 페이지를 비활성화하면 헤더·푸터·사이트맵에서 제외되고 `/lunch`는 404가 됩니다.

## 사진과 슬라이더

`public/images/hero/hero_01.webp`에 사진을 넣은 뒤 `data/restaurant.ts`에 등록합니다.

```ts
hero: [
  { src: '/images/hero/hero_01.webp', alt: '사진에 실제로 보이는 내용' },
  { src: '/images/hero/hero_02.webp', alt: '두 번째 사진의 실제 내용' },
],
```

`photos.interior`, `photos.about`도 같은 형식입니다. 로고는 `logo.src`와 `logo.alt`를 입력합니다. 로고가 없으면 상호를 텍스트로 표시합니다. 파비콘은 임시 H 아이콘인 `app/icon.svg`를 교체하세요.

- WebP 권장. 파일 경로는 `/images/...`로 작성합니다.
- 사진 0장은 준비 중 영역, 1장은 정적 표시, 2장 이상은 Swiper 자동 재생·반복·좌우 이동·페이지 표시를 제공합니다.
- 자동 재생 일시 정지 버튼, 키보드 이동, 움직임 줄이기 설정을 지원합니다.
- next/image의 `sizes`를 지정하고 Hero 첫 이미지만 `priority`로 로드합니다. 나머지는 기본 lazy loading입니다.
- 외부 이미지 호스트를 사용하려면 별도로 `next.config.ts`의 `images.remotePatterns`를 설정해야 합니다. 기본 구조는 로컬 이미지를 사용합니다.

## 매장 정보·예약·지도

값이 비어 있으면 준비 중 문구를 표시합니다. 비어 있는 링크는 버튼으로 만들지 않습니다. 외부 URL은 실제 `https://...` 주소를 입력하세요. 전화번호는 `restaurant.phone`에서 읽습니다. 하나라도 연락·지도 링크가 있으면 우측 하단 빠른 연락 메뉴가 나타납니다.

지도는 준비 영역만 있습니다. `restaurant.coordinates`에 좌표를 보관할 수 있지만 **좌표 입력만으로 임베드 지도가 표시되지는 않습니다**. 실제 좌표와 지도 서비스가 확정되면 `components/common/LocationInfo.tsx`에 연동합니다. 현재는 `links.naverMapUrl`, `links.kakaoMapUrl`에 입력한 외부 지도 링크로 이동합니다. 추측한 주소·좌표·스토리·리뷰는 없습니다.

## SEO 및 분석

`.env.local`과 Vercel 환경 변수에는 실제 발급된 값만 입력하세요.

| 변수                       | 용도                          |
| -------------------------- | ----------------------------- |
| `NEXT_PUBLIC_SITE_URL`     | 실제 운영 URL (https 포함)    |
| `NEXT_PUBLIC_GA_ID`        | GA4 측정 ID, `G-...`          |
| `GOOGLE_SITE_VERIFICATION` | Google Search Console 인증 값 |
| `NAVER_SITE_VERIFICATION`  | Naver Search Advisor 인증 값  |

운영 URL을 비워 두면 `noindex`, `robots.txt`의 전체 차단, 빈 사이트맵이 적용됩니다. 실제 오픈 준비가 끝난 뒤 **Production 환경**에 운영 URL을 입력하고 재배포하세요. Preview 환경은 운영 URL을 비워 검색 수집을 막습니다. 분석 ID와 인증 값이 없으면 관련 스크립트·메타 태그도 추가되지 않습니다.

각 페이지에 title·description·canonical을 두고 공통 Open Graph와 검색 키워드를 제공합니다. 실제 대표 사진이 있으면 `config/site.ts`의 `ogImage`를 지정하세요. 운영 URL 미설정 상태의 상대 canonical은 운영 SEO 검증 대상이 아닙니다. `/sitemap.xml`, `/robots.txt`, `/icon.svg`는 Next.js가 제공합니다. 다국어 페이지는 아직 구현하지 않았습니다.

## GitHub → Vercel 자동 배포

현재 Git 원격 저장소는 `https://github.com/nhchoi2/hyehwa-samgyeopsal`입니다. 실제 Vercel 연결과 배포는 계정에서 설정해야 합니다.

1. 로컬에서 lint·typecheck·build를 통과시킵니다.
2. 변경 사항을 Git에 커밋하고 GitHub에 push합니다.
3. Vercel의 Add New Project에서 이 GitHub 저장소를 Import합니다.
4. Framework Preset은 Next.js, Root Directory는 저장소 루트, 설치는 `npm ci`, 빌드는 `npm run build`를 사용합니다. 출력 디렉터리는 Next.js 기본값을 사용합니다.
5. Production Branch를 `main`으로 설정합니다.
6. 실제 도메인과 필요한 환경 변수를 Production에 등록합니다.
7. 이후 `main`에 반영된 커밋을 Vercel이 자동 배포합니다. PR은 Preview 배포로 확인할 수 있습니다.

환경 변수 변경 후에는 재배포가 필요합니다. Vercel이 Next.js 실행과 이미지 최적화를 처리하므로 별도 서버를 운영하지 않습니다. 기본 Vercel Next.js 지원으로 충분해 별도 `vercel.json`은 만들지 않았습니다.

## 범위

자체 예약·회원·결제·주문·DB·관리자·POS는 포함하지 않습니다. 모바일 메뉴, 준비 중 상태, 반응형 레이아웃과 추후 실제 데이터를 연결할 수 있는 구조를 우선합니다. 음식점 정보와 사진을 채우고 최종 브랜드 디자인을 조정한 뒤 오픈하세요.

코드 정렬은 `npm run format`으로 실행합니다. ESLint는 현재 Next.js 공식 플러그인의 호환 범위에 맞춰 9 버전을 사용합니다(설치 시 지원 종료 경고가 표시될 수 있음). Next.js 개발 서버가 생성하는 `AGENTS.md`, `CLAUDE.md`는 AI 도구용 안내 파일입니다.
