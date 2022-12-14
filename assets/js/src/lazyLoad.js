// Lazy load images
// ex. <img src="/path/to/small-placeholder_image.png" data-src="/path/to/actual_image.jpg" alt="You better not leave it blank">
const IMAGE_LIST = document.querySelectorAll('img[data-src]'); // Our lazyloading images use a data-src to hold the actual image source.

function lazyLoad() {
  for (const img of IMAGE_LIST) {
    img.src = img.getAttribute('data-src');
    img.onload = () => img.removeAttribute('data-src');
  }
}
export default lazyLoad;
