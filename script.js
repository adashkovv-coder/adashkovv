document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Плавное появление секций при скролле (Scroll Reveal)
  // Находим все секции, которые нужно анимировать
  const sections = document.querySelectorAll('section, footer');
  
  // Добавляем им начальный класс для скрытия
  sections.forEach(sec => sec.classList.add('reveal'));

  // Настраиваем "наблюдатель" за скроллом
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Секция появится, когда покажется на 15%
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Анимируем только один раз
      }
    });
  }, observerOptions);

  // Запускаем наблюдение за каждой секцией
  sections.forEach(sec => observer.observe(sec));

  // 2. Легкий параллакс эффект для Hero-секции (опционально)
  window.addEventListener('scroll', () => {
    const heroTitle = document.querySelector('.hero__title');
    if (heroTitle) {
      let scroll = window.scrollY;
      // Двигаем текст чуть медленнее при скролле
      heroTitle.style.transform = `translateY(${scroll * 0.3}px)`;
      heroTitle.style.opacity = 1 - (scroll / 600); // Плавно растворяем
    }
  });

});
