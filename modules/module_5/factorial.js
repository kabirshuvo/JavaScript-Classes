//1+2+3+4+5+6+7
const myNumbers = [1, 2, 3, 4, 5, 6, 7];
const total = sumOfN(myNumbers);
function sumOfN(numbers){
    let sum = 0;
for(let i = 0; i <= numbers.length; i++){
    let index = i;
    sum = sum + index;
    
}
return sum;
}
console.log(total);