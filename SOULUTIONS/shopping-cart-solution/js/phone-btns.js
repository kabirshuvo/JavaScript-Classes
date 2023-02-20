function updatePhoneNumber(isIncrease){
    const inputNumberField = document.getElementById('phone-number-count');
    const inputNumberString = inputNumberField.value; 
    const phoneNumber = parseInt(inputNumberString);

    let newPhoneNumbers;

    if(isIncrease === true){
         newPhoneNumbers = phoneNumber + 1;
    }
    else{
        newPhoneNumbers = phoneNumber - 1;
    }


    inputNumberField.value = newPhoneNumbers;

    return newPhoneNumbers;
}
function updatePhoneValue(newPhoneNumbers){
    const inputPhonePrice = newPhoneNumbers * 1219;
    const outputPhonePrice = document.getElementById('single-phone-price');
    outputPhonePrice.innerText = inputPhonePrice;
}


document.getElementById('phone-plus-btn').addEventListener('click', function(){
    const newPhoneNumbers = updatePhoneNumber(true);

   updatePhoneValue(newPhoneNumbers);
});


document.getElementById('phone-minus-btn').addEventListener('click', function(){
    const newPhoneNumbers = updatePhoneNumber(false);

    updatePhoneValue(newPhoneNumbers);
    });