class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this._render();
  }

  _render() {
    this.innerHTML = `
    <article class="restaurant__item" tabindex="0">
      <img src="${this._restaurant.pictureId}" alt="Restaurant ${this._restaurant.name} berada di daerah ${this._restaurant.city}" class="restaurant__picture" />
      <figcaption>${this._restaurant.city}</figcaption>

      <div class="restaurant__info">
        <div class="restaurant__star">⭐️${this._restaurant.rating}</div>
        <h4 class="restaurant__name"> <a href="#">${this._restaurant.name}</a> </h4>
        <p class="restaurant__description">${this._restaurant.description}</p>
        <button aria-label="${this._restaurant.name}" onClick="window.location.href='${`/#/details/${this._restaurant.id}`}'">Read More</button>
      </div>
    </article>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
