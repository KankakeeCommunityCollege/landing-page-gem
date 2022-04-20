import '../../scss/main.scss';
// import test from './test';

function loadModule(module) {
  return import(`./${module}`).then(({default: module}) => module())
}

window.addEventListener('load', () => {

  Promise.resolve()
    .then(() => {
      if (window.location.hostname.search(/\.kcc\.edu/) == -1)
        return;
      
      return loadModule('loadClarusCorpScript');
    }).then(() => {
      if (!document.querySelector('img[data-src]'))
        return;
      
      return loadModule('lazyLoad');
    }).then(() => loadModule('footerDate'))
    .then(() => {
      if (!document.querySelector('a[href="#page-top"]'))
        return;
      
      return loadModule('landingPage');
    }).then(() => {
      if (!document.getElementById('SearchTermForm'))
        return;
      
      return import('./watchForWebsiteSearch').then(({default: init}) => init())
    }).catch(err => {
      console.error(`Error loading landing-page JS modules: ${err.message}`, err);
    })
});