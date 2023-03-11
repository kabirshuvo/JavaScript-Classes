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
    let storedData = {};
    for (let key in localStorage) {
      storedData[key] = localStorage.getItem(key);
    }
    const localStorageDataString = JSON.stringify(storedData);
    localStorage.setItem('localStorageData', localStorageDataString);
  }