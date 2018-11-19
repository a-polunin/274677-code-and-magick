'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var GRAPH_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var COLUMN_SPACE = 50;
var COLUMN_WIDTH_AND_SPACE = COLUMN_WIDTH + COLUMN_SPACE;
var COLUMN_X_START = 140;

var GAP = 20;
var NAME_Y = 260;
var HEADING_FONT = '16px PT Mono';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderColumn = function (ctx, time, name, columnCount, maxResult) {
  var COLUMN_HEIGHT = time * GRAPH_HEIGHT / maxResult;
  var COLUMN_X = COLUMN_X_START + (COLUMN_WIDTH_AND_SPACE * columnCount);
  var COLUMN_Y = CLOUD_HEIGHT - (time * GRAPH_HEIGHT / maxResult) - GAP;

  ctx.fillStyle = (name === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(0,0,255,' + Math.random() + ')';
  ctx.fillRect(COLUMN_X, COLUMN_Y, COLUMN_WIDTH, COLUMN_HEIGHT);
};

var renderColumnTime = function (ctx, time, columnCount, maxResult) {
  var TIME_X = COLUMN_X_START + (COLUMN_WIDTH_AND_SPACE * columnCount);
  var TIME_Y = CLOUD_HEIGHT - (time * GRAPH_HEIGHT / maxResult) - GAP * 2;

  ctx.fillStyle = '#000000';
  ctx.fillText(Math.floor(time), TIME_X, TIME_Y);
};

var renderColumnName = function (ctx, name, columnCount) {
  var NAME_X = COLUMN_X_START + (COLUMN_WIDTH_AND_SPACE * columnCount);

  ctx.fillStyle = '#000000';
  ctx.fillText(name, NAME_X, NAME_Y);
};

var renderHeading = function (ctx, text, x, y) {
  ctx.font = HEADING_FONT;
  ctx.fillStyle = '#000000';
  ctx.textBaseline = 'hanging';

  ctx.fillText(text, x, y);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#ffffff');

  renderHeading(ctx, 'Ура вы победили!', 120, 30);
  renderHeading(ctx, 'Список результатов:', 120, 50);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < times.length; i++) {
    renderColumn(ctx, times[i], names[i], i, maxTime);
    renderColumnName(ctx, names[i], i);
    renderColumnTime(ctx, times[i], i, maxTime);
  }
};
