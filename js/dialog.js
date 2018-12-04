'use strict';
(function () {


  var setupDialogElement = document.querySelector('.setup');
  var dialogHandler = setupDialogElement.querySelector('.upload');
  var setupCloseBtn = setupDialogElement.querySelector('.setup-close');
  var setupOpenBtn = document.querySelector('.setup-open');

  dialogHandler.addEventListener('mousedown', function (e) {
    e.preventDefault();

    var startCoords = {
      x: e.clientX,
      y: e.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvent) {
      moveEvent.preventDefault();
      dragged = true;
      var shift = {
        x: startCoords.x - moveEvent.clientX,
        y: startCoords.y - moveEvent.clientY
      };

      startCoords = {
        x: moveEvent.clientX,
        y: moveEvent.clientY
      };

      setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
      setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvent) {
      upEvent.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (evt) {
          evt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  setupOpenBtn.addEventListener('click', function () {
    setupDialogElement.style.top = 80 + 'px';
    setupDialogElement.style.left = 50 + '%';
  });
})();
