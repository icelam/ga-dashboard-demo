/* eslint-disable func-names, prefer-destructuring */

const googleApi = {
  init(token, callback) {
    const w = window;
    const d = document;
    const s = 'script';

    const g = w.gapi || (w.gapi = {});
    g.analytics = {
      q: [],
      ready(f) {
        this.q.push(f);
      }
    };
    const js = d.createElement(s);
    const fs = d.getElementsByTagName(s)[0];
    js.src = 'https://apis.google.com/js/platform.js';
    fs.parentNode.insertBefore(js, fs);
    js.onload = function () {
      g.load('analytics');
    };

    this.ready(token, callback);
  },
  ready(token, callback) {
    window.gapi.analytics.ready(() => {
      window.gapi.analytics.auth.authorize({
        serverAuth: {
          access_token: token
        }
      });

      if (callback && typeof callback === 'function') {
        callback();
      }
    });
  }
};

export default googleApi;
