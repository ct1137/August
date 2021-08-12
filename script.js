const menuIcon = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

menuIcon.addEvenetListener('click', () => {
  menuIcon.classList.toggle('change');
});
