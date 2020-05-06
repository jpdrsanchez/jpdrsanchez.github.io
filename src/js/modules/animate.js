export default function initAnimations() {
  const animations = document.querySelectorAll('[data-animation]');

  function animeItems() {
    animations.forEach((item) => {
      const time = item.dataset.animation;
      setTimeout(() => {
        item.classList.add('active');
      }, time);
    });
  }

  function visibility() {
    if (typeof document.visibilityState !== "undefined") {
      if (document.visibilityState === "visible") {
        animeItems();
      }
    } else {
      animeItems();
    }
  }

  document.addEventListener('visibilitychange', visibility);
}