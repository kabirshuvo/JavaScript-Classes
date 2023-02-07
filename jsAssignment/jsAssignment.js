// ************************************
// ***(Problem 1: Let’s play a mind game)***
// ************************************

/***
 * 
 Hi, This is a mind game, if you input any one number as a parameter than: 
 1. firstly it will multiply the number with 3.  
 2. secondly the multiplyed number will add 10 more. 
 3. thirdly the total will be divided by 2 and 
 4. lastly 5 will be minus from the divided number and it will be the output. 
 5. lets play the mind game ... for Joy. 
 */
 function mindGame(number){
  if(typeof number !== 'number' ){
       return "please input a number like(15)"
     }
         let inputNumber = number;
        let newNumber = inputNumber * 3;
        let addNumber = newNumber + 10;
        let divideNumber = addNumber / 2;
        let outputNumber = divideNumber - 5;

       return outputNumber;
 }

 const result1 = mindGame();
 

 //* problem-1 solved.


// ************************************
// ***(Problem 2: Finding even or odd)***
// ************************************

// function evenOdd(string) {
//        if(typeof string !== 'string'){
//         return 'please input a (string)'
//        }
//         if (string.length % 2 === 0) {
//             return "even";
//           } 
//           else {
//             return "odd";
//           }

// }

// const result2 = evenOdd();

// * problem-2 solved.



// ************************************
// ***(Problem 3: Is Less or Greater than seven)***
// ************************************

// function isLGSeven(number){
// if(typeof number !== 'number' ){
//   return "please input a number like(15)"
// }
//     let minusNumber = number -7;

//     if(minusNumber < 7){
//         return minusNumber;
//     }

//     else{
//         let doubleNumber = number * 2;
//         return doubleNumber;
//     }
// }

// const result3 = isLGSeven('fifteen');
// console.log(result3);

// //* Problem -3 solved



// ************************************
// ***(Problem 4: Finding Bad data)***
// ************************************


// function findingBadData(array){
//   if (!Array.isArray(array)) {
//     return "Please provide an array of numbers as input.";
//   }
  
//         let badDataCount = 0;
//         for (let i = 0; i < array.length; i++) {
          
//        if (array[i] < 0) {
//             badDataCount++;
//     }
//   }
//   return badDataCount;    
// }

// const result4 = findingBadData();


//*problen-4 solved.

// ************************************
// ***(Problem 5: Convert your gems into diamond)***
// ************************************

// function gemsToDiamond(a, b, c){
//   if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
//     return 'Please input numbers like this (10, 20, 30)';
//   }
//   let first = a * 21;
//   let second = b * 32;
//   let third = c * 43;
//   let totalDiamond = first + second + third;
//   if (totalDiamond < 2000) {
//     return totalDiamond;
//   } else {
//     let getDiamond = totalDiamond - 2000;
//     return getDiamond;
//   }
// }

// const result5 = gemsToDiamond(100, 5, 1);


// //* problem - 5 solved.
