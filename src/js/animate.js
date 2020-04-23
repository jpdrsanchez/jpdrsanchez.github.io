function initAnimate() {
  const jsAnimate = document.querySelectorAll('.js-animate');

  function animate() {
    jsAnimate.forEach((item) => {
      setTimeout(() => {
        item.classList.add('active');
      }, 10000);
    });
  }

  window.addEventListener('load', animate);
}

initAnimate();