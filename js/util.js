'use strict';
(function () {
  var PULL_OF_NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];

  var PULL_OF_SURNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  var PULL_OF_COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var PULL_OF_EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var PULL_OF_FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var NUMBER_OF_OBJECTS = 4;

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.util = {
    PULL_OF_NAMES: PULL_OF_NAMES,
    PULL_OF_SURNAMES: PULL_OF_SURNAMES,
    PULL_OF_COAT_COLORS: PULL_OF_COAT_COLORS,
    PULL_OF_EYES_COLORS: PULL_OF_EYES_COLORS,
    PULL_OF_FIREBALL_COLORS: PULL_OF_FIREBALL_COLORS,
    NUMBER_OF_OBJECTS: NUMBER_OF_OBJECTS,
    ESC_KEYCODE: ESC_KEYCODE,
    ENTER_KEYCODE: ENTER_KEYCODE,

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
      if (e.keyCode === ESC_KEYCODE) {
        action();
      }
    },

    isEnterEvent: function (e, action) {
      if (e.keyCode === ENTER_KEYCODE) {
        action();
      }
    }
  };

})();
