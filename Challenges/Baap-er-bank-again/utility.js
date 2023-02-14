//* Get Value From Input Field
function getValueFromInpuField(id){
  const input = document.getElementById(id);
  const inputString = input.value; 
  const value = parseFloat(inputString);
  input.value = '';
  return value;
}


//* Get Value From Text Element
function getValueFromTextElement(id){
    const element = document.getElementById(id);
    const elementString = element.innerText;
    const value = parseFloat(elementString);
    return value;
}



//* Set Value as Text Element
function setValueTextElement(id, value){
    const element = document.getElementById(id);
    element.innerText = value;
    
}
