# 곽지예 소개 홈페이지

채용 담당자에게 곽지예를 소개하는 한 페이지짜리 홈페이지입니다.

> 현장을 이해하고 사람을 이끄는, 차세대 건설리더를 꿈꿉니다.

- 사이트 주소: https://wldp2003-ctrl.github.io/KWAK-JIYE/
- 저장소: https://github.com/wldp2003-ctrl/KWAK-JIYE
- 어두운 버전(v2, 영상 플랫폼 컨셉): https://wldp2003-ctrl.github.io/KWAK-JIYE/v2/
- 연락처(공개): wldp2003@naver.com — 마무리 카드와 푸터에 표시

## 파일 구성

```
site/
 ├─ index.html          메인(소개) — 프로필, 소개 글, 각 페이지로 가는 카드 6개
 ├─ interest/           관심 분야
 ├─ strength/           역량
 ├─ history/            이력 (학생회장 활동 사진 보기 포함)
 ├─ activity/           활동 (분류 버튼, 카메라 표시가 있는 활동은 사진 보기)
 ├─ projects/           프로젝트 목록 + 상세 페이지 5개 (각 폴더에 index.html + img/)
 │   ├─ cm-proposal/      광양 동호안 LNG 냉열 데이터센터 CM 제안서
 │   ├─ winter-concrete/  발열팩 분말 영하 환경 콘크리트 연구 (캡스톤)
 │   ├─ osc-dmp/          OSC Digital Module Passport (차세대 건설리더 아카데미)
 │   ├─ rest-area/        두 번 멈추는 휴게소 (도로경관디자인 대전)
 │   └─ ai-apps/          AI 활용 프로젝트 (하반기 캡스톤) — play/에 LRFD 놀이터 원본 앱 (지예건설은 별도 저장소 jiye-construction)
 ├─ contact/            연락 (마무리 메시지, 이메일)
 ├─ v2/                 어두운 버전(영상 플랫폼 컨셉). 같은 구성, 본문은 기본 버전에서 가져와 다시 만듦
 ├─ assets/site.css     메인과 위 페이지들이 함께 쓰는 디자인
 ├─ assets/site.js      메뉴, 활동 분류, 사진 보기 창, 스크롤 효과
 ├─ images/profile.jpg  증명사진 (긴 변 800px, 사진 정보(EXIF) 제거)
 ├─ images/gallery/     활동 사진 (긴 변 1400px, EXIF 제거)
 └─ README.md           이 문서
```

## 페이지 구성

메인(소개) 페이지에서 카드를 누르거나 위쪽 메뉴를 눌러 각 페이지로 들어갑니다.
각 페이지 아래에는 이전/다음 페이지 버튼이 있습니다.

| 메뉴 | 주소 | 내용 |
|---|---|---|
| 소개 | `/` | 이름, 한 줄 소개, 맥 창 모양 프로필 카드, 소개 글, 페이지 카드 |
| 관심 분야 | `/interest/` | 건설사업관리(CM) · 공정관리 · 디지털 건설(OSC) |
| 역량 | `/strength/` | 리더십 · 책임감 · 건설사업관리 카드 3개 |
| 이력 | `/history/` | 학력 2개 + 직책 4줄 번호 타임라인 |
| 활동 | `/activity/` | 분류 버튼 + 활동 9개, 사진 보기 |
| 프로젝트 | `/projects/` | 프로젝트 카드 5개 → 상세 페이지 |
| 연락 | `/contact/` | next step 카드, 이메일 |

색의 뜻: 빨강 = 공모전·대회·수상, 주황 = 대외, 초록 = 교내·직책

## 내 컴퓨터에서 미리 보기

`index.html`을 더블클릭하면 브라우저에서 열립니다. 폴더 주소(예: `interest/`)로 이동하는 링크는 더블클릭으로 연 화면에서는 폴더 목록이 보일 수 있으니, 정확히 보려면 `site` 폴더에서 `python -m http.server`를 실행하고 http://localhost:8000/ 으로 엽니다.

## 내용 고치기

- 프로젝트 상세 페이지 내용은 폴더 안 원본 자료(제안서·발표 자료·보고서·공모전 브리프)에서 확인한 내용만 썼습니다. 그림은 원본에서 잘라 `projects/<폴더>/img/`에 넣었습니다(발표자 이름이 보이는 부분은 잘라냄).

- 글자: 해당 페이지 폴더의 `index.html`을 메모장이나 VS Code로 열어 문장을 찾아 고칩니다. 메뉴와 푸터는 모든 페이지에 들어 있습니다.
- 사진: `images/profile.jpg`를 같은 이름의 새 사진으로 바꿉니다(세로 사진, 긴 변 800px 정도 권장).
- 활동 사진: `images/gallery/<폴더>/`에 사진을 넣고, `assets/site.js`의 `var G = {...}` 목록에 경로와 설명을 추가합니다. 수료증 사진의 생년월일은 가려 두었습니다.
- 활동 추가: `activity/index.html`의 `<ul class="acts">` 안의 `<li class="act" ...>` 한 줄을 복사해 고칩니다.
  `data-c` 값은 `contest`(공모전·대회) / `ext`(대외) / `campus`(교내) 중 하나입니다.

## GitHub Pages에 올리는 방법

GitHub 무료 계정에서 Pages를 쓰려면 저장소가 **공개(public)** 여야 합니다.
원본 이력 자료가 함께 올라가지 않도록 **반드시 이 `site` 폴더 안에서만** git을 사용합니다.

### 처음 한 번

```bash
# 1) 준비 확인
git --version
gh --version
gh auth status          # 로그인이 안 되어 있으면: gh auth login → GitHub.com → HTTPS → 브라우저 로그인

# 2) site 폴더에서 저장소 만들기
cd site
git init -b main
git add .
git commit -m "곽지예 홈페이지 첫 배포"

# 3) GitHub에 공개 저장소를 만들고 올리기 (<아이디>.github.io 로 만들면 주소가 가장 짧습니다)
gh repo create <저장소이름> --public --source=. --remote=origin --push

# 4) Pages 켜기
gh api -X POST repos/<아이디>/<저장소이름>/pages -f "source[branch]=main" -f "source[path]=/"

# 5) 1~2분 뒤 상태·주소 확인
gh api repos/<아이디>/<저장소이름>/pages
```

- 저장소 이름이 `<아이디>.github.io`이면 주소는 `https://<아이디>.github.io/`
- 다른 이름이면 주소는 `https://<아이디>.github.io/<저장소이름>/`

### 수정한 내용 다시 올리기

```bash
cd site
git add .
git commit -m "수정 내용"
git push
```

올린 뒤 1~2분 정도 지나면 사이트에 반영됩니다. 바로 안 보이면 브라우저에서 새로고침(Ctrl+F5)을 해 보세요.

## v2 (어두운 버전) 고치기

v2 페이지는 기본 버전의 내용을 가져와 만든 결과물입니다. 내용을 바꿀 때는 기본 버전을 먼저 고친 뒤 v2를 다시 만들어야 같은 내용이 유지됩니다.
v2만의 디자인은 `v2/assets/v2.css`, 움직임(글자 채움, 가로 줄 넘기기, 질문창 → 메일)은 `v2/assets/v2.js`에 있습니다.
