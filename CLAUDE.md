# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

**DFGEAR (던파기어)** — 던전앤파이터(DNF) 유저를 위한 정적 웹 애플리케이션. Neople OpenAPI를 백엔드(`https://api.dfgear.xyz`)로 사용하며, 캐릭터 타임라인(태초/에픽/레전더리 장비 획득 이력), 강화 이력, 모험단 통계, 주간 레이드 트래커 등의 기능을 제공한다. 배포 주소: `https://dfgear.xyz`

## 빌드

JS 소스는 `static/js_origin/`에 있고, 압축된 결과물은 `static/js/`에 저장된다.
현재는 압축을 따로 하지 않아도 된다.
만약 /static/js/index.min.js 압축 JS를 사용하는 코드라면 /static/js_origin/index.js를 기준으로 작업해야한다.

별도의 패키지 매니저, 테스트 프레임워크, 번들러 없음. 순수 HTML/CSS/JS 정적 사이트.

## 아키텍처

### 페이지 구조

각 HTML 파일은 독립적인 기능 단위이며, 대응하는 JS 파일을 각자 로드한다:

| HTML | JS 소스 (js_origin/) | 기능 |
|---|---|---|
| `index.html` | `index.js` | 메인 캐릭터 검색 + 태초 집계 통계 대시보드 |
| `character.html` | `character.js` | 캐릭터 상세, 아이템 획득 이력 (타임라인, 강화 이력, 항아리) |
| `adventure.html` | `adventure.js` | 모험단 전체 캐릭터 목록 |
| `advtDetail.html` | `advtDetail.js` | 모험단 상세 (아이템 획득 이력, 집계) |
| `chase.html` | `chase.js` | 최근 획득한 아이템 위치 조회 |
| `lucky.html` | `lucky.js` | 전체 태초 획득 통계 (행운 순위) |
| `unlucky.html` | `unlucky.js` | 태초 획득 실패, 시행 횟수 통계 |
| `week.html` | `week.js` | 누적 태초 획득 현황 대시보드 |
| `streamer.html` / `strmDetail.html` | `streamer.js` / `strmDetail.js` | 스트리머 태초 획득 현황 |
| `monthWp.html` | `monthWp.js` | 월간 태초 무기 항아리깡 현황 |
| `powerBalance.html` | `power.js` | 파워밸런스 계산 도구 (미압축, 신규) |

### 공통 모듈 (common.js)

모든 페이지에서 로드되는 공유 유틸리티:

- `callGearAPI(endpoint, data, callback)` — 모든 API 호출의 진입점. `https://api.dfgear.xyz`로 jQuery AJAX GET 요청. 커스텀 헤더 `gear: gear-143b7e68` 포함
- `toast(type, msg)` — Bootstrap alert 기반 알림 (2초 후 자동 제거)
- `convertServer(serverId)` — 서버 ID를 한글명으로 변환 (`"cain"` → `"카인"`)
- `checkError(responseText)` — API 에러 코드 파싱 및 사용자 안내
- `recentApply / recentDelete / recentView / recentSearch` — 최근 검색 기록 관리 (localStorage, 최대 6개)
- `ligthModeChange` — 다크/라이트 모드 전환 (localStorage `theme` 키 사용)
- `isBeginningOfMonth()` — 매월 1~4일 여부 판별 (항아리깡 메뉴 노출 조건)

### 정적 데이터 파일

- `static/js/totalData.js` — `lucky.html`에서 사용하는 전체 통계 수치 (업데이트 날짜, 유저 수, 태초/에픽/레전더리 카운트, Top 채널, 아이템별 획득 수 등)
- `static/js/weekData.js` — `week.html`에서 사용하는 주간 레이드 통계 수치
- 두 파일 모두 JS 변수로 하드코딩되어 있어 **주기적으로 수동 업데이트 필요**

### 클래스 모듈

- `static/js_origin/gearClass.js` — `ReinCard` 클래스: 강화 이력 카드 UI 렌더링 (jQuery 기반)
- `static/js/gridClass.js` — TUI Grid 설정 헬퍼
- `static/js/chartSet.js` — Chart.js 차트 생성 헬퍼 (`makeChart` 함수)

### API 통신 패턴

모든 API 호출은 `callGearAPI`를 통해 이루어지며 콜백 패턴을 사용한다:

```js
callGearAPI('/search/' + serverId, { cName: encodeURIComponent(name) }, function(result, error) {
  if (error) { /* 에러 처리 */ }
  else { /* 결과 처리 */ }
});
```

API 서버 점검 여부는 `sessionStorage.serverState` (`"0"` = 점검중) 와 전역 `apioff` 플래그로 관리한다. 집계 데이터는 `localStorage.aggregate`에 캐싱되며 15분마다 갱신한다.

### PWA

- `manifest.json` — PWA 메타데이터
- `service-worker.js` — 정적 리소스(CSS, JS, 폰트, 이미지) 캐시. 캐시 버전: `dfgear-cache-v2.27`. SW 업데이트 감지 시 페이지 자동 새로고침

### 페이지 간 이동

페이지 파라미터는 URL 쿼리스트링 또는 sessionStorage로 전달한다:

- 캐릭터 페이지: `?sId={serverId}&cId={characterId}&cName={name}`
- 모험단 페이지: `?cName={adventureName}`
- 로고 클릭 시 `index.html`로 이동 (모든 페이지 공통)

## 커밋 컨벤션

| 접두사 | 의미 |
|---|---|
| `feat` | 기능 추가, UI/UX 변경 |
| `fix` | 버그 수정 |
| `!hotfix` | 긴급 버그 수정 |
| `design` | CSS 등 UI 디자인 변경 |
| `refactor` | 코드 리팩토링 |
| `docs` | 문서/데이터 수정 (totalData, weekData 업데이트 포함) |
| `deploy` | 운영 배포 |
| `chore` | 이미지 등 리소스 추가/변경 |
