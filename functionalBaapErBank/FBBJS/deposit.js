
document.getElementById('deposit-btn').addEventListener('click', function(){
const newDeposit = getInputValueById('new-deposit');
const previousDeposit = getElementValueById('deposit-total');
const totalDeposit = previousDeposit + newDeposit;
setelEmentValue('deposit-total', totalDeposit);
const previousBalance = getElementValueById('Balance-total');
const newBalance = previousBalance + newDeposit;
setelEmentValue('Balance-total', newBalance);

});