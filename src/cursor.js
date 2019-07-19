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
    if (content !== null) {
      this.selector.innerHTML = content;
    }
    return this.selector.innerHTML;
  }
}
module.exports = selector => {
  return new cursor(selector);
};
