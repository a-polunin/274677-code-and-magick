var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var GRAPH_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var COLUMN_SPACE = 50;
var COLUMN_X = 140;
var COLUMN_Y = 110;

var GAP = 20;
var NAME_Y = 260;

var renderCloud = function(ctx, x, y, color){
  ctx.fillStyle = color;
  ctx.fillRect(x,y,CLOUD_WIDTH,CLOUD_HEIGHT);
}

function getRandomInRange(min, max) {
  return Math.random() * (max - min + 1) + min;
}

var renderColumn = function(ctx, time, name, columnCount, maxResult){
  if(name === 'Вы'){
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  }else{
    ctx.fillStyle = 'rgba(0,0,255,' + Math.random() + ')';
  }

  ctx.fillRect(COLUMN_X + ((COLUMN_WIDTH + COLUMN_SPACE)*columnCount), CLOUD_HEIGHT - (time * GRAPH_HEIGHT / maxResult) - GAP, COLUMN_WIDTH, time * GRAPH_HEIGHT / maxResult);
}

var renderColumnTime = function(ctx, time, columnCount, maxResult){
  ctx.fillStyle = '#000000';
  ctx.fillText(Math.floor(time),COLUMN_X + ((COLUMN_WIDTH + COLUMN_SPACE)*columnCount), CLOUD_HEIGHT - (time * GRAPH_HEIGHT / maxResult) - GAP * 2);
}

var renderColumnName = function(ctx, name, columnCount){
  ctx.fillStyle = '#000000';
  ctx.fillText(name,COLUMN_X + ((COLUMN_WIDTH + COLUMN_SPACE)*columnCount),NAME_Y);
}

var renderHeading = function(ctx,text,x,y){
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000000';
  ctx.textBaseline = 'hanging';
  ctx.fillText(text ,x, y);
}

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx,names,times){
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#ffffff');

  renderHeading(ctx,'Ура вы победили!' ,120, 30);
  renderHeading(ctx,'Список результатов:',120, 50);

  var maxTime = getMaxElement(times);

  for(var i = 0;i < times.length; i++){
    renderColumn(ctx,times[i],names[i],i,maxTime);
    renderColumnName(ctx,names[i],i);
    renderColumnTime(ctx,times[i],i,maxTime);
  }
}
