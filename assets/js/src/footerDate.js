// Sets copyright year
const YEAR_SPAN = document.getElementById('currentYear');

function footerDate() {
  const d = new Date();

  YEAR_SPAN.innerHTML = d.getFullYear();
}
export default footerDate;
