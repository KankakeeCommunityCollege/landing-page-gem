import '../../scss/main.scss';
// import test from './test';

function loadModule(module) {
  import(`./${module}`).then(({default: module}) => {
    module();
  });
}

document.addEventListener('DOMContentLoaded', () => {

  Promise.resolve()
    .then(() => {
      if ( window.location.hostname.search(/\.kcc\.edu/) !== -1 ) {
        loadModule('loadClarusCorpScript');
    }})
    .then(() => {
    if ( document.querySelector('img[data-src]') ) {
      loadModule('lazyLoad');
    }})
    .then(() => loadModule('footerDate'))
    .then(() => {
      if ( document.querySelector('a[href="#page-top"]') ) {
        loadModule('landingPage');
    }})
});