'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var TEXT_GAP = 20;
var BAR_X = 150;
var BAR_Y = 250;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

// функция рисовки облака
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// функция вывода поздравления
var renderText = function (ctx, x, y) {
  ctx.fillStyle = '#000';
  ctx.font = 'bold 16px PT Mono';
  ctx.fillText('Ура, вы победили!', x + TEXT_GAP, y + TEXT_GAP * 2);
  ctx.fillText('Список результатов:', x + TEXT_GAP, y + TEXT_GAP * 3);
};

// функиция поиска максимального элемента
var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

// функиция вызова рандомных чисел для цвета столбцов
var getRandomInRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

window.renderStatistics = function (ctx, players, times) {
  // рисуем тень облака
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba (0, 0, 0, 0.7)');
  // рисуем основное облако
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  // выводим поздравление
  renderText(ctx, CLOUD_X, CLOUD_Y);

  ctx.fillStyle = '#000';

  // берём максимальный элемент, для расчёта высоты столбца
  var maxTime = getMaxElement(times);

  // рисуем колонки результатов
  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + getRandomInRange(10, 100) + '%, 50%)';
    }
    ctx.fillRect(BAR_X + (BAR_WIDTH + BAR_GAP) * i, BAR_Y, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillText(players[i], BAR_X + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT + CLOUD_Y / 2);
    ctx.fillText(Math.round(times[i]), BAR_X + (BAR_WIDTH + BAR_GAP) * i, (CLOUD_HEIGHT + CLOUD_Y / 2) - (BAR_HEIGHT * times[i] / maxTime) - TEXT_GAP * 2);
  }
};
