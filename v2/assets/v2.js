(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 헤더: 스크롤하면 진하게 */
  var head = document.querySelector('.oh');
  function solid(){ if (head) head.classList.toggle('solid', window.scrollY > 40); }
  window.addEventListener('scroll', solid, {passive:true}); solid();

  /* 글자 채움(회색 → 흰색): 화면에 들어오면 한 번 */
  var fills = document.querySelectorAll('.fill-in');
  if (!reduce && 'IntersectionObserver' in window && fills.length){
    document.documentElement.classList.add('js2');
    var io = new IntersectionObserver(function(es){
      es.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add('go'); io.unobserve(e.target); } });
    }, {rootMargin:'0px 0px -10% 0px'});
    fills.forEach(function(el){ io.observe(el); });
  }

  /* 가로 줄: 화살표로 넘기기, 끝에 닿으면 화살표 숨김 */
  document.querySelectorAll('.rail').forEach(function(r){
    var t = r.querySelector('.track'), b = r.querySelector('.more');
    if (!t || !b) return;
    function upd(){ b.hidden = t.scrollLeft + t.clientWidth >= t.scrollWidth - 4; }
    b.addEventListener('click', function(){ t.scrollBy({left: t.clientWidth * 0.8, behavior: reduce ? 'auto' : 'smooth'}); });
    t.addEventListener('scroll', upd, {passive:true}); window.addEventListener('resize', upd); upd();
  });

  /* 질문 입력창 → 메일 쓰기 */
  document.querySelectorAll('form.ask').forEach(function(f){
    f.addEventListener('submit', function(e){
      e.preventDefault();
      var q = (f.querySelector('input').value || '').trim();
      var url = 'mailto:wldp2003@naver.com?subject=' + encodeURIComponent('[홈페이지 문의] 곽지예님께');
      if (q) url += '&body=' + encodeURIComponent(q);
      window.location.href = url;
    });
  });

  /* 프로젝트 목록: 가리킨 항목의 그림을 왼쪽 큰 화면에 */
  var feat = document.querySelector('.series .feat img');
  if (feat){
    document.querySelectorAll('.ep').forEach(function(ep){
      function on(){
        document.querySelectorAll('.ep.on').forEach(function(x){ x.classList.remove('on'); });
        ep.classList.add('on');
        var src = ep.getAttribute('data-img');
        if (src && feat.getAttribute('src') !== src){ feat.src = src; feat.alt = ep.getAttribute('data-alt') || ''; }
      }
      ep.addEventListener('mouseenter', on); ep.addEventListener('focus', on);
    });
  }
})();
