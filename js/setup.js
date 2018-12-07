'use strict';
(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupSubmit = document.querySelector('.setup-submit');
  var setupWizardForm = document.querySelector('.setup-wizard-form');

  var onPopupEscPress = function (e) {
    window.util.isEscEvent(e, closePopup);
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (e) {
    window.util.isEnterEvent(e, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (e) {
    window.util.isEnterEvent(e, closePopup);
  });

  setupSubmit.addEventListener('keydown', function (e) {
    window.util.isEnterEvent(e, setupWizardForm.submit());
  });
})();
