'use strict';

let stars = document.querySelector('.stars');
let base = document.querySelector('.base');
let moon = document.querySelector('.moon');
let planet1 = document.querySelector('.planet1');
let planet2 = document.querySelector('.planet2');
let crystal1 = document.querySelector('.crystal1');
let crystal2 = document.querySelector('.crystal2');
let usagi = document.querySelector('.usagi');
const toggleMenu = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const iconMenu = document.querySelector('.fa-star');
const section = document.querySelector('.main');
const menuButtons = document.querySelectorAll('.btn-menu');
const homeMenu = document.querySelector('.home');
const scrollUp = document.querySelector('.scroll-up');

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  stars.style.bottom = value * 0.05 + '%';
  moon.style.bottom = value * -0.5 + 'px';
  planet1.style.bottom = value * 0.05 + '%';
  planet2.style.bottom = value * 0.05 + '%';
  usagi.style.bottom = value * 0.05 + '%';
});

toggleMenu.addEventListener('click', () => {
  toggleMenu.classList.toggle('active');
  navigation.classList.toggle('active');
  activeMenu();
});

const activeMenu = () => {
  if (toggleMenu.classList.contains('active')) {
    section.style.visibility = 'hidden';
  } else section.style.visibility = 'visible';
};

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    scrollUp.classList.add('scroll-active');
  } else {
    scrollUp.classList.remove('scroll-active');
  }
});

const resetMenu = () => {
  navigation.classList.remove('active');
  section.style.visibility = 'visible';
  toggleMenu.classList.remove('active');
};

menuButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    homeMenu.classList.remove('active');
    btn.classList.add('active');
    resetMenu();
  });
  scrollUp.addEventListener('click', () => {
    btn.classList.remove('active');
    homeMenu.classList.add('active');
  });
});
