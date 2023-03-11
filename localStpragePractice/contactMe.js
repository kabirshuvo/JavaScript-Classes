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

//   ********2nd Style********
// const saveToLocalStorage = (inputType) => {
//     const inputField = document.getElementById(`${inputType}-field`);
//     localStorage.setItem(inputType, inputField.value);
//   }

//   const deleteFromLocalStorage = (inputType) => {
//     localStorage.removeItem(inputType);
//   }

//   const clearLocalStorage = () => {
//     localStorage.clear();
//   }

//   const nameSendBtn = document.getElementById('name-send');
//   const nameDeleteBtn = document.getElementById('name-delete');
//   const emailSendBtn = document.getElementById('email-send');
//   const emailDeleteBtn = document.getElementById('email-delete');
//   const messageSendBtn = document.getElementById('message-send');
//   const messageDeleteBtn = document.getElementById('message-delete');
//   const resetBtn = document.getElementById('reset-btn');

//   nameSendBtn.addEventListener('click', () => saveToLocalStorage('name'));
//   nameDeleteBtn.addEventListener('click', () => deleteFromLocalStorage('name'));
//   emailSendBtn.addEventListener('click', () => saveToLocalStorage('email'));
//   emailDeleteBtn.addEventListener('click', () => deleteFromLocalStorage('email'));
//   messageSendBtn.addEventListener('click', () => saveToLocalStorage('message'));
//   messageDeleteBtn.addEventListener('click', () => deleteFromLocalStorage('message'));
//   resetBtn.addEventListener('click', clearLocalStorage);
//  *****************