import { createElement } from '../render';

function createNewRoutePointListTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

export default class RoutePointList {
  getTemplate() {
    return createNewRoutePointListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
