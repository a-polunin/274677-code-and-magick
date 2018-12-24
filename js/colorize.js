'use strict';
(function () {
  var setupWizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var setupWizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var setupFireball = document.querySelector('.setup-fireball-wrap');
  var coatInput = document.querySelector('input[name="coat-color"]');
  var eyesInput = document.querySelector('input[name="eyes-color"]');
  var fireballInput = document.querySelector('input[name="fireball-color"]');

  window.colorize = {
    setupWizardCoat: setupWizardCoat,
    setupWizardEyes: setupWizardEyes,
    setupFireball: setupFireball,
    coatInput: coatInput,
    eyesInput: eyesInput,
    fireballInput: fireballInput,

    colorizeCoat: function () {
      var coatColor = window.util.getRandomElementFromArray(window.constants.PULL_OF_COAT_COLORS);
      setupWizardCoat.style.fill = coatColor;
      coatInput.value = coatColor;
      window.updateWizards();
    },
    colorizeEyes: function () {
      var eyesColor = window.util.getRandomElementFromArray(window.constants.PULL_OF_EYES_COLORS);
      setupWizardEyes.style.fill = eyesColor;
      eyesInput.value = eyesColor;
      window.updateWizards();
    },
    colorizeFireball: function () {
      var fireballColor = window.util.getRandomElementFromArray(window.constants.PULL_OF_FIREBALL_COLORS);
      setupFireball.style.backgroundColor = fireballColor;
      fireballInput.value = fireballColor;
    }
  };
})();
