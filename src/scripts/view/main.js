/* eslint-disable max-len */
import DataSource from '../data/data-source';
import '../component/restaurant-list';

const main = () => {
  // Hamburger
  const hamburgerElement = document.querySelector('.app-bar__menu');
  const navElement = document.querySelector('.nav');
  const closeNavElementArea = document.querySelectorAll('.hero, main');
  const toggleNavElement = () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('close');
  };
  const closeNavElement = () => {
    navElement.classList.remove('open');
    hamburgerElement.classList.remove('close');
  };

  hamburgerElement.addEventListener('click', toggleNavElement);
  closeNavElementArea.forEach((element) => element.addEventListener('click', closeNavElement));

  // Back to Top
  const backToTopElement = document.querySelector('.back-to-top');
  backToTopElement.addEventListener('click', () => window.scrollTo(0, 0));

  // Restaurant ELement
  const restaurantListElement = document.querySelector('restaurant-list');
  restaurantListElement.restaurants = DataSource.getAllRestaurant();

};

export default main;
