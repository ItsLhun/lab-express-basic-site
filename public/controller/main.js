const sideMenuInput = document.querySelector('#side-menu-input');
const sideMenuToggle = document.querySelector('#menu-toggle');
const bodyElement = document.querySelector('body');
const sideMenu = document.querySelector('#menu');
let sideStatus = sideMenu.style.transform;

sideMenuInput.addEventListener('change', () => {
  // sideMenu.classList.toggle('sidebar-visible');
  //sideMenu.classList.add('sidebar-visible');
  sideStatus = sideMenu.style.transform;
  if (sideStatus === 'none') {
    sideMenu.style.transform = 'translate(100%, 0)';
    bodyElement.classList.remove('no-scroll');
  } else {
    sideMenu.style.transform = 'none';
    bodyElement.classList.add('no-scroll');
  }
});
