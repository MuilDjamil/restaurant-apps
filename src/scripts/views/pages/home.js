/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import RestaurantApi from '../../data/restaurant-api';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <h2 class="header">Eatery List</h2>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantApi.listRestaurants();
    const restaurantsElement = document.querySelector('.restaurants');

    restaurants.forEach((restaurant) => {
      restaurantsElement.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
