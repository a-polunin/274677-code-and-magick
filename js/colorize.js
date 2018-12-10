'use strict';
(function () {
  var setupWizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var setupWizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var setupFireball = document.querySelector('.setup-fireball-wrap');

  window.colorize = {
    setupWizardCoat: setupWizardCoat,
    setupWizardEyes: setupWizardEyes,
    setupFireball: setupFireball,

    colorizeCoat: function () {
      var coatInput = document.querySelector('input[name="coat-color"]');
      var coatColor = window.util.getRandomElementFromArray(window.constants.PULL_OF_COAT_COLORS);
      setupWizardCoat.style.fill = coatColor;
      coatInput.value = coatColor;
    },
    colorizeEyes: function () {
      var eyesInput = document.querySelector('input[name="eyes-color"]');
      var eyesColor = window.util.getRandomElementFromArray(window.constants.PULL_OF_EYES_COLORS);
      setupWizardEyes.style.fill = eyesColor;
      eyesInput.value = eyesColor;
    },
    colorizeFireball: function () {
      var fireballInput = document.querySelector('input[name="fireball-color"]');
      var fireballColor = window.util.getRandomElementFromArray(window.constants.PULL_OF_FIREBALL_COLORS);
      setupFireball.style.backgroundColor = fireballColor;
      fireballInput.value = fireballColor;
    }
  };
})();
