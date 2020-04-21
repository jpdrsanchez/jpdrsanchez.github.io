const internalLinks = document.querySelectorAll('a[href^="#"]');

function scrollLink(event) {
  const href = this.getAttribute('href');
  const internalSections = document.querySelector(href);
  const sectionTop = internalSections.offsetTop;
  window.scrollTo({
    top: sectionTop,
    behavior: "smooth",
  });
}

internalLinks.forEach(link => {
  link.addEventListener('click', scrollLink);
})