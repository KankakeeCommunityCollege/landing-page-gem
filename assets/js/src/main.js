import '../../scss/main.scss';
// import test from './test';

function loadModule(module) {
  import(`./${module}`).then(({default: module}) => {
    module();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadModule('footerDate');
  document.querySelector('img[data-src]') ? loadModule('lazyLoad'): null;
  window.location.pathname == '/' ? loadModule('landingPage'): null;
});