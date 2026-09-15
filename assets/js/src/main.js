import '../../scss/main.scss';

document.addEventListener('DOMContentLoaded', async () => {
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

  if (document.querySelector('main a')) {
    import('./accessibleExternalLinks')
      .then(({ default: accessibleExternalLinks }) => accessibleExternalLinks())
      .catch(err => console.error('Error importing "accessibleExternalLinks" module: ', err));
  }

  if (document.getElementById('SearchTermForm')) {
    const { default: websiteSearch } = await import('./websiteSearch');

    websiteSearch();
  }
});
