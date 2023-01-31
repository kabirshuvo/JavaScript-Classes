// //1+2+3+4+5+6+7
// const myNumbers = [11, 22, 33, 44, 55, 66, 77];
// const total = sumOfN(myNumbers);
// function sumOfN(numbers){
//     let sum = 1;
//    for(let i =0; i < numbers.length; i++){
//     const index = i;
//     const element = numbers[index];
//     sum = sum * element;
//     //console.log(sum);
//    }
//    return sum;
// }
// console.log(total);

// 1*2*3*4*5*6*7

//multiplication of an array:

// const myNumbers = [1, 2, 33, 44, 55, 66, 77];
// const total = multiplyOfN(myNumbers);

// function multiplyOfN(numbers){
//     let multiplication = 1;
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         multiplication = multiplication * element;
//     }
//     return multiplication;
// }
// console.log(total);

//Factorias 
function facetorials(numbers){
let result = 1;
for(let i = 1; i <= numbers; i++){
    result = result * i;
}
return result;
}
const result = facetorials(9);
console.log(result);