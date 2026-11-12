/* Small, dependency-free enhancements. The page remains usable without JavaScript. */
(() => {
  'use strict';

  const yearNode = document.getElementById('current-year');
  if (yearNode) yearNode.textContent = String(new Date().getFullYear());

  const progressFill = document.getElementById('scroll-progress-fill');
  let isTicking = false;
  function updateProgress() {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const percent = total > 0 ? Math.max(0, Math.min(100, (window.scrollY / total) * 100)) : 0;
    if (progressFill) progressFill.style.width = `${percent}%`;
    isTicking = false;
  }
  window.addEventListener('scroll', () => {
    if (!isTicking) {
      window.requestAnimationFrame(updateProgress);
      isTicking = true;
    }
  }, { passive: true });
  updateProgress();

  const sectionIds = ['about', 'experience', 'work', 'contact'];
  const menuLinks = [...document.querySelectorAll('[data-section-link], .mobile-links a')];
  function activateSection(id) {
    menuLinks.forEach((link) => {
      const active = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible.length) activateSection(visible[0].target.id);
    }, { rootMargin: '-22% 0px -57% 0px', threshold: 0 });
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
  }
  menuLinks.forEach((link) => link.addEventListener('click', () => {
    const id = link.getAttribute('href').slice(1);
    activateSection(id);
  }));

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!mediaQuery.matches && window.matchMedia('(pointer: fine)').matches) {
    const glow = document.querySelector('.pointer-glow');
    if (glow) {
      window.addEventListener('pointermove', (event) => {
        glow.style.setProperty('--pointer-x', `${event.clientX}px`);
        glow.style.setProperty('--pointer-y', `${event.clientY}px`);
      }, { passive: true });
    }
    document.querySelectorAll('.hover-spotlight').forEach((card) => {
      card.addEventListener('pointermove', (event) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--card-x', `${event.clientX - rect.left}px`);
        card.style.setProperty('--card-y', `${event.clientY - rect.top}px`);
      }, { passive: true });
    });
  }
})();
