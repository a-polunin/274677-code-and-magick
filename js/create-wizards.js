'use strict';
(function () {
  document.querySelector('.setup-similar').classList.remove('hidden');

  var similarListElement = document.querySelector('.setup-similar-list');
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === window.colorize.coatInput.value) {
      rank += 2;
    }
    if (wizard.colorEyes === window.colorize.eyesInput.value) {
      rank += 1;
    }

    return rank;
  };

  var renderWizards = function () {
    var fragment = document.createDocumentFragment();
    var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');
    for (var i = 0; i < window.constants.SIMILAR_WIZARDS_COUNT; i++) {
      var wizardElement = window.util.cloneElement(similarWizardTemplate);
      var sortedWizards = sortWizards();
      fragment.appendChild(fillWizardWithData(wizardElement, sortedWizards[i]));
    }
    similarListElement.innerHTML = '';
    window.util.render(similarListElement, fragment);
  };

  var sortWizards = function () {
    var sortedWizards = wizards.slice().sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
      }
      return rankDiff;
    });

    return sortedWizards;
  };

  var updateWizards = window.debounce(function () {
    renderWizards(sortWizards());
  });

  var successHandler = function (data) {
    wizards = data;
    renderWizards(data);
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

  window.updateWizards = updateWizards;
  window.backend.load(successHandler, window.util.createErrorAlert);
})();
