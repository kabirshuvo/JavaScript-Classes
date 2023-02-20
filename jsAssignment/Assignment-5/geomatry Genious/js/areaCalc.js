//* 1. Triangle button clicked function

document.getElementById('triangle').addEventListener('click', function (){
   const display = document.getElementById('triangle-output');;
   display.innerText = triangleArea ();

 })

 //* 2. rectangle button clicked function
document.getElementById('rectangle').addEventListener('click', function (){
    const rectangleOutput = document.getElementById('rectangle-output');
    rectangleOutput.innerText = rectangleArea();
    
 })

 //* 3. parallelogram button clicked function
document.getElementById('parallelogram').addEventListener('click', function (){
    const parallelogramOutput = document.getElementById('parallelogram-output') ;
    parallelogramOutput.innerText = parallelogramArea();
    
 })

 //* 4. rhombus button clicked function
document.getElementById('rhombus').addEventListener('click', function (){
    const rhombusOutput = document.getElementById('rhombus-output');
    rhombusOutput.innerText = rhombusArea();
    
 })

 //* 5. pentagon button clicked function
document.getElementById('pentagon').addEventListener('click', function (){
    
    const pentagonOutput = document.getElementById('pentagon-output');

    pentagonOutput.innerText = pentagonArea();
    
 })

 //* 6. ellipse button clicked function
document.getElementById('ellipse').addEventListener('click', function (){

        const ellipseOutput = document.getElementById('ellipse-output');
        ellipseOutput.innerText = ellipseArea();
    
 })