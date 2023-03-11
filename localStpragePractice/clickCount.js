let count = 0;
let storedCount = localStorage.getItem('count');
if(storedCount){
    count = parseInt(storedCount);
}
document.getElementById('clickCount').innerText = count;

document.getElementById('clickCount-btn').addEventListener('click', function (){
    console.log('btn-clicked');
    
    count++; 
    document.getElementById("clickCount").innerText = count;
    localStorage.setItem('count', count.toString());
    
} );


// ************
// // Retrieve the stored count value from local storage
// let storedCount = localStorage.getItem('count');
// // Parse the stored count value as an integer, or set it to 0 if it's not found
// let count = storedCount ? parseInt(storedCount) : 0;

// // Wait for the HTML document to finish loading and rendering
// document.addEventListener('DOMContentLoaded', function() {
//   // Set the initial value of the click count output element to the current count value
//   document.getElementById('clickCount').textContent = count;
// });

// // Add a click event listener to the click count button
// document.getElementById('clickCount-btn').addEventListener('click', function() {
//   // Increment the count value
//   count++;
//   // Update the text content of the click count output element with the new count value
//   document.getElementById('clickCount').textContent = count;
//   // Store the new count value in local storage
//   localStorage.setItem('count', count.toString());
// });
// ****************

//*************** */

// let count = 0;


// let storedCount = localStorage.getItem('count');
// if (storedCount) {
//   count = parseInt(storedCount);
// }


// document.getElementById('clickCount').innerText = count;

// // Add a click event listener to the click count button
// document.getElementById('clickCount-btn').addEventListener('click', function() {
//   // Increment the count value
//   count++;
//   // Update the text content of the click count output element with the new count value
//   document.getElementById('clickCount').innerText = count;
//   // Store the new count value in local storage
//   localStorage.setItem('count', count.toString());
// });