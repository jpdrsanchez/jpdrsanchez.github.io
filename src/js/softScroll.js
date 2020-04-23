function initSoftScroll() {

  const jsScroll = document.querySelectorAll('.js-scroll');

  function softScroll() {
    jsScroll.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const halfWindow = window.innerHeight * 0.55;
      if (sectionTop - halfWindow < 0) {
        section.classList.add('active');
      }
    })
  }

  softScroll();

  window.addEventListener('scroll', softScroll);
}

initSoftScroll();