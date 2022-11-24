import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import App from './view/app';
import main from './view/main';

const app = new App({
  content: document.querySelector('#content'),
});

window.addEventListener('load', () => {
  app.renderPage();
});

document.addEventListener('DOMContentLoaded', main);
