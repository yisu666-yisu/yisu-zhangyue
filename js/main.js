/* 一粟 · 张悦 — 个人网站交互脚本 */
(function () {
  'use strict';

  /* ---------- 导航：滚动后变实底（仅首页 hero 需要） ---------- */
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (!header) return;
    var y = window.scrollY || window.pageYOffset;
    if (document.body.classList.contains('is-home')) {
      header.classList.toggle('site-header--solid', y > 40);
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- 移动端菜单 ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = document.body.classList.toggle('menu-open');
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // 点击导航项后收起
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        document.body.classList.remove('menu-open');
        nav.classList.remove('is-open');
      }
    });
  }

  /* ---------- 灯箱：点击图库图片放大，左右切换 ---------- */
  var lightbox = document.querySelector('.lightbox');
  var lightboxImg = lightbox ? lightbox.querySelector('img') : null;
  if (lightbox && lightboxImg) {
    var items = Array.prototype.slice.call(document.querySelectorAll('[data-lightbox]'));
    var current = -1;

    // 注入左右切换按钮与计数
    var prevBtn = document.createElement('button');
    prevBtn.className = 'lightbox__nav lightbox__nav--prev';
    prevBtn.setAttribute('aria-label', '上一张');
    prevBtn.innerHTML = '&#8249;';
    var nextBtn = document.createElement('button');
    nextBtn.className = 'lightbox__nav lightbox__nav--next';
    nextBtn.setAttribute('aria-label', '下一张');
    nextBtn.innerHTML = '&#8250;';
    var counter = document.createElement('div');
    counter.className = 'lightbox__count';
    lightbox.appendChild(prevBtn);
    lightbox.appendChild(nextBtn);
    lightbox.appendChild(counter);

    function show(i) {
      if (!items.length) return;
      current = (i + items.length) % items.length;
      lightboxImg.src = items[current].getAttribute('src');
      lightboxImg.alt = items[current].getAttribute('alt') || '';
      counter.textContent = (current + 1) + ' / ' + items.length;
    }
    function open(i) {
      show(i);
      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
    function closeLightbox() {
      lightbox.classList.remove('is-open');
      document.body.style.overflow = '';
    }
    function step(d) {
      if (!lightbox.classList.contains('is-open')) return;
      show(current + d);
    }

    document.addEventListener('click', function (e) {
      var img = e.target.closest('[data-lightbox]');
      if (img) open(items.indexOf(img));
    });
    prevBtn.addEventListener('click', function (e) { e.stopPropagation(); step(-1); });
    nextBtn.addEventListener('click', function (e) { e.stopPropagation(); step(1); });
    lightbox.addEventListener('click', function (e) {
      if (e.target !== lightboxImg) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'ArrowRight') step(1);
    });
  }

  /* ---------- 淡入动画 ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
