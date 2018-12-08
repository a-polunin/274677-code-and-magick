'use strict';
(function () {
  window.util = {
    getMaxElementOfArray: function (arr) {
      var maxElement = arr[0];
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
          maxElement = arr[i];
        }
      }
      return maxElement;
    },

    getRandomElementFromArray: function (array) {
      return array[this.getRandomInteger(0, array.length - 1)];
    },

    getRandomInteger: function (min, max) {
      var rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    },

    compareRandom: function () {
      return Math.random() - 0.5;
    },

    render: function (parentElement, childElement) {
      parentElement.appendChild(childElement);
    },

    cloneElement: function (template) {
      return template.cloneNode(true);
    },

    isEscEvent: function (e, action) {
      if (e.keyCode === window.constants.ESC_KEYCODE) {
        action();
      }
    },

    isEnterEvent: function (e, action) {
      if (e.keyCode === window.constants.ENTER_KEYCODE) {
        action();
      }
    }
  };

})();
