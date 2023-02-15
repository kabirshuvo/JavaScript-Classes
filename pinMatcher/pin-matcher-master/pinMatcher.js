

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

document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailorMessage = document.getElementById('pin-failure');

    if(typedNumber === currentPin){
        
        pinSuccessMessage.style.display ='block';
        pinFailorMessage.style.display ='none';
    }
    else{
        
        pinFailorMessage.style.display ='block';
        pinSuccessMessage.style.display ='none';
    }

})

const category="pen"; 
const performer = category+"-teller";
console.log(performer);