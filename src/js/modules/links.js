export default function preventDefaultLinks() {

  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
    });
  })
}