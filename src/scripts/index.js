import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import 'lazysizes';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#burger-menu'),
  drawer: document.querySelector('#menu'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
