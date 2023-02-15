

function getPit(){
    const pin = generatePin();
    const pinString = pin + "";
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPit();
    }
}


function generatePin(){
    const randomNumber = Math.round(Math.random()*10000);
    return randomNumber;

}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPit();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;

})
document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
             typedNumberField.value = '';
        }
        else if (number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainDigits = digits.join('');
            typedNumberField.value = remainDigits;
        }
    }
    else{
       
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
       
    }
})