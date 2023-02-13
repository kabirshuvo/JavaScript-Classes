function getInputValueById(inputID){
    const input = document.getElementById(inputID);
    const inputFieldString = input.value;
    const inputValue = parseFloat(inputFieldString);
    input.value = '';

    return inputValue;
}


function getElementValueById(elementId){
    const Element = document.getElementById(elementId);
    const ElementString = Element.innerText;
    const Value = parseFloat(ElementString);

    return Value;
}

function setelEmentValue(elementId, newValue){
    const element = document.getElementById(elementId);
     element.innerText =  newValue;
}
