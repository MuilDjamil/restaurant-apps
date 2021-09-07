Feature('Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
  I.click(locate('a.restaurant-name').first());
  I.click('#likeButton');
});

Scenario('Unliking a restaurant', async ({ I }) => {
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant');

  I.seeElement('a.restaurant-name');
  I.click('a.restaurant-name');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('.restaurant');
});
