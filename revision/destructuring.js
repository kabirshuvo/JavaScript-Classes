const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const numbers   = ['1', '2', '3', '4', '5', '6', '7'];

// const a = alphabets[0];
// console.log(a);

// const b = alphabets[1];
// console.log(b);

const [a,, c, ...rest] = alphabets;

const newArray = [...alphabets, ...numbers]

const boxify = alphabets.concat(numbers);

//console.log(a);
//console.log(b);
//console.log(c);

//console.log(rest)


//console.log(newArray);
//console.log(boxify);
// ***Using By Function***

function sumAndMultiply(a, b) {
    return [a+b, a*b, a/b]
}

//const array = sumAndMultiply(5, 5);
//console.log(array);

const [sum, multiply, division = 'No division'] = sumAndMultiply(3, 4);

//console.log(sum);
//console.log(multiply);
console.log(division);


