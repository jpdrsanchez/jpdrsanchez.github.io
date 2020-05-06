export default function initHeaderScroll() {
  const header = document.querySelector('.header');

  function handleScroll(event) {
    if (window.pageYOffset >= 80) {
      header.classList.add('header-scroll');
    } else {
        header.classList.remove('header-scroll');
    }
  }

  window.addEventListener('scroll', handleScroll);
}