//Original JS Code
// const year = document.getElementById('year');
// const currentYear = new Date().getFullYear();
// year.setAttribute('datetime', currentYear.toString());
// year.textContent = currentYear.toString();

// // 1st variation
// let year: HTMLElement | null = document.getElementById('year');
// let currentYear: string = new Date().getFullYear().toString();
// if (year) {
//     year.setAttribute('datetime', currentYear);
//     year.textContent = currentYear;
// }

// 2nd variation
const year = document.getElementById('year') as HTMLSpanElement;
const currentYear: string = new Date().getFullYear().toString();
year.setAttribute('datetime', currentYear);
year.textContent = currentYear;
