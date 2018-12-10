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
    window.colorize.setupWizardCoat.addEventListener('click', window.colorize.colorizeCoat);
    window.colorize.setupWizardEyes.addEventListener('click', window.colorize.colorizeEyes);
    window.colorize.setupFireball.addEventListener('click', window.colorize.colorizeFireball);
  };
  openPopup();

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    window.colorize.setupWizardCoat.removeEventListener('click', window.colorize.colorizeCoat);
    window.colorize.setupWizardEyes.removeEventListener('click', window.colorize.colorizeEyes);
    window.colorize.setupFireball.removeEventListener('click', window.colorize.colorizeFireball);
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
