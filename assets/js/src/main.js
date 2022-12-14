import '../../scss/main.scss';

window.addEventListener('load', async () => {
  if (document.querySelector('img[data-src]')) {
    const { default: lazyLoad } = await import('./lazyLoad');

    lazyLoad();
  }
  const { default: footerDate } = await import('./footerDate');

  footerDate();

  if (document.querySelector('a[href="#page-top"]')) {
    const { default: landingPage } = await import('./landingPage');

    landingPage();
  }

  if (document.getElementById('SearchTermForm')) {
    const { default: websiteSearch } = await import('./websiteSearch');

    websiteSearch();
  }
});
