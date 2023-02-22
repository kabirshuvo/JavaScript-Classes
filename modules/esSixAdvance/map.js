const numbers = [2, 8, 4, 6, 3];

const output = [];

// for(const number of numbers){
//     const single = number;
//     output.push(single)
//     const double = number * 2 ;
//     output.push(double);
//     const tripple = number * 3;
//     output.push(tripple);
// }

//console.log(output); 
const doubleIt = num => num *2;
function getDoubles(numbers){
    const output = [];
    for (const number of numbers){
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
} 
const result = getDoubles(numbers)


console.log(result);



/* *
 * purpose: 
1. get an array
2. for every elements of the array do something
3. store the result in an array
4. return the result array
 */


const makeDubDabol = numbers.map(doubleIt)

//console.log(makeDubDabol);
const makeDouble = numbers.map(x => x * 2);

//console.log(makeDouble);