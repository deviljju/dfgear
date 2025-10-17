# DNF_DFGEAR - 던전앤파이터 태초, 무기고 탐색기

작성자 : deviljju

최종수정일자 : 25.10.17

# Git Commit Convention
| 제목 | 설명 |
|-----|-----|
| init | 프로젝트 생성 |
| feat | 기능 추가, UI/UX 기능 변경 |
| fix | 기능 수정 |
| style | 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우 |
| chore | 이미지 등 리소스 추가 및 변경 |
| docs | md 및 문서 수정 |
| perf | 성능 개선 |
| refactor | 코드 리팩토링 |
| ci | CI 설정 관련 수정 |
| test | 테스트 코드, 리팩토링 테스트 코드 추가 |

[사이트바로가기](https://dfgear.xyz/)

vmd : https://adstxt.venatusmedia.com/dfgear.xyz/ads.txt

### 단순 타임라인 API
* 서버명, 캐릭터명을 입력하면 2025-01-09 ~ 현재날짜 까지의 태초, 에픽 수 출력하는 단순한 기능

---

[UPDATE] 25.10.17
 1. cloudflare 사용 테스트

23.10.27
 1. ec2 서버로 API 서버 이전 예정 대비 router api 추가
 2. 웹호스팅은 github.io 그대로 사용할 수도 있음, html에 ejs + script 넣기

23.10.25
 1. API 서버로 호출을 보내어 cors 해결 (무료서버이므로 사양, 트래픽초과 이슈있음)
 2. 선계 상급 던전 골카 미스트기어도 리스트에 표시

23.10.24
  1.  ~~APIKEY 입력칸 표시~~
  2. github.io 웹 호스팅 페이지 배포

---

OpenAPI (powered by Neople OpenAPI)
