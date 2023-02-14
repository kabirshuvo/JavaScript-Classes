
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

    return newInputNumber;
}

function updateOutputValue(newInputNumber){
    const inputNumbersPrice = newInputNumber * 59;
    const outputNumberPrice = document.getElementById('single-casing-price');
    outputNumberPrice.innerText = inputNumbersPrice;
}

document.getElementById('casing-plus-btn').addEventListener('click', function(){
   const newInputNumber = updateInputNumber(true);

   updateOutputValue(newInputNumber);
});

document.getElementById('casing-minus-btn').addEventListener('click', function(){
    const newInputNumber = updateInputNumber(false);
    updateOutputValue(newInputNumber);
});