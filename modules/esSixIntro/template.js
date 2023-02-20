const person = 'Adam Sandler';
const person1 = "Ben White";
const preson2 = `Donald Trump`;

const multiLine = 'First Line Text \n' + 
'Second Line code \n' +
'third line code';

// console.log(multiLine);

const newMultiline = `First line of text
Second Line of string
third line of code`;

// console.log(newMultiline);

const a = 20;
const b = 30;
const summary = 'sum of: ' + a + ' and ' + b + ' is: ' + (a+b);

//console.log(summary);

const newSummary = `sum of ${a} and ${b} is: ${a+b}`;

//console.log(newSummary);

function getSum(a, b=9){return a+b;} 

//console.log(getSum(2, 7));

const y = x => x*x; const z = y(5);
//console.log(z);

const name = 'Hero'; 
//const greetings = 'Welcome Home!'+' '+name;

const greetings = `Welcome Home! ${name}`;

console.log(greetings);

//const division= num1, num2 => console.log(4, 2);

const numbers=[10, 20, 30, 40, 50, 60, 70 ]

console.log(Math.max(...numbers));

const cars=['toyota', 'honda','mercedes']; 
const newCars= [...cars , 'ferrari'];
console.log(newCars);

