import '../../scss/main.scss';
// import test from './test';

function loadModule(module) {
  import(`./${module}`).then(({default: module}) => {
    module();
  });
}

window.addEventListener('load', () => {
  const onHomepage = window.location.pathname == '/';

  loadModule('footerDate');
  onHomepage ? loadModule('landingPage'): null;
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('img[data-src]') ? loadModule('lazyLoad'): null;
});