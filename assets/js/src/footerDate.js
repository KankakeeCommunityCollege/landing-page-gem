// Sets copyright year
const yearSpan = document.getElementById('currentYear');

function footerDate() {
  const d = new Date();
  const year = d.getFullYear();

  if (yearSpan.innerHTML === `${year}`)
    return;

  yearSpan.innerHTML = year;
}
export default footerDate;
