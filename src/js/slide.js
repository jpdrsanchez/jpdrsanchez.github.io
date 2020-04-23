function initSlide() {
  const slideItem = document.querySelectorAll('.slide__item');
  const slideNav = document.querySelectorAll('.slide-nav__link');
  const slidePage = document.querySelectorAll('.slide__item');

  slideNav[0].classList.add('active');
  slidePage[0].classList.add('active');

  let lastActive = 0;
  function slideNavClick(index) {
    slideNav.forEach((link) => {
      link.classList.remove('active');
    });
    slidePage.forEach((page) => {
      page.classList.remove('active');
      page.classList.remove('animation-left');
      page.classList.remove('animation-right');
    });
    slideNav[index].classList.add('active');
    slidePage[index].classList.add('active');

    if (index === 0) {
      slidePage[index].classList.add('animation-left');
    } else if (index === slidePage.length - 1) {
        slidePage[index].classList.add('animation-right');
    } else if (lastActive < index) {
        slidePage[index].classList.add('animation-right');
    } else {
        slidePage[index].classList.add('animation-left')
    }

    lastActive = index;
    counterSlide = index;
  }

  slideNav.forEach((link, index) => {
    link.addEventListener('click', () => {
      slideNavClick(index);
    });
  });

  let counterSlide = 0;
  let autoSlide;

  function initAutoSlide() {
    autoSlide = setInterval(() => {
      counterSlide++;
      if(counterSlide >= slideNav.length) {
        counterSlide = 0;
      }
      slideNavClick(counterSlide);
    }, 3000);
  }

  slideItem.forEach(item => {
    item.addEventListener('mouseover', () => {
      clearInterval(autoSlide);
    })
    item.addEventListener('mouseout', () => {
      initAutoSlide();
    })
  })

  initAutoSlide();
}

initSlide();