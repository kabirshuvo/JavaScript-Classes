const numbers = [11, 23, 35, 47, 59, 33, 44, 26];
numbers.push(71)

for (let i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 50){
        continue;
    }
    console.log(number);
}