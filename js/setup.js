'use strict';
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var NUMBER_WIZARDS = 4;

// функиция вызова рандомных чисел для цвета столбцов
var getRandomInRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
// функция вызова рандомного элемента
var getRandomElement = function (array) {
  return array[[getRandomInRange(0, array.length - 1)]];
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
var wizards = [];

for (var i = 0; i < NUMBER_WIZARDS; i++) {
  wizards.push({
    name: getRandomElement(WIZARD_NAMES),
    surname: getRandomElement(WIZARD_SURNAME),
    coatColor: getRandomElement(COAT_COLOR),
    eyesColor: getRandomElement(EYES_COLOR)
  });
}

// функция отрисовки магов
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

// создаем фрагмент дома, который будет добавлять
var fragment = document.createDocumentFragment();
for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}
similarListElement.appendChild(fragment);

// открываем блок с похожими персонажами
document.querySelector('.setup-similar').classList.remove('hidden');
