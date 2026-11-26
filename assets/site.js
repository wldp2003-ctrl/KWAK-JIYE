(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ROOT = document.documentElement.getAttribute('data-root') || '';

  /* 좁은 화면: 메뉴 줄에서 지금 페이지가 보이도록 */
  var nav = document.querySelector('.nav'), on = nav && nav.querySelector('.on');
  if (nav && on && nav.scrollWidth > nav.clientWidth){
    nav.scrollLeft = on.offsetLeft - (nav.clientWidth - on.offsetWidth) / 2;
  }

  /* 활동 분류 */
  var btns = document.querySelectorAll('.fbtn');
  var acts = document.querySelectorAll('.act');
  function filter(f){
    var first = true;
    btns.forEach(function(b){ b.setAttribute('aria-pressed', b.dataset.f === f ? 'true' : 'false'); });
    acts.forEach(function(li){
      var show = f === 'all' || li.dataset.c === f;
      li.hidden = !show;
      li.classList.remove('show', 'first');
      if (show){
        if (first){ li.classList.add('first'); first = false; }
        if (!reduce){ void li.offsetWidth; li.classList.add('show'); }
      }
    });
  }
  if (btns.length){
    btns.forEach(function(b){ b.addEventListener('click', function(){ filter(b.dataset.f); }); });
    filter('all');
  }

  /* 활동 사진 보기 */
  var G = {
    cm: {t:'무영CM 경진대회 · 혁신상', link:'projects/cm-proposal/', p:[
      ['images/gallery/cm/01.jpg','혁신상 수상 (팀 잼민아이)'],
      ['images/gallery/cm/02.jpg','팀 발표']]},
    schedule: {t:'한국건설관리학회 공정관리 경진대회', p:[
      ['images/gallery/schedule/01.jpg','참가 확인증 · 2026년 11월 6일, 여수'],
      ['images/gallery/schedule/02.jpg','참가 명찰 · 공정관리 2팀'],
      ['images/gallery/schedule/03.jpg','경진대회 진행 모습'],
      ['images/gallery/schedule/04.jpg','경진대회 진행 모습'],
      ['images/gallery/schedule/05.jpg','경진대회 진행 모습']]},
    road: {t:'제15회 도로경관디자인 대전 · 두 번 멈추는 휴게소', link:'projects/rest-area/', p:[
      ['projects/rest-area/img/render.jpg','휴게소 건물 앞 적용 예시 (생성형 AI 이미지)'],
      ['projects/rest-area/img/panel.jpg','출품 판넬'],
      ['projects/rest-area/img/module.jpg','방호 모듈 3D 모델'],
      ['projects/rest-area/img/site-plan.jpg','배치 평면도']]},
    intern: {t:'제일건설 풍경채 현장 인턴십', p:[
      ['images/gallery/intern/01.jpg','현장 안전교육장'],
      ['images/gallery/intern/02.jpg','현장 실습'],
      ['images/gallery/intern/03.jpg','현장 실습']]},
    academy: {t:'차세대 건설리더 아카데미 23기 · 수료', link:'projects/osc-dmp/', p:[
      ['images/gallery/academy/01.jpg','교육수료증 · 2026년 6월 22일 ~ 7월 24일 (72시간)']]},
    council: {t:'2025 건축학부 학생회장', p:[
      ['images/gallery/council/01.jpg','2025 건축학부 학생회 로고 ‘축(築)’'],
      ['images/gallery/council/02.jpg','학생회 로고 디자인'],
      ['images/gallery/council/03.jpg','2025 공학 강연회 ‘건축을 말하다’ 포스터'],
      ['images/gallery/council/04.jpg','신입생 OT 진행'],
      ['images/gallery/council/05.jpg','신입생 OT 진행']]}
  };
  var dlg = document.getElementById('gal');
  if (dlg && dlg.showModal){
    var gImg = document.getElementById('galImg'), gCap = document.getElementById('galCap'),
        gCnt = document.getElementById('galCount'), gTh = document.getElementById('galThumbs'),
        gTit = document.getElementById('galTitle'), gLink = document.getElementById('galLink'),
        gPrev = dlg.querySelector('.gprev'), gNext = dlg.querySelector('.gnext'), cur = null, idx = 0, opener = null;
    var show = function(i){
      idx = (i + cur.p.length) % cur.p.length;
      var it = cur.p[idx];
      gImg.src = ROOT + it[0]; gImg.alt = it[1]; gCap.textContent = it[1];
      gCnt.textContent = (idx + 1) + ' / ' + cur.p.length;
      Array.prototype.forEach.call(gTh.children, function(b, k){
        if (k === idx){ b.setAttribute('aria-current', 'true'); } else { b.removeAttribute('aria-current'); }
      });
    };
    var openG = function(key, btn){
      cur = G[key]; if (!cur) return; opener = btn;
      gTit.textContent = cur.t;
      gTh.innerHTML = '';
      cur.p.forEach(function(it, k){
        var b = document.createElement('button'); b.type = 'button';
        b.setAttribute('aria-label', (k + 1) + '번째 사진: ' + it[1]);
        var im = document.createElement('img'); im.src = ROOT + it[0]; im.alt = ''; im.loading = 'lazy';
        b.appendChild(im); b.addEventListener('click', function(){ show(k); }); gTh.appendChild(b);
      });
      var many = cur.p.length > 1;
      gPrev.hidden = gNext.hidden = gTh.hidden = gCnt.hidden = !many;
      if (cur.link){ gLink.href = ROOT + cur.link; gLink.hidden = false; } else { gLink.hidden = true; }
      show(0);
      dlg.showModal();
      document.documentElement.style.overflow = 'hidden';
    };
    document.querySelectorAll('[data-g]').forEach(function(b){
      b.addEventListener('click', function(){ openG(b.dataset.g, b); });
    });
    gPrev.addEventListener('click', function(){ show(idx - 1); });
    gNext.addEventListener('click', function(){ show(idx + 1); });
    dlg.querySelectorAll('.gclose').forEach(function(b){ b.addEventListener('click', function(){ dlg.close(); }); });
    dlg.addEventListener('click', function(e){ if (e.target === dlg) dlg.close(); });
    dlg.addEventListener('keydown', function(e){
      if (!cur || cur.p.length < 2) return;
      if (e.key === 'ArrowLeft'){ show(idx - 1); e.preventDefault(); }
      if (e.key === 'ArrowRight'){ show(idx + 1); e.preventDefault(); }
    });
    dlg.addEventListener('close', function(){
      document.documentElement.style.overflow = '';
      gImg.removeAttribute('src');
      if (opener) opener.focus();
    });
  }

  /* 스크롤 등장: 보이는 상태 그대로, 아래쪽 요소만 살짝 내려 두었다가 올림 */
  if (reduce || !('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('js');
  var io = new IntersectionObserver(function(es){
    es.forEach(function(e){ if (e.isIntersecting){ e.target.classList.remove('down'); io.unobserve(e.target); } });
  }, {rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.rise').forEach(function(el){
    if (el.getBoundingClientRect().top > window.innerHeight * 0.92){ el.classList.add('down'); io.observe(el); }
  });
})();
