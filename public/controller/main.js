const sideMenuInput = document.querySelector('#side-menu-input');
const sideMenuToggle = document.querySelector('#menu-toggle');
const bodyElement = document.querySelector('body');
const sideMenu = document.querySelector('#menu');
const firstSectionElement = document.querySelector('section:first-of-type');

let sideStatus = sideMenu.style.transform;

sideMenuInput.addEventListener('change', () => {
  sideStatus = sideMenu.style.transform;
  if (sideStatus === 'none') {
    sideMenu.style.transform = 'translate(100%, 0)';
    bodyElement.classList.remove('no-scroll');
  } else {
    sideMenu.style.transform = 'none';
    bodyElement.classList.add('no-scroll');
  }
});
firstSectionElement.addEventListener('click', (e) => {
  sideMenuInput.checked = false;
  sideMenu.style.transform = 'translate(100%, 0)';
  bodyElement.classList.remove('no-scroll');
});
