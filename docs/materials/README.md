# 혜화삼겹살 제작 자료

네이버 플레이스에서 2026-10-14 수집한 기존 자료를 이관했습니다. 신규 가격 조회가 아닌 저장된 자료 기준입니다. 메뉴 원문 업데이트일은 2026-09-16입니다.

- `data/menu-source.json`: 화면에서 사용하는 메뉴·가격·사진 연결의 단일 원본. `data/menu.ts`와 `data/lunch.ts`가 공유합니다.
- `public/images/materials/`: 메뉴 33개, 메뉴판 2개, 업체 사진 89개의 WebP 최적화본. 원본을 다시 내려받을 필요 없이 사용할 수 있습니다.
- 이 폴더의 `menus.json`, `store-info.json`, `menu-summary.txt`, `photo-selection.json`: 수집 당시 참고자료입니다. 원문 파일 경로는 이전 자료 폴더 기준이며, 이관된 경로는 `image-manifest.json`을 확인하세요.
- `image-manifest.json`: 이미지별 원본 출처, 이관 경로, 해상도, 압축 전후 바이트 수.

메뉴는 최대 960px, 업체 사진은 1600px, 글자가 있는 메뉴판은 2400px로 긴 변을 제한했습니다. 작은 이미지는 확대하지 않았으며 EXIF 등 메타데이터를 제거했습니다. 화면에서는 Next Image의 반응형 srcset과 기본 지연 로딩을 사용하고, 첫 대표 이미지에만 preload를 적용합니다. 세 시안은 동일한 이미지 URL을 공유합니다.

고용량 원본은 기존 website-platform의 로컬 자료 폴더에 보존되어 있습니다. 이 레포에는 웹용 파일만 이관했습니다. 기존 레포에 있던 JPG 원본은 보존하되 시안은 WebP를 참조합니다.
