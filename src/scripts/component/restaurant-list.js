import './restaurant-item';

class RestaurantList extends HTMLElement {
  connectedCallback() {
    this.setAttribute('class', 'restaurant__list');
  }

  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this._render();
  }

  _render() {
    this.innerHTML = `
    <style>
		.card {
			background: #D0B8A8;
		</style>`;

    this._restaurants.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('restaurant-item');
      restaurantItemElement.restaurant = restaurant;

      this.appendChild(restaurantItemElement);
    });
  }
}

customElements.define('restaurant-list', RestaurantList);
