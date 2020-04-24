function initAnimate() {
  const jsAnimate = document.querySelectorAll('.js-animate');

  function animate() {
    jsAnimate.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('active');
      }, 1000 * (index + 1));
    });
  }
  animate();
}

initAnimate();