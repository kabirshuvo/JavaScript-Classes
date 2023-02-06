// ***(Problem 1: Let’s play a mind game)***

const mindGame = function(number){
        let inputNumber = number;
        let newNumber = inputNumber * 3;
        let addNumber = newNumber + 10;
        let divideNumber = addNumber / 2;
        let outputNumber = divideNumber - 5;

        return outputNumber;
}

const result = mindGame(33);
console.log(result);

// ***(Problem 2: Finding even or odd)***

