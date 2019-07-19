"use strict";

class cursor {
  constructor(selector) {
    this.selector = document.querySelector(selector);
  }
  position(content = null) {
    return {
      x: 0,
      y: 0
    };
  }
}
module.exports = selector => {
  return new cursor(selector);
};
