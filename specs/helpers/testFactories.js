import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteRestaurantsIdb from '../../src/scripts/data/favoriterestaurants-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.Init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantsIdb,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
