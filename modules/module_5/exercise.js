//Even and Odd.

// function isEven(number){
// const remainder = number % 2;
//console.log(remainder);
// if(remainder === 0){
//     return true;
// }
// else{
//     return false;
// }
// }

// const firstNumber = isEven(100);
// console.log(firstNumber);
// const secondNumber = isEven(101);
// console.log(secondNumber);

//<<<<::::LeapYear::::>>>>

function isLeapYear (year){
    const remainder = year % 4;
    if(remainder === 0){
        // console.log('This is a Leap Year');
        return true;
    }
    else{
        //console.log('This is not a Leap Year');
        return false;
    }
}
let theYear = isLeapYear(1952);
console.log(theYear);