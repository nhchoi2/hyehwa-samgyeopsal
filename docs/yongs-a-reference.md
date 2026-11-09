# A안: 용스다이닝 소스 기준

참고 레포: `/Users/choenamho/Documents/GitHub/yongs-dining`.

실제 홈 진입점 `src/app/(site)/page.tsx` → `Hero.tsx` → `sections/HomeHero.tsx`, `HomeFaq.tsx`와 `Mid.tsx`를 확인했습니다. `Header.tsx`, `Footer.tsx`, `globals.css`, `ui/ActionLink.tsx`의 배치·색·버튼·반응형 치수를 A안에 반영했습니다.

A안은 음식 사진 슬라이드 → FAQ → 대표 메뉴 → 교차형 음식/공간 소개 순서입니다. 원본의 계절 공지는 해당하는 대통령 공지가 없어 생략했고, 블로그 후기 영역은 실제 대통령 메뉴 카드로 대체했습니다. 원본에 있는 다른 매장의 리뷰·주소·연락처는 복사하지 않았습니다. 사진 자동 전환(5.2초), 수동 선택, 일시정지, reduced-motion 대응을 제공합니다.

메뉴의 왼쪽 사이드바·모바일 가로 탭·세트 기본 선택은 사용자 요청대로 유지했습니다. CSS는 `.pv-a`로 제한해 B/C에 적용되지 않습니다. 외부 폰트 네트워크 요청 없이 Nanum Gothic이 설치되어 있으면 사용하고, 그렇지 않으면 시스템 한글 고딕을 사용합니다.
