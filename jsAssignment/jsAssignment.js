// ************************************
// ***(Problem 1: Let’s play a mind game)***
// ************************************

// function mindGame(number){
//         let inputNumber = number;
//         let newNumber = inputNumber * 3;
//         let addNumber = newNumber + 10;
//         let divideNumber = addNumber / 2;
//         let outputNumber = divideNumber - 5;

//         return outputNumber;
// }

// const result1 = mindGame();



// ************************************
// ***(Problem 2: Finding even or odd)***
// ************************************

// function evenOdd(string) {
       
//         if (string.length % 2 === 0) {
//             return "even";
//           } 
//           else {
//             return "odd";
//           }

// }

// const result2 = evenOdd('Batch7');



// ************************************
// ***(Problem 3: Is Less or Greater than seven)***
// ************************************

// function isLGSeven(number){

//     let minusNumber = number -7;

//     if(minusNumber < 7){
//         return minusNumber;
//     }

//     else{
//         let doubleNumber = number * 2;
//         return doubleNumber;
//     }
// }

// const result3 = isLGSeven();


// ************************************
// ***(Problem 4: Finding Bad data)***
// ************************************


function findingBadData(array){
        let badDataCount = 0;
        for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            badDataCount++;
    }
  }
  return badDataCount;    
}

const result4 = findingBadData([10, -20]);
console.log(result4)



// ************************************
// ***(Problem 5: Convert your gems into diamond)***
// ************************************

// function gemsToDiamond(a, b, c){
//     let first   = a * 21;
//     let second  = b * 32;
//     let third   = c * 43;
//     let totalDiamond = first + second + third;
//     if(totalDiamond < 2000){
//         return totalDiamond
//     }
//     else{
//         getDiamond = totalDiamond - 2000;
//         return getDiamond
//     }


// }

// const result5 = gemsToDiamond(100, 5, 1);


// *** Practice *** 

// *** :::::::::practiceEnd::::::::::: ***