'use strict';

let stars = document.querySelector('.stars');
let base = document.querySelector('.base');
let moon = document.querySelector('.moon');
let planet1 = document.querySelector('.planet1');
let planet2 = document.querySelector('.planet2');
let crystal1 = document.querySelector('.crystal1');
let crystal2 = document.querySelector('.crystal2');
let usagi = document.querySelector('.usagi');

window.addEventListener('scroll', function () {
  let value = window.scrollY;
  stars.style.bottom = value * 0.05 + '%';
  moon.style.bottom = value * -0.5 + 'px';
  planet1.style.bottom = value * 0.05 + '%';
  planet2.style.bottom = value * 0.05 + '%';
  crystal1.style.right = value * 0.075 + 'px';
  crystal2.style.right = value * 0.075 + 'px';
  usagi.style.bottom = value * 0.05 + '%';
});

const toggleMenu = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const iconMenu = document.querySelector('.fa-star');
const section = document.querySelector('.main');

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
