'use strict';
(function () {
  // Блок заполнения массива объектами
  var createArray = function (num) {
    var array = [];
    for (var i = 0; i < num; i++) {
      array.push(createRandomObject(
          window.constants.PULL_OF_NAMES,
          window.constants.PULL_OF_SURNAMES,
          window.constants.PULL_OF_COAT_COLORS,
          window.constants.PULL_OF_EYES_COLORS));
    }
    return array;
  };

  var createRandomObject = function (names, surnames, coatColors, eyesColors) {
    var fullName = [window.util.getRandomElementFromArray(names), window.util.getRandomElementFromArray(surnames)];

    return {
      name: getName(fullName),
      coatColor: window.util.getRandomElementFromArray(coatColors),
      eyesColor: window.util.getRandomElementFromArray(eyesColors)
    };
  };

  var getName = function (fullName) {
    return fullName.sort(window.util.compareRandom).join(' ');
  };

  window.createData = (function () {
    return createArray(window.constants.NUMBER_OF_OBJECTS);
  })();
})();
