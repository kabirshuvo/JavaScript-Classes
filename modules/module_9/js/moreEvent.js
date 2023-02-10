document.getElementById('btn-more').addEventListener('mousemove', function(){
console.log('Event Trigerd');
});

//* input field focus & blur eventListenner. 
// document.getElementById('text-field').addEventListener('focus', function(){
//     console.log('Event Trigerd focus');
// });
// document.getElementById('text-field').addEventListener('blur', function(){
//     console.log('Event Trigerd blur');
// });
document.getElementById('text-field').addEventListener('keyup', function(event){
    console.log(event.target.value);
});

