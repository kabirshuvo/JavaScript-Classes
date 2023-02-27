//*dynamic type Language


//* primitive type
const a = 5; 
const b = 'I am Just liking JavaScript';
const c = true;

//*Non primitive type
const ages = [10, 20, 30, 40];
const student = { id: 816, class:7}

console.log(typeof a, typeof b, typeof c, typeof ages, typeof student);

let x = 5;
let y = 5;
console.log(x, y);

y = 7;

console.log(x, y);

let q = {job: 'web Developer'}
let p = q;

console.log(q, p);

p.job = 'front end developer';

console.log(q, p);