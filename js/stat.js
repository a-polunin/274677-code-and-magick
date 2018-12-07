'use strict';
(function () {
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
  var BLACK_COLOR = '#000000';

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var renderColumn = function (ctx, time, name, columnCount, maxResult) {
    var columnHeight = time * GRAPH_HEIGHT / maxResult;
    var columnX = COLUMN_X_START + (COLUMN_WIDTH_AND_SPACE * columnCount);
    var columnY = CLOUD_HEIGHT - (time * GRAPH_HEIGHT / maxResult) - GAP;

    ctx.fillStyle = (name === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(0,0,255,' + Math.random() + ')';
    ctx.fillRect(columnX, columnY, COLUMN_WIDTH, columnHeight);
  };

  var renderColumnTime = function (ctx, time, columnCount, maxResult) {
    var timeX = COLUMN_X_START + (COLUMN_WIDTH_AND_SPACE * columnCount);
    var timeY = CLOUD_HEIGHT - (time * GRAPH_HEIGHT / maxResult) - GAP * 2;

    ctx.fillStyle = BLACK_COLOR;
    ctx.fillText(Math.floor(time), timeX, timeY);
  };

  var renderColumnName = function (ctx, name, columnCount) {
    var nameX = COLUMN_X_START + (COLUMN_WIDTH_AND_SPACE * columnCount);

    ctx.fillStyle = BLACK_COLOR;
    ctx.fillText(name, nameX, NAME_Y);
  };

  var renderHeading = function (ctx, text, x, y) {
    ctx.font = HEADING_FONT;
    ctx.fillStyle = BLACK_COLOR;
    ctx.textBaseline = 'hanging';

    ctx.fillText(text, x, y);
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, 100, 10, '#ffffff');

    renderHeading(ctx, 'Ура вы победили!', 120, 30);
    renderHeading(ctx, 'Список результатов:', 120, 50);

    var maxTime = window.util.getMaxElementOfArray(times);

    for (var i = 0; i < times.length; i++) {
      renderColumn(ctx, times[i], names[i], i, maxTime);
      renderColumnName(ctx, names[i], i);
      renderColumnTime(ctx, times[i], i, maxTime);
    }
  };
})();
