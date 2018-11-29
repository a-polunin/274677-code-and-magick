'use strict';
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

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

// Блок заполнения массива объектами
var createArray = function (num) {
  var array = [];
  for (var i = 0; i < num; i++) {
    array.push(createRandomObject(PULL_OF_NAMES, PULL_OF_SURNAMES, PULL_OF_COAT_COLORS, PULL_OF_EYES_COLORS));
  }
  return array;
};

var createRandomObject = function (names, surnames, coatColors, eyesColors) {
  var fullName = [getRandomElementFromArray(names), getRandomElementFromArray(surnames)];

  return {
    name: getName(fullName),
    coatColor: getRandomElementFromArray(coatColors),
    eyesColor: getRandomElementFromArray(eyesColors)
  };
};

var getRandomElementFromArray = function (array) {
  return array[getRandomInteger(0, array.length - 1)];
};

var getRandomInteger = function (min, max) {
  var rand = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
};

var getName = function (fullName) {
  return fullName.sort(compareRandom).join(' ');
};

function compareRandom() {
  return Math.random() - 0.5;
}

// Блок создания волшебников и помещения их в элемент
var fillElementWithWizards = function (wizardTemplate, data) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < data.length; i++) {
    var wizardElement = createWizard(wizardTemplate);

    fragment.appendChild(fillWizardWithData(wizardElement, data[i]));
  }

  return fragment;
};

var createWizard = function (template) {
  return template.cloneNode(true);
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

var render = function (parentElement, childElement) {
  parentElement.appendChild(childElement);
};

// Вызываем функции и рендерим
var data = createArray(NUMBER_OF_OBJECTS);
var wizards = fillElementWithWizards(similarWizardTemplate, data);

render(similarListElement, wizards);

/*
  ///////////////////////////////////////////////
*/
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupSubmit = document.querySelector('.setup-submit');
var setupWizardForm = document.querySelector('.setup-wizard-form');

var onPopupEscPress = function (e) {
  if (e.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (e) {
  if (e.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (e) {
  if (e.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

setupSubmit.addEventListener('keydown', function (e) {
  if (e.keyCode === ENTER_KEYCODE) {
    setupWizardForm.submit();
  }
});

var setupWizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var setupWizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var setupFireball = document.querySelector('.setup-fireball-wrap');

setupWizardCoat.addEventListener('click', function () {
  var coatInput = document.querySelector('input[name="coat-color"]');
  coatInput.value = setupWizardCoat.style.fill = getRandomElementFromArray(PULL_OF_COAT_COLORS);
});

setupWizardEyes.addEventListener('click', function () {
  var eyesInput = document.querySelector('input[name="eyes-color"]');
  eyesInput.value = setupWizardEyes.style.fill = getRandomElementFromArray(PULL_OF_EYES_COLORS);
});

setupFireball.addEventListener('click', function () {
  var fireballInput = document.querySelector('input[name="fireball-color"]');
  fireballInput.value = setupFireball.style.backgroundColor = getRandomElementFromArray(PULL_OF_FIREBALL_COLORS);
});
