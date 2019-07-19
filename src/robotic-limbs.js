// "use strict";

class roboticLimbs {
  static get accurate() {
    return "10µm";
  }
  static get size() {
    return [400, 400, 150];
  }
  static get sizeUnit() {
    return "mm";
  }
  constructor(selector) {
    this.selector = document.querySelector(selector);
  }
}
module.exports = roboticLimbs;
