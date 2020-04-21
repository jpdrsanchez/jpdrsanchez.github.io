const animate = document.querySelectorAll('.js-animate');

function handleAnimate() {
  animate.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('active')
    }, 500 * index)
  });
}

window.addEventListener('load', handleAnimate);