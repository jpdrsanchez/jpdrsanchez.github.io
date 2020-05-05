export default function initMobileMenu() {
  const mobile = document.querySelector('.mobile');
  const menu = document.querySelector('.menu');

  function handleMobileMenu() {
    menu.classList.toggle('menu-mobile');
    document.body.classList.toggle('no-scroll');
    mobile.classList.toggle('close');
  }

  mobile.addEventListener('click', handleMobileMenu);

  function closeMobileMenu(event) {
    if(event.type === 'click') {
      menu.classList.remove('menu-mobile');
      document.body.classList.remove('no-scroll');
      mobile.classList.remove('close');
    } else if(event.type === 'resize') {
        if (window.innerWidth > 769) {
          menu.classList.remove('menu-mobile');
          document.body.classList.remove('no-scroll');
          mobile.classList.remove('close');
        }
    }
  }

  menu.addEventListener('click', closeMobileMenu);
  window.addEventListener('resize', closeMobileMenu);
}