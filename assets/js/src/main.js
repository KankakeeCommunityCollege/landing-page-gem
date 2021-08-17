import '../../scss/main.scss';
// import test from './test';

function loadModule(module) {
  import(`./${module}`).then(({default: module}) => {
    module();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('img[data-src]')) {
    loadModule('lazyLoad');
  }
  loadModule('footerDate');
  loadModule('landingPage');
});