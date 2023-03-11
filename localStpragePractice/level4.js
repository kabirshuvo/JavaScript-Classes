const saveToLocalStorage = (inputType) => {
    const inputField = document.getElementById(`${inputType}-field`);
    localStorage.setItem(inputType, inputField.value);

    inputField.value = '';
     
}

const removeStorage = (inputType) => {
    localStorage.removeItem(inputType);
}

const cleareStorage = () => {
    localStorage.clear();
}

const storeLocalStorageData = () => {
    const name = document.getElementById('name-field').value;
    const email = document.getElementById('email-field').value;
    const message = document.getElementById('message-field').value;
    const storedData = { name, email, message };
    const storedDataString = JSON.stringify(storedData);
    localStorage.setItem('storedData', storedDataString);
  }

  