'use strict';
var PULL_OF_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var PULL_OF_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var PULL_OF_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var PULL_OF_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
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
    array.push(createRandomObj(PULL_OF_NAMES, PULL_OF_SURNAMES, PULL_OF_COAT_COLORS, PULL_OF_EYES_COLORS));
  }
  return array;
};

var createRandomObj = function (names, surnames, coatColors, eyesColors) {
  var fullName = [getRandomElementFromArray(names), getRandomElementFromArray(surnames)];

  var obj = {
    name: getName(fullName),
    coatColor: getRandomElementFromArray(coatColors),
    eyesColor: getRandomElementFromArray(eyesColors)
  };
  return obj;
};

var getRandomElementFromArray = function (array) {
  return array[getRandomInteger(0, array.length - 1)];
};

var getRandomInteger = function (min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);

  return rand;
};

var getName = function (fullName) {
  return fullName.sort(compareRandom).join(' ');
};

function compareRandom(_a, _b) {
  return Math.random() - 0.5;
}

// Блок создания волшебников и помещения их в элемент
var fillElementByWizards = function (wizardTemplate, data) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < data.length; i++) {
    var wizardElement = createWizard(wizardTemplate);

    fragment.appendChild(fillWizardByData(wizardElement, data[i]));
  }

  return fragment;
};

var createWizard = function (template) {
  return template.cloneNode(true);
};

var fillWizardByData = function (wizard, data) {
  var wizardName = wizard.querySelector('.setup-similar-label');
  var wizarCoat = wizard.querySelector('.wizard-coat');
  var wizarEyes = wizard.querySelector('.wizard-eyes');

  wizardName.textContent = data.name;
  wizarCoat.style.fill = data.coatColor;
  wizarEyes.style.fill = data.eyesColor;

  return wizard;
};

var render = function (parentElement, childElement) {
  parentElement.appendChild(childElement);
};

// Вызываем функции и рендерим
var data = createArray(NUMBER_OF_OBJECTS);
var wizards = fillElementByWizards(similarWizardTemplate, data);

render(similarListElement, wizards);
