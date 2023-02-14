
function updateInputNumber(isIncrease){
    const inputNumberField = document.getElementById('casing-number-count');
    const inputNumberString = inputNumberField.value; 
    const inputNumber = parseInt(inputNumberString);

    let newInputNumber;

    if(isIncrease === true){
         newInputNumber = inputNumber + 1;
    }
    else{
        newInputNumber = inputNumber - 1;
    }


    inputNumberField.value = newInputNumber;
}


document.getElementById('casing-plus-btn').addEventListener('click', function(){
    updateInputNumber(true);
});

document.getElementById('casing-minus-btn').addEventListener('click', function(){
    updateInputNumber(false);
});