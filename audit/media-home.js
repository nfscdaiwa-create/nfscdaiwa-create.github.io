(() => {
  const carousel = document.querySelector('#facilities .media-carousel');
  if (!carousel) return;
  const slides = [...carousel.querySelectorAll('.media-slide')];
  const counter = carousel.querySelector('.media-count');
  const controls = carousel.querySelector('.media-controls');
  let active = 0;

  function show(next) {
    slides[active].querySelector('video')?.pause();
    active = (next + slides.length) % slides.length;
    slides.forEach((slide, index) => {
      slide.hidden = index !== active;
      slide.setAttribute('aria-hidden', String(index !== active));
    });
    slides[active].querySelector('.media-visual').appendChild(controls);
    counter.textContent = `${String(active + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
  }

  carousel.querySelector('.media-prev').addEventListener('click', () => show(active - 1));
  carousel.querySelector('.media-next').addEventListener('click', () => show(active + 1));
  carousel.querySelectorAll('.media-video-visual').forEach(stage => {
    const video = stage.querySelector('video');
    stage.querySelector('.media-video-play').addEventListener('click', () => video.play());
    video.addEventListener('play', () => stage.classList.add('is-playing'));
    video.addEventListener('pause', () => stage.classList.remove('is-playing'));
  });
  carousel.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); show(active - 1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); show(active + 1); }
  });

  let touchX = null;
  carousel.addEventListener('touchstart', event => { touchX = event.changedTouches[0]?.clientX ?? null; }, {passive:true});
  carousel.addEventListener('touchend', event => {
    if (touchX === null) return;
    const delta = (event.changedTouches[0]?.clientX ?? touchX) - touchX;
    touchX = null;
    if (Math.abs(delta) > 55) show(active + (delta < 0 ? 1 : -1));
  }, {passive:true});

  show(0);

})();
