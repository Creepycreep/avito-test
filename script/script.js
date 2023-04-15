document.addEventListener('DOMContentLoaded', () => {
  let menuBtn = document.querySelector('.ham'),
    navbar = document.querySelector('.menu-items'),
    svg = document.querySelector('.main-info_bg');

  niceSvg();
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('ham_active');
    navbar.classList.toggle('menu-items_active');
  })

  function niceSvg() {
    if (window.innerWidth <= 1180 && window.innerWidth > 490) {
      svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
    } else if (window.innerWidth <= 490) {
      svg.setAttribute('preserveAspectRatio', 'none')
    } else if (window.innerWidth > 1181) {
      svg.setAttribute('preserveAspectRatio', 'none');
    }
  }

  window.addEventListener('resize', () => {
    niceSvg();
  })


});