'use strict';
(function () {
  document.querySelector('.setup-similar').classList.remove('hidden');

  var similarListElement = document.querySelector('.setup-similar-list');

  var successHandler = function (data) {
    var fragment = document.createDocumentFragment();
    var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

    for (var i = 0; i < 4; i++) {
      var wizardElement = window.util.cloneElement(similarWizardTemplate);
      var randomInteger = window.util.getRandomInteger(0, data.length - 1);

      fragment.appendChild(fillWizardWithData(wizardElement, data[randomInteger]));
    }

    window.util.render(similarListElement, fragment);
  };

  var fillWizardWithData = function (wizard, data) {
    var wizardName = wizard.querySelector('.setup-similar-label');
    var wizardCoat = wizard.querySelector('.wizard-coat');
    var wizardEyes = wizard.querySelector('.wizard-eyes');

    wizardName.textContent = data.name;
    wizardCoat.style.fill = data.colorCoat;
    wizardEyes.style.fill = data.colorEyes;

    return wizard;
  };

  window.backend.load(successHandler, window.util.errorHandler);
})();
