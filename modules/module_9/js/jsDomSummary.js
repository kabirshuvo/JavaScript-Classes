// *for learning Purpose

function handleOnClick(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Handled by function attached on onclick attribute';
}

// *for We will use this most of the time
document.getElementById('will-use-this').addEventListener('click', function(){
const handler = document.getElementById('handler-status');
handler.innerText ='Jare Ja, Ja Ja Vule, Shekhecish Ja Shob Ja vule';
});

// *for We will use this most of the time (again);

document.getElementById('btn-update').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value; 
   
    const p = document.getElementById('input-text-display');
    p.innerText = inputText;
    inputField.value = '';
});
