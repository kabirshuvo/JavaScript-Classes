document.getElementById('withdraw-btn').addEventListener('click', function(){
const newWithdrawAmmount = getInputValueById('new-withdraw');
const previousWithdrawAmmount = getElementValueById('withdraw-total');
const totalWithdraw = newWithdrawAmmount + previousWithdrawAmmount;
setelEmentValue('withdraw-total', totalWithdraw);
const previousBalance = getElementValueById('Balance-total');
const newBalance = previousBalance - newWithdrawAmmount;
setelEmentValue('Balance-total', newBalance);
});