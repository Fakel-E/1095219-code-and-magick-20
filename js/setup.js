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
    name: WIZARD_NAMES[getRandomInRange(0, WIZARD_NAMES.length - 1)],
    surname: WIZARD_SURNAME[getRandomInRange(0, WIZARD_SURNAME.length - 1)],
    coatColor: COAT_COLOR[getRandomInRange(0, COAT_COLOR.length)],
    eyesColor: EYES_COLOR[getRandomInRange(0, EYES_COLOR.length)]
  });
}

// функция отрисовки магов
var renderWizzard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name + ' ' + wizards[i].surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  return wizardElement;
};

// создаем фрагмент дома, который будет добавлять
var fragment = document.createDocumentFragment();
for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizzard(wizards[i]));
}
similarListElement.appendChild(fragment);

// открываем блок с похожими персонажами
document.querySelector('.setup-similar').classList.remove('hidden');
