'use strict';
var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var WIZARD_SURNAME = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var COAT_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIRE_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
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

// Находим елементы, которым добавим обработчики событий
var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
// функция для закрытия по Esc
var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};
// Функция открытия окна настройки
var openPopup = function () {
  setup.classList.remove('hidden');
  // добавляем обработчик, для закрытия окна по ESC
  document.addEventListener('keydown', onPopupEscPress);
};
// Функция закрытия окна настройки
var closePopup = function () {
  setup.classList.add('hidden');
  // удаляем обработчик, для закрытия окна по ESC
  document.removeEventListener('keydown', onPopupEscPress);
};
// открытие по клику
setupOpen.addEventListener('click', function () {
  openPopup();
});
// открытие по Enter
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});
// закрытие по клику
setupClose.addEventListener('click', function () {
  closePopup();
});
// закрытие по Enter
setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var wizardCoatId = document.querySelector('#coat-color');
var wizardEyesId = document.querySelector('#eyes-color');
var wizardFireballId = document.querySelector('#fireball-color');

// Функция изменения цвета
var changeColor = function (wizardElement, massive) {
  wizardElement.style.fill = getRandomElement(massive);
};
// Добавляем обработчики
wizardCoat.addEventListener('click', function () {
  changeColor(wizardCoat, COAT_COLOR);
  wizardCoatId.value = wizardCoat.style.fill;
  wizardCoat.removeEventListener('click');
});

wizardEyes.addEventListener('click', function () {
  changeColor(wizardEyes, EYES_COLOR);
  wizardEyesId.value = wizardCoat.style.fill;
  wizardEyes.removeEventListener('click');
});

wizardFireball.addEventListener('click', function () {
  changeColor(wizardFireball, FIRE_COLOR);
  wizardFireballId.value = wizardFireball.style.backgroundColor;
  wizardFireball.removeEventListener('click');
});
