// Sets copyright year
function footerDate() {
  const fullYear = new Date().getFullYear();

  document.getElementById('currentYear').innerHTML = fullYear;
}
export default footerDate;
