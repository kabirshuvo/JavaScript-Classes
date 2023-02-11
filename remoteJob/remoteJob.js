
document.getElementById('div-grettings').style.backgroundColor = 'green';

// document.getElementsByClassName('p-headings').style.backgroundColor = '#333';

const pHeadings = document.getElementsByClassName('p-headings');
// console.log(pHeadings);
for(const pheading of pHeadings){
    console.log(pheading);
}
const firstLi = document.querySelector('nav li');
// console.log(firstLi);

const navLi = document.querySelectorAll('nav li');
// console.log(navLi);

const sections = document.querySelectorAll('section')
for(const section of sections){
    section.style.border = '10px solid black';
    section.style.borderRadius = '16px';
}