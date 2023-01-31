
function getSum(numbers){
   let sum = 0;
   for(let i =0; i < numbers.length; i++){
    const index = i;
    const element = numbers[index];
    sum = sum + element;
    //console.log(sum);
   }
   return sum;
}

function getOdds(numbers){
    let oddNumbers =[];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 == 0){
            oddNumbers.push(element);
            //console.log(oddNumbers);
        }
    }
    return oddNumbers;
}

const myNumbers = [12, 65, 45, 78, 32, 85, 91];
const total = getSum(myNumbers);
const oddNumbers = getOdds(myNumbers);
const oddSum = getSum(oddNumbers);

console.log(total);