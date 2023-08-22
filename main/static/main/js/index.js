let navToggle = document.querySelector('.nav__toggle');
let navWrapper = document.querySelector('.nav__wrapper');

const servicesDropdown = document.getElementById('services-dropdown');
const toggleService = document.getElementById('nav-services');

navToggle.addEventListener('click', function () {
  if (navWrapper.classList.contains('active')) {
    this.setAttribute('aria-expanded', 'false');
    this.setAttribute('aria-label', 'menu');
    navWrapper.classList.remove('active');
  } else {
    navWrapper.classList.add('active');
    this.setAttribute('aria-label', 'close menu');
    this.setAttribute('aria-expanded', 'true');
  }
});

const hideDropDown = () => {
  const classList = servicesDropdown.classList;
  if (classList.contains('dropdown-active')) {
    classList.remove('dropdown-active');
  } else {
    classList.add('dropdown-active');
  }
};

toggleService.addEventListener('click', (event) => {
  event.stopPropagation();
  hideDropDown();
});

window.onclick = () => {
  if (servicesDropdown.classList.contains('dropdown-active')) {
    servicesDropdown.classList.remove('dropdown-active');
  }
};
