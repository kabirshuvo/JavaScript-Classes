// *step-1
document.getElementById('login-submit-btn').addEventListener('click', function(){
    //*step-2 (always remember to use .value to get text from an input field)
    const emailField = document.getElementById('user-email');
    const email = emailField.value; 
 
    //* step-3 get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email, password);


// DANGER: Do not varify email password on the client side

    //* step-4 varify email password and user validation
    if(email === 'kabirshuvo19@gmail.com' && password === 'Xadu.life'){
        window.location.href = 'bankInside.html';
    }
    else{
        alert('Tui PasaVule Gesosh');
    }

});