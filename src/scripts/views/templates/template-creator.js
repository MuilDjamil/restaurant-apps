import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = ({
  id,
  pictureId,
  rating,
  name,
  city,
  description,
}) => `
  <article class="restaurant" tabindex="0">
  <div class="restaurant-image lazyload" data-bg="${CONFIG.BASE_IMAGE_URL}/small/${pictureId}">
    <div class="rating">
      <h3>⭐${rating}</h3>
    </div>
  </div>
  <h3><a href="#/detail/${id}" class="restaurant-name">${name} - ${city}</a></h3>
  <p class="restaurant-description">${description}</p>
  </article>
`;

const createMenuItemTemplate = ({ name }) => `<p class="item">${name}</p>`;

const createCategoriesItemTemplate = ({ name }) => `<span class="categories"><p>${name}</p></span>`;

const createCustReviewItemTemplate = ({ name, review, date }) => `
  <div class="review">  
    <h3>${name}</h3>
    <p class="date">${date}</p>
    <p>${review}</p>
  </div>
`;

const createRestaurantDetailTemplate = ({
  pictureId,
  rating,
  name,
  address,
  categories,
  city,
  description,
  menus,
  customerReviews,
}) => `
  <div class="restaurant-image" style="background-image: url('${CONFIG.BASE_IMAGE_URL}/small/${pictureId}')">
    <div class="rating">
      <h3>⭐${rating}</h3>
    </div>
  </div>
  <div class="restaurant-info" tabindex="0">
    <h2>${name}</h2>
    <p class="address"><span class="material-icons">location_city</span>${address}, ${city}</p>
    ${categories.map(createCategoriesItemTemplate).join(' ')}
    <p>${description}</p>
  </div>
  <div class="menu" tabindex="0">
    <h2 class="menu-header">Menu</h2>
    <div class="menu-foods">
      <h3>Foods</h3>
      ${menus.foods.map(createMenuItemTemplate).join(' ')}
    </div>
    <div class="menu-drinks">
      <h3>Drinks</h3>
      ${menus.drinks.map(createMenuItemTemplate).join(' ')}
    </div>
  </div>
  <div class="customer-review" tabindex="0">
    <h2>Customer Review</h2>
    ${customerReviews.map(createCustReviewItemTemplate).join(' ')}
  </div>
  <div id="likeButtonContainer"></div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
