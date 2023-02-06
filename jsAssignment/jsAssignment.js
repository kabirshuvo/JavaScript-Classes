// ***(Problem 1: Let’s play a mind game)***

function mindGame(number){
        let inputNumber = number;
        let newNumber = inputNumber * 3;
        let addNumber = newNumber + 10;
        let divideNumber = addNumber / 2;
        let outputNumber = divideNumber - 5;

        return outputNumber;
}

const result1 = mindGame();

// ***(Problem 2: Finding even or odd)***

function evenOdd(string) {
       
        if (string.length % 2 === 0) {
            return "even";
          } else {
            return "odd";
          }

}

const result2 = evenOdd("chatgpt")
console.log(result2);




// *** Practice *** 

// *** :::::::::practiceEnd::::::::::: ***