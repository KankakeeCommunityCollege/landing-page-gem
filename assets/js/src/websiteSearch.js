const searchForm = document.getElementById('SearchTermForm');
const searchUrlPath = 'https://www.kcc.edu/search';

function submissionHandler(e) {
  const target = e.target;
  const searchString = encodeURIComponent(target.querySelector('#searchTermInput').value);
  const searchQuery = `?q=${searchString}`

  e.preventDefault();
  return window.location = new URL(searchUrlPath + searchQuery);
}

function websiteSearch() {
  searchForm.addEventListener('submit', submissionHandler);
}

export default websiteSearch;
