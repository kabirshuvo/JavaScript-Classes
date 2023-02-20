//function declaration
function add(first, second){
    const total = first + second;
    return total;
}

//function expression
const add1 = function add1(first, second){
    const total = first + second;
    return total;
}

//function annonymous expression
const add2 = function (first, second){
    const total = first + second;
    return total;
}


function add3(first, second){
    return first + second; 
}

const add4 = function(first, second){
    return first + second;
}
//Arrow Function
const add5 = (first, second) => first + second;

//const result = add(10,20);
//console.log(result);

const add7 = (Number1, Number2) => Number1 + Number2;
const add7Result = add7(10, 20);
console.log(add7Result);

const getFullName = (first, last) => first + " " + last;
const fullName = (kabir, Shuvo);
console.log(fullName);

const multiply = (Number1, Number2) => Number1 * Number2;
const multiplyResult = multiply(5, 7);
console.log(multiplyResult);

const adder = (first, second, third = 0, fourth = 0, fifth = 0,) => first + second + third + fourth + fifth;
const result = adder(10, 20, 20)
console.log(result);

//*one parameter 
const doubleIt = (num) => num * 2;

//* one Parameter simple virsion
const fiveTimes = num => num * 2; 

//**multiline arrow function */
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiply = firstSum * secondSum;
    const result = multiply / 2;
    return result;
}
