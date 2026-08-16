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

  /* ---------- 灯箱：点击图库图片放大 ---------- */
  var lightbox = document.querySelector('.lightbox');
  var lightboxImg = lightbox ? lightbox.querySelector('img') : null;
  if (lightbox && lightboxImg) {
    document.addEventListener('click', function (e) {
      var img = e.target.closest('[data-lightbox]');
      if (img) {
        lightboxImg.src = img.getAttribute('src');
        lightboxImg.alt = img.getAttribute('alt') || '';
        lightbox.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      }
    });
    function closeLightbox() {
      lightbox.classList.remove('is-open');
      document.body.style.overflow = '';
    }
    lightbox.addEventListener('click', function (e) {
      if (e.target !== lightboxImg) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLightbox();
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
