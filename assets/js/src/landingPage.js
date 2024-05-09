// Custom JS to scroll the user to the top of the page & focus the first field (First Name input) of the form

function distanceToTop(el) {
  return Math.floor(el.getBoundingClientRect().top);
}

function clickHandler(e) {
  const targetId = e.target.getAttribute('href').replace(/^#/, '');
  const targetEl = document.getElementById(targetId);
  const originalTop = distanceToTop(targetEl);

  e.preventDefault();
  window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });

  const checkIfDone = setInterval(() => {
    const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
    if (distanceToTop(targetEl) === 0 || atBottom) {
      // First Name <input> element from the TargetX form in landing pages
      const inputEl = document.querySelector('.inputWrapper input[placeholder="First Name"]');

      inputEl.select();
      clearInterval(checkIfDone);
    }
  }, 100);
}

function landingPage() {
  const getStartedButton = document.querySelector('a[href="#page-top"]'); // call-to-action Button at the bottom of landing pages

  getStartedButton.addEventListener('click', clickHandler);
}

export default landingPage;
