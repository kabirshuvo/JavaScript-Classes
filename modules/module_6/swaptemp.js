let first = 5;
let second = 7;

console.log(first, second);

/**
 * wrong approch
//first = second;
//second = first;
 */
//* First approch
// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);

//* Destructureing approch

[first, second] = [second, first];
console.log(first, second);