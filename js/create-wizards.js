'use strict';
(function () {
  document.querySelector('.setup-similar').classList.remove('hidden');

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  // Блок создания волшебников и помещения их в элемент
  var fillElementWithWizards = function (wizardTemplate, data) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < data.length; i++) {
      var wizardElement = window.util.cloneElement(wizardTemplate);

      fragment.appendChild(fillWizardWithData(wizardElement, data[i]));
    }

    return fragment;
  };

  var fillWizardWithData = function (wizard, data) {
    var wizardName = wizard.querySelector('.setup-similar-label');
    var wizardCoat = wizard.querySelector('.wizard-coat');
    var wizardEyes = wizard.querySelector('.wizard-eyes');

    wizardName.textContent = data.name;
    wizardCoat.style.fill = data.coatColor;
    wizardEyes.style.fill = data.eyesColor;

    return wizard;
  };

  // Вызываем функции и рендерим
  var wizards = fillElementWithWizards(similarWizardTemplate, window.createData());

  window.util.render(similarListElement, wizards);
})();
