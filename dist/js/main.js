"use strict";function initAnimate(){var e=document.querySelectorAll(".js-animate");window.addEventListener("load",function(){e.forEach(function(e){setTimeout(function(){e.classList.add("active")},1e4)})})}function initHeaderScroll(){var t=document.querySelector(".header");window.addEventListener("scroll",function(e){80<=window.pageYOffset?t.classList.add("header-scroll"):t.classList.remove("header-scroll")})}function preventDefaultLinks(){document.querySelectorAll('a[href^="#"]').forEach(function(e){e.addEventListener("click",function(e){e.preventDefault()})})}function initMenuScroll(){function t(){var e=this.getAttribute("href"),t=document.querySelector(e);if("#"!==e){var n=t.offsetTop;window.scrollTo({top:n,behavior:"smooth"})}}document.querySelectorAll('a[href^="#"]').forEach(function(e){e.addEventListener("click",t)})}function initMobileMenu(){var t=document.querySelector(".mobile"),n=document.querySelector(".menu");function e(e){("click"===e.type||"resize"===e.type&&769<window.innerWidth)&&(n.classList.remove("menu-mobile"),document.body.classList.remove("no-scroll"),t.classList.remove("close"))}t.addEventListener("click",function(){n.classList.toggle("menu-mobile"),document.body.classList.toggle("no-scroll"),t.classList.toggle("close")}),n.addEventListener("click",e),window.addEventListener("resize",e)}initAnimate(),initHeaderScroll(),preventDefaultLinks(),initMenuScroll(),initMobileMenu();var animate=document.querySelectorAll(".js-animate");function handleAnimate(){animate.forEach(function(e,t){setTimeout(function(){e.classList.add("active")},500*t)})}function initSlide(){var e=document.querySelectorAll(".slide__item"),t=document.querySelectorAll(".slide-nav__link"),n=document.querySelectorAll(".slide__item");t[0].classList.add("active"),n[0].classList.add("active");var i=0;function o(e){t.forEach(function(e){e.classList.remove("active")}),n.forEach(function(e){e.classList.remove("active"),e.classList.remove("animation-left"),e.classList.remove("animation-right")}),t[e].classList.add("active"),n[e].classList.add("active"),0!==e&&(e===n.length-1||i<e)?n[e].classList.add("animation-right"):n[e].classList.add("animation-left"),l=i=e}t.forEach(function(e,t){e.addEventListener("click",function(){o(t)})});var c,l=0;function a(){c=setInterval(function(){++l>=t.length&&(l=0),o(l)},5e3)}e.forEach(function(e){e.addEventListener("mouseover",function(){clearInterval(c)}),e.addEventListener("mouseout",function(){a()})}),a()}function initSoftScroll(){var e=document.querySelectorAll(".js-scroll");function t(){e.forEach(function(e){e.getBoundingClientRect().top-.55*window.innerHeight<0&&e.classList.add("active")})}t(),window.addEventListener("scroll",t)}window.addEventListener("load",handleAnimate),initSlide(),initSoftScroll();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGUuanMiLCJoZWFkZXJTY3JvbGwuanMiLCJsaW5rcy5qcyIsIm1lbnVTY3JvbGwuanMiLCJtb2JpbGUuanMiLCJvbkxvYWQuanMiLCJzbGlkZS5qcyIsInNvZnRTY3JvbGwuanMiXSwibmFtZXMiOlsiaW5pdEFuaW1hdGUiLCJqc0FuaW1hdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZm9yRWFjaCIsIml0ZW0iLCJzZXRUaW1lb3V0IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5pdEhlYWRlclNjcm9sbCIsImhlYWRlciIsInF1ZXJ5U2VsZWN0b3IiLCJldmVudCIsInBhZ2VZT2Zmc2V0IiwicmVtb3ZlIiwicHJldmVudERlZmF1bHRMaW5rcyIsImxpbmsiLCJwcmV2ZW50RGVmYXVsdCIsImluaXRNZW51U2Nyb2xsIiwic2Nyb2xsTGluayIsImhyZWYiLCJ0aGlzIiwiZ2V0QXR0cmlidXRlIiwiaW50ZXJuYWxTZWN0aW9uIiwic2VjdGlvblRvcCIsIm9mZnNldFRvcCIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJpbml0TW9iaWxlTWVudSIsIm1vYmlsZSIsIm1lbnUiLCJjbG9zZU1vYmlsZU1lbnUiLCJ0eXBlIiwiaW5uZXJXaWR0aCIsImJvZHkiLCJ0b2dnbGUiLCJhbmltYXRlIiwiaGFuZGxlQW5pbWF0ZSIsImluZGV4IiwiaW5pdFNsaWRlIiwic2xpZGVJdGVtIiwic2xpZGVOYXYiLCJzbGlkZVBhZ2UiLCJsYXN0QWN0aXZlIiwic2xpZGVOYXZDbGljayIsInBhZ2UiLCJsZW5ndGgiLCJjb3VudGVyU2xpZGUiLCJhdXRvU2xpZGUiLCJpbml0QXV0b1NsaWRlIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiaW5pdFNvZnRTY3JvbGwiLCJqc1Njcm9sbCIsInNvZnRTY3JvbGwiLCJzZWN0aW9uIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaW5uZXJIZWlnaHQi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RUFBQSxHQUVBSCxFQUFBRyxJQUNBLEtBR0FQLEVBQUFyQyxRQUFBLFNBQUFDLEdBQ0FBLEVBQUFGLGlCQUFBLFlBQUEsV0FDQWlELGNBQUFILEtBRUE1QyxFQUFBRixpQkFBQSxXQUFBLFdBQ0ErQyxRQUlBQSxJQy9EQSxTQUFBRyxpQkFFQSxJQUFBQyxFQUFBdEQsU0FBQUMsaUJBQUEsY0FFQSxTQUFBc0QsSUFDQUQsRUFBQWxELFFBQUEsU0FBQW9ELEdBQ0FBLEVBQUFDLHdCQUFBOUIsSUFDQSxJQUFBekIsT0FBQXdELFlBQ0EsR0FDQUYsRUFBQWpELFVBQUFDLElBQUEsWUFLQStDLElBRUFyRCxPQUFBQyxpQkFBQSxTQUFBb0QsR0ZOQXJELE9BQUFDLGlCQUFBLE9BQUFtQyxlQ3dEQUUsWUMvQ0FhIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBpbml0QW5pbWF0ZSgpIHtcclxuICBjb25zdCBqc0FuaW1hdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtYW5pbWF0ZScpO1xyXG5cclxuICBmdW5jdGlvbiBhbmltYXRlKCkge1xyXG4gICAganNBbmltYXRlLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgfSwgMTAwMDApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGFuaW1hdGUpO1xyXG59XHJcblxyXG5pbml0QW5pbWF0ZSgpOyIsImZ1bmN0aW9uIGluaXRIZWFkZXJTY3JvbGwoKSB7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVTY3JvbGwoZXZlbnQpIHtcclxuICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPj0gODApIHtcclxuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1zY3JvbGwnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci1zY3JvbGwnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG59XHJcblxyXG5pbml0SGVhZGVyU2Nyb2xsKCk7IiwiZnVuY3Rpb24gcHJldmVudERlZmF1bHRMaW5rcygpIHtcclxuXHJcbiAgY29uc3QgaW50ZXJuYWxMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl49XCIjXCJdJyk7XHJcblxyXG4gIGludGVybmFsTGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgfSlcclxufVxyXG5cclxucHJldmVudERlZmF1bHRMaW5rcygpOyIsImZ1bmN0aW9uIGluaXRNZW51U2Nyb2xsKCkge1xyXG4gIGNvbnN0IGludGVybmFsTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZePVwiI1wiXScpO1xyXG5cclxuICBmdW5jdGlvbiBzY3JvbGxMaW5rKCkge1xyXG4gICAgY29uc3QgaHJlZiA9IHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICBjb25zdCBpbnRlcm5hbFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhyZWYpO1xyXG4gICAgaWYgKGhyZWYgIT09ICcjJykge1xyXG4gICAgICBjb25zdCBzZWN0aW9uVG9wID0gaW50ZXJuYWxTZWN0aW9uLm9mZnNldFRvcDtcclxuICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICB0b3A6IHNlY3Rpb25Ub3AsXHJcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW50ZXJuYWxMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2Nyb2xsTGluayk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmluaXRNZW51U2Nyb2xsKCk7IiwiZnVuY3Rpb24gaW5pdE1vYmlsZU1lbnUoKSB7XHJcbiAgY29uc3QgbW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZScpO1xyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVNb2JpbGVNZW51KCkge1xyXG4gICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LW1vYmlsZScpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCduby1zY3JvbGwnKTtcclxuICAgIG1vYmlsZS5jbGFzc0xpc3QudG9nZ2xlKCdjbG9zZScpO1xyXG4gIH1cclxuXHJcbiAgbW9iaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTW9iaWxlTWVudSk7XHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlTW9iaWxlTWVudShldmVudCkge1xyXG4gICAgaWYoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJykge1xyXG4gICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtbW9iaWxlJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJyk7XHJcbiAgICAgIG1vYmlsZS5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zZScpO1xyXG4gICAgfSBlbHNlIGlmKGV2ZW50LnR5cGUgPT09ICdyZXNpemUnKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY5KSB7XHJcbiAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtbW9iaWxlJyk7XHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpO1xyXG4gICAgICAgICAgbW9iaWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3NlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9iaWxlTWVudSk7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNsb3NlTW9iaWxlTWVudSk7XHJcbn1cclxuXHJcbmluaXRNb2JpbGVNZW51KCk7IiwiY29uc3QgYW5pbWF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1hbmltYXRlJyk7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVBbmltYXRlKCkge1xyXG4gIGFuaW1hdGUuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICB9LCA1MDAgKiBpbmRleClcclxuICB9KTtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBoYW5kbGVBbmltYXRlKTsiLCJmdW5jdGlvbiBpbml0U2xpZGUoKSB7XHJcbiAgY29uc3Qgc2xpZGVJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlX19pdGVtJyk7XHJcbiAgY29uc3Qgc2xpZGVOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGUtbmF2X19saW5rJyk7XHJcbiAgY29uc3Qgc2xpZGVQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlX19pdGVtJyk7XHJcblxyXG4gIHNsaWRlTmF2WzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gIHNsaWRlUGFnZVswXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgbGV0IGxhc3RBY3RpdmUgPSAwO1xyXG4gIGZ1bmN0aW9uIHNsaWRlTmF2Q2xpY2soaW5kZXgpIHtcclxuICAgIHNsaWRlTmF2LmZvckVhY2goKGxpbmspID0+IHtcclxuICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gICAgc2xpZGVQYWdlLmZvckVhY2goKHBhZ2UpID0+IHtcclxuICAgICAgcGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgcGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRpb24tbGVmdCcpO1xyXG4gICAgICBwYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGlvbi1yaWdodCcpO1xyXG4gICAgfSk7XHJcbiAgICBzbGlkZU5hdltpbmRleF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICBzbGlkZVBhZ2VbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICBzbGlkZVBhZ2VbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGlvbi1sZWZ0Jyk7XHJcbiAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBzbGlkZVBhZ2UubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgIHNsaWRlUGFnZVtpbmRleF0uY2xhc3NMaXN0LmFkZCgnYW5pbWF0aW9uLXJpZ2h0Jyk7XHJcbiAgICB9IGVsc2UgaWYgKGxhc3RBY3RpdmUgPCBpbmRleCkge1xyXG4gICAgICAgIHNsaWRlUGFnZVtpbmRleF0uY2xhc3NMaXN0LmFkZCgnYW5pbWF0aW9uLXJpZ2h0Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNsaWRlUGFnZVtpbmRleF0uY2xhc3NMaXN0LmFkZCgnYW5pbWF0aW9uLWxlZnQnKVxyXG4gICAgfVxyXG5cclxuICAgIGxhc3RBY3RpdmUgPSBpbmRleDtcclxuICAgIGNvdW50ZXJTbGlkZSA9IGluZGV4O1xyXG4gIH1cclxuXHJcbiAgc2xpZGVOYXYuZm9yRWFjaCgobGluaywgaW5kZXgpID0+IHtcclxuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHNsaWRlTmF2Q2xpY2soaW5kZXgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGxldCBjb3VudGVyU2xpZGUgPSAwO1xyXG4gIGxldCBhdXRvU2xpZGU7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRBdXRvU2xpZGUoKSB7XHJcbiAgICBhdXRvU2xpZGUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGNvdW50ZXJTbGlkZSsrO1xyXG4gICAgICBpZihjb3VudGVyU2xpZGUgPj0gc2xpZGVOYXYubGVuZ3RoKSB7XHJcbiAgICAgICAgY291bnRlclNsaWRlID0gMDtcclxuICAgICAgfVxyXG4gICAgICBzbGlkZU5hdkNsaWNrKGNvdW50ZXJTbGlkZSk7XHJcbiAgICB9LCA1MDAwKTtcclxuICB9XHJcblxyXG4gIHNsaWRlSXRlbS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoYXV0b1NsaWRlKTtcclxuICAgIH0pXHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xyXG4gICAgICBpbml0QXV0b1NsaWRlKCk7XHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIGluaXRBdXRvU2xpZGUoKTtcclxufVxyXG5cclxuaW5pdFNsaWRlKCk7IiwiZnVuY3Rpb24gaW5pdFNvZnRTY3JvbGwoKSB7XHJcblxyXG4gIGNvbnN0IGpzU2Nyb2xsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXNjcm9sbCcpO1xyXG5cclxuICBmdW5jdGlvbiBzb2Z0U2Nyb2xsKCkge1xyXG4gICAganNTY3JvbGwuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCBzZWN0aW9uVG9wID0gc2VjdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbiAgICAgIGNvbnN0IGhhbGZXaW5kb3cgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjU1O1xyXG4gICAgICBpZiAoc2VjdGlvblRvcCAtIGhhbGZXaW5kb3cgPCAwKSB7XHJcbiAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHNvZnRTY3JvbGwoKTtcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNvZnRTY3JvbGwpO1xyXG59XHJcblxyXG5pbml0U29mdFNjcm9sbCgpOyJdfQ==