console.log('Contact Me .js')

function saveToLocalStorage(inputType) {
    const inputField = document.getElementById(`${inputType}-field`);
    localStorage.setItem(inputType, inputField.value);
  }

  function deleteFromLocalStorage(inputType) {
    localStorage.removeItem(inputType);
  }

  function clearLocalStorage() {
    localStorage.clear();
  }