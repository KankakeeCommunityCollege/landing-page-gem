import '../../scss/main.scss';
// import test from './test';

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('img[data-src]')) {
    import(/* webpackChunkName: 'lazyLoad' */ './lazyLoad').then(({default: lazyLoad}) => {
      lazyLoad();
    });
  }
  import(/* webpackChunkName: 'footerDate' */ './footerDate').then(({ default: footerDate }) => {
    footerDate();
  }).then(() => {
    import(/* webpackChunkName: 'landingPage' */ './landingPage').then(({default: landingPage}) => {
      landingPage();
    });
  });
});