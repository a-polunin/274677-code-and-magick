'use strict';
(function () {
  var createHttpRequest = function (URL, method, onLoadCallback, onErrorCallback, data) {
    data = data || null;
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoadCallback(xhr.response);
      } else {
        onErrorCallback('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onErrorCallback('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onErrorCallback('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000;
    xhr.open(method, URL);
    xhr.send(data);
  };

  window.backend = {
    load: function (onLoad, onError) {
      var URL = 'https://js.dump.academy/code-and-magick/data';
      createHttpRequest(URL, 'GET', onLoad, onError);
    },
    save: function (data, onLoad, onError) {
      var URL = 'https://js.dump.academy/code-and-magick';
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          onLoad(xhr.response);
        } else {
          onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });

      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });

      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });

      xhr.timeout = 10000;
      xhr.open('POST', URL);
      xhr.send(data);
    }
  };
})();
