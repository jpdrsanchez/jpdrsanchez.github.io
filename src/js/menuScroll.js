function initMenuScroll() {
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  function scrollLink() {
    const href = this.getAttribute('href');
    const internalSection = document.querySelector(href);
    if (href !== '#') {
      const sectionTop = internalSection.offsetTop;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  }

  internalLinks.forEach((link) => {
    link.addEventListener('click', scrollLink);
  });
}

initMenuScroll();