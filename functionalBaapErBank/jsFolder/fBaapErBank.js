//* Deposit-Section

document.getElementById('deposit-btn').addEventListener('click', function(){
    const dipositField = document.getElementById('new-deposit');
    const newDipositAmmountString = dipositField.value;
    //Setting the initial value an empty string;
    dipositField.value ='';
    const  newDipositAmmount = parseFloat(newDipositAmmountString);
    // I got the new deposit ammount here

    const previousDepositElement = document.getElementById('deposit-total');
    const previousDepositAmmountString = previousDepositElement.innerText;
    const previousDepositAmmount = parseFloat(previousDepositAmmountString);
    // Got the previous Ammount
 
    const inTotalDeposit = previousDepositAmmount + newDipositAmmount;
    previousDepositElement.innerText = inTotalDeposit;
    
    console.log(inTotalDeposit);
});






//* withdraw-Section

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('new-withdraw');
    const newWithdrawAmmountString = withdrawField.value;
    const newWithdrawAmmount = parseFloat(newWithdrawAmmountString);
    withdrawField.value = '';
    // I got the new withdraw Ammount;



});