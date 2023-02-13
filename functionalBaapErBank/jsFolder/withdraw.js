
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
    // got the previous Withdraw Ammount ^^^

    const inTotalWithdraw = previousWithdrawAmmount + newWithdrawAmmount;
    //display the intotal withdraw
    previousWithdrawElement.innerText = inTotalWithdraw;

    const previousBalanceElement = document.getElementById('Balance-total');
    const previousBalanceAmmountString = previousBalanceElement.innerText;
    const previousBalanceAmmount = parseFloat(previousBalanceAmmountString);
    // got the previous Balance 
    const newTotalBalance = previousBalanceAmmount - newWithdrawAmmount;

    previousBalanceElement.innerText = newTotalBalance;

});