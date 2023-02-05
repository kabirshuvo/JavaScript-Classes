let myArray = [
    45,
    87,
    -99,
    77,
    76,
    -34,
    -76,
    99
];
function onlyPositive(numbers){
    let positive = [];
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] > 0){
            positive.push(numbers[i]);
        }
    }
    return positive;
}
console.log(onlyPositive(myArray));