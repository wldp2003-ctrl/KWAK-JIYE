# 곽지예 소개 홈페이지

채용 담당자에게 곽지예를 소개하는 한 페이지짜리 홈페이지입니다.

> 현장을 이해하고 사람을 이끄는, 차세대 건설리더를 꿈꿉니다.

- 사이트 주소: https://wldp2003-ctrl.github.io/KWAK-JIYE/
- 저장소: https://github.com/wldp2003-ctrl/KWAK-JIYE
- 연락처(공개): wldp2003@naver.com — 마무리 카드와 푸터에 표시

## 파일 구성

```
site/
 ├─ index.html          페이지 전체 (CSS·JS 포함, 외부 파일은 Google Fonts만 사용)
 ├─ images/profile.jpg  증명사진 (긴 변 800px, JPG 품질 85, 사진 정보(EXIF) 제거)
 ├─ projects/           프로젝트 상세 페이지 (각 폴더에 index.html + img/)
 │   ├─ cm-proposal/      광양 동호안 LNG 냉열 데이터센터 CM 제안서
 │   ├─ winter-concrete/  발열팩 분말 영하 환경 콘크리트 연구 (캡스톤)
 │   ├─ osc-dmp/          OSC Digital Module Passport (차세대 건설리더 아카데미)
 │   └─ rest-area/        두 번 멈추는 휴게소 (도로경관디자인 대전)
 └─ README.md           이 문서
```

## 페이지 구성

| 순서 | 섹션 | 내용 |
|---|---|---|
| 1 | 소개 | 이름, 한 줄 소개, 맥 창 모양 프로필 카드, 소개 글 |
| 2 | 관심 분야 | 건설사업관리(CM) · 공정관리 · 디지털 건설(OSC) |
| 3 | 역량 | 리더십 · 책임감 · 건설사업관리 카드 3개 |
| 4 | 이력 | 학력 2개 + 직책 4줄 번호 타임라인 |
| 5 | 활동 | 분류 버튼(전체 / 공모전·대회 / 대외 / 교내) + 활동 9개 |
| 6 | 프로젝트 | 맥 창 모양 카드 4개 → 누르면 `projects/` 상세 페이지로 이동 |
| 7 | 마무리 · 푸터 | next step 카드, 링크, 저작권 |

색의 뜻: 빨강 = 공모전·대회·수상, 주황 = 대외, 초록 = 교내·직책

## 내 컴퓨터에서 미리 보기

`index.html`을 더블클릭하면 브라우저에서 열립니다.

## 내용 고치기

- 프로젝트 상세 페이지 내용은 폴더 안 원본 자료(제안서·발표 자료·보고서·공모전 브리프)에서 확인한 내용만 썼습니다. 그림은 원본에서 잘라 `projects/<폴더>/img/`에 넣었습니다(발표자 이름이 보이는 부분은 잘라냄).

- 글자: `index.html`을 메모장이나 VS Code로 열어 해당 문장을 찾아 고칩니다.
- 사진: `images/profile.jpg`를 같은 이름의 새 사진으로 바꿉니다(세로 사진, 긴 변 800px 정도 권장).
- 활동 추가: `<ul class="acts">` 안의 `<li class="act" ...>` 한 줄을 복사해 고칩니다.
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
