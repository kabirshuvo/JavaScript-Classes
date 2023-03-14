
// *Save to localstorage function...

const saveToLocalStorage = (inputType) => {
    const inputField = document.getElementById(`${inputType}-field`);
    localStorage.setItem(inputType, inputField.value);

    inputField.value = '';
     
}

// *Remove from local stoder data function

const removeStorage = (inputType) => {
    localStorage.removeItem(inputType);
}

// *Cleare localStorage function

const cleareStorage = () => {
    localStorage.clear();
}


// *Storing local storage data function

const storeLocalStorageData = () => {
    const name = document.getElementById('name-field').value;
    const email = document.getElementById('email-field').value;
    const message = document.getElementById('message-field').value;
    const person = { name, email, message };
    const storedDataString = JSON.stringify(person);
    localStorage.setItem('person', storedDataString);
  }

  