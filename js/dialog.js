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

    var onMouseMove = function (moveE) {
      moveE.preventDefault();
      dragged = true;
      var shift = {
        x: startCoords.x - moveE.clientX,
        y: startCoords.y - moveE.clientY
      };

      startCoords = {
        x: moveE.clientX,
        y: moveE.clientY
      };

      setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
      setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upE) {
      upE.preventDefault();

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

  setupCloseBtn.addEventListener('click', function (e) {
    setupDialogElement.style.top = 80 + 'px';
    setupDialogElement.style.left = 50 + '%';
  });

  setupOpenBtn.addEventListener('click', function (e) {
    setupDialogElement.style.top = 80 + 'px';
    setupDialogElement.style.left = 50 + '%';
  });
})();
