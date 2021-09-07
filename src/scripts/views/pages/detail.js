import UrlParser from '../../routes/url-parser';
import RestaurantApi from '../../data/restaurant-api';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantsIdb from '../../data/favoriterestaurants-idb';

const Detail = {
  async render() {
    return `
      <div id="detail" class="restaurant-detail"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantApi.detailRestaurant(url.id);
    const restaurantElement = document.querySelector('#detail');
    restaurantElement.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonPresenter.Init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantsIdb,
      restaurant: {
        id: restaurant.id,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        name: restaurant.name,
        city: restaurant.city,
        description: restaurant.description,
      },
    });
  },
};

export default Detail;
