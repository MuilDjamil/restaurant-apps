const assert = require('assert');

Feature('Liking Restaurant');

Scenario('Liking a restaurant', async ({ I }) => {
  I.amOnPage('/#/favorite');
  I.dontSeeElement('.restaurant');

  I.amOnPage('/');

  I.seeElement('a.restaurant-name');

  const firstFilm = locate('a.restaurant-name').first();
  const firstFilmTitle = await I.grabTextFrom(firstFilm);
  I.click(firstFilm);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant .restaurant-name');
  const likedFilmTitle = await I.grabTextFrom('.restaurant .restaurant-name');

  assert.strictEqual(firstFilmTitle, likedFilmTitle);
});
