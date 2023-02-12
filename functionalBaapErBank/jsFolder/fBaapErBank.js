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
    
    // got the in total deposit
    const previousBalanceElement = document.getElementById('Balance-total');
    const previousBalanceAmmountString = previousBalanceElement.innerText;
    const previousBalanceAmmount = parseFloat(previousBalanceAmmountString);
    // got the previous balance

    const newTotalBalance = previousBalanceAmmount + newDipositAmmount;
    previousBalanceElement.innerText = newTotalBalance;
    console.log(inTotalDeposit);
});






//* withdraw-Section

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('new-withdraw');
    const newWithdrawAmmountString = withdrawField.value;
    const newWithdrawAmmount = parseFloat(newWithdrawAmmountString);
    withdrawField.value = '';
    // I got the new withdraw Ammount;

    const previousWithdrawElement = document.getElementById('withdraw-total');
    const previousWithdrawAmmountString = previousWithdrawElement.innerText;
    const previousWithdrawAmmount = parseFloat(previousWithdrawAmmountString);
    // got the previous Withdraw Ammount

    const inTotalWithdraw = previousWithdrawAmmount + newWithdrawAmmount;
    previousWithdrawElement.innerText = inTotalWithdraw;

    const previousBalanceElement = document.getElementById('Balance-total');
    const previousBalanceAmmountString = previousBalanceElement.innerText;
    const previousBalanceAmmount = parseFloat(previousBalanceAmmountString);
    // got the previous Balance 
    const newTotalBalance = previousBalanceAmmount - newWithdrawAmmount;

    previousBalanceElement.innerText = newTotalBalance;

});