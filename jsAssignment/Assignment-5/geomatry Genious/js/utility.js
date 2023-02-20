function blogFunction() {
    location.href = "file:///C:/Users/Shuvo/Desktop/Assignment-5/geomatry%20Genious/blog.html";
  }

  function homeFunction() {
    location.href = "file:///C:/Users/Shuvo/Desktop/Assignment-5/geomatry%20Genious/areaCalc.html";
  }

//************* */
//********************************
//* Get the value from input Fields.
//********************************

function getInputValue(inputId){
    const inputA = document.getElementById(inputId);
    const inputAString = inputA.value;
    inputA.value = '';
    const inputAValue = parseFloat(inputAString);
    return inputAValue;
}
//********************************
//* Get the value of Rules One
//********************************
function rulesOne(inputIdA, inputIdB){
    //rule 1 is for a * b * c
    
    const a = getInputValue(inputIdA)
    const b = getInputValue(inputIdB)
    const c  = 0.5;

    //rules: Area (A) = 0.5 * b * h
    const result = a * b * c;

    return result;
}
//********************************
//* Get the value of Rules Two
//********************************

function rulesTwo(inputIdA, inputIdB){
    const a = getInputValue(inputIdA)
    const b = getInputValue(inputIdB)
//rules: Area (A) = a * b;
    const result = a * b;

    return result
}

//********************************
//*1. Get the Triangle Area Result...
//********************************
function triangleArea (){
    const triangleA = rulesOne('triangle-a', 'triangle-b')
    
     return triangleA;

}

//*========================
//*===Triangle===1.===END====
//*========================

//********************************
//*2. Get the Rectangle Area Result... 
//********************************
function rectangleArea(){
    const a = getInputValue('rectangle-a');
    const b = getInputValue('rectangle-b');

    //rules: Area (A) = w * I

    const rectangleA = a * b;
    return rectangleA;

}//*========================
//*===Rectangle===2.===END====
//*========================

//*************************************
//*3. Get the Parallelogram Area Result... 
//*************************************
function parallelogramArea(){
    const parallelogramA= rulesTwo('parallelogram-a', 'parallelogram-b')
     
     return parallelogramA;
 }
 //*=============================
 //*===Parallelogram===3.===END====
 //*=============================
 //********************************
//*4. Get the Rhombus Area Result... 
//********************************
function rhombusArea(){
    const rhombusA = rulesOne('rhombus-a', 'rhombus-b')

    //rules: Area (A) = 0.5 * d <sub> 1 </sub> *d <sub> 1 </sub>

    return rhombusA;
    
}
//********************************
//*5. Get the Pentagon Area Result...
//********************************
function pentagonArea(){
    const pentagonA = rulesTwo('pentagon-a', 'pentagon-b')
 
    //rules: Area (A) = 0.5 * p * b;
    
    return pentagonA;
    
   
}


//********************************
//*6. Get the Ellipse Area Result...
//********************************
function ellipseArea(){
    const a = getInputValue('ellipse-a')
    const b = getInputValue('ellipse-b')
    const pie = 3.14

    const ellipseA = pie * a * b ;
    
    // console.log(ellipseA);
    return ellipseA;
}


//************* */
//*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*
//* ~~~ Background~~~Changer~~~function * *
//*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*

function changeBackgroundColor(element) {
    const colors = ["#D5D6EA", "#F6F6EB", "#D7ECD9", "#F5D5CB", " #F6ECF5"];
    const randomNumber = Math.floor(Math.random() * colors.length);
    const color = colors[randomNumber];
    element.style.backgroundColor = color;
  }

//*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*
//* ~~~Result ~~~Display ~~~function . 
//*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*

// Get all the "Calculate" buttons
const buttons = document.querySelectorAll(".section-btn");

// Loop through the buttons and add a click event listener to each one
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the ID of the button and use it to select the corresponding result area
    const id = button.id.toLowerCase();
    const resultArea = document.querySelector(`.result-area#${id}`);

    // Display the result area by changing its display property to "block"
    resultArea.style.display = "flex";
  });
});