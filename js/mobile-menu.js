const opacityMenu = () => {
  const main = document.querySelector('.main');
  const footer = document.querySelector('.footer');
  main.style.opacity = '0.33';
  footer.style.opacity = '0.33';
}

const opacityVisibleMenu = () => {
  const main = document.querySelector('.main');
  const footer = document.querySelector('.footer');
  main.style.opacity = '1';
  footer.style.opacity = '1';
}

const menuToggle = document.querySelector('.header__menu-icon');
const mobileNavContainer = document.querySelector('.header__mobile-nav');

menuToggle.onclick = () => {
    menuToggle.classList.toggle('header__menu-icon-active');
    mobileNavContainer.classList.toggle('header__mobile-nav-active');
    
    if (menuToggle.classList.contains('header__menu-icon-active')) {
      disabledScroll();
    }
    else {
      enabledScroll();
    }
};  

const resetNav = () => {
  menuToggle.classList.remove('header__menu-icon-active');
  mobileNavContainer.classList.remove('header__mobile-nav-active');
  enabledScroll();

}
window.addEventListener('resize', resetNav)


const disabledScroll = () => {
  document.body.style.paddingRight = `${getScrollbarWidth()}px`;
  document.body.style.overflow = 'hidden';
  opacityMenu();

}
const enabledScroll = () => {
  document.body.style.overflow = 'visible';
  document.body.style.paddingRight = '';
  opacityVisibleMenu();

}

const getScrollbarWidth = () => {
  const outer = document.createElement('div');

  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  outer.style.width = '50px';
  outer.style.height = '50px';
  outer.style.overflow = 'scroll';
  outer.style.visibility = 'hidden';

  document.body.appendChild(outer);
  const scrollBarWidth = outer.offsetWidth - outer.clientWidth;
  document.body.removeChild(outer);

  return scrollBarWidth;
}