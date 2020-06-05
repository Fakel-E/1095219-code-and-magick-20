'use strict';
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

// функиция вызова рандомных чисел для цвета столбцов
var getRandomInRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Открываем окно настройки персонажа
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

// создаем переменную с элементом, куда будем вставлять магов
var similarListElement = document.querySelector('.setup-similar-list');
// создаем переменную с шаблоном мага, который будем копировать
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

// создаём массив магов с уникальными характеристиками
var wizards = [
  {
    name: WIZARD_NAMES[getRandomInRange(0, WIZARD_NAMES.length)],
    surname: WIZARD_SURNAME[getRandomInRange(0, WIZARD_SURNAME.length)],
    coatColor: COAT_COLOR[getRandomInRange(0, COAT_COLOR.length)],
    eyesColor: EYES_COLOR[getRandomInRange(0, EYES_COLOR.length)]
  },
  {
    name: WIZARD_NAMES[getRandomInRange(0, WIZARD_NAMES.length)],
    surname: WIZARD_SURNAME[getRandomInRange(0, WIZARD_SURNAME.length)],
    coatColor: COAT_COLOR[getRandomInRange(0, COAT_COLOR.length)],
    eyesColor: EYES_COLOR[getRandomInRange(0, EYES_COLOR.length)]
  },
  {
    name: WIZARD_NAMES[getRandomInRange(0, WIZARD_NAMES.length)],
    surname: WIZARD_SURNAME[getRandomInRange(0, WIZARD_SURNAME.length)],
    coatColor: COAT_COLOR[getRandomInRange(0, COAT_COLOR.length)],
    eyesColor: EYES_COLOR[getRandomInRange(0, EYES_COLOR.length)]
  },
  {
    name: WIZARD_NAMES[getRandomInRange(0, WIZARD_NAMES.length)],
    surname: WIZARD_SURNAME[getRandomInRange(0, WIZARD_SURNAME.length)],
    coatColor: COAT_COLOR[getRandomInRange(0, COAT_COLOR.length)],
    eyesColor: EYES_COLOR[getRandomInRange(0, EYES_COLOR.length)]
  }
];

// функция отрисовки магов
var renderWizzard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = WIZARD_NAMES[i] + ' ' + WIZARD_SURNAME[i];
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  return wizardElement;
};

// создаем фрагмент дома, который будет добавлять
var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizzard(wizards[i]));
}
similarListElement.appendChild(fragment);

// открываем блок с похожими персонажами
document.querySelector('.setup-similar').classList.remove('hidden');
