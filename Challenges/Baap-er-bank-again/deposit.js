document.getElementById('deposit-btn').addEventListener('click', function(){
const newDepositAmmount = getValueFromInpuField('new-deposit');
const previousAmmount = getValueFromTextElement('deposit-total');
const totalDeposit = newDepositAmmount + previousAmmount;
if(isNaN(newDepositAmmount)){
    alert('please input Valid Ammount in number');
    return;
}

setValueTextElement('deposit-total', totalDeposit);
const previousBalance = getValueFromTextElement('Balance-total');
const currentBalance = previousBalance + newDepositAmmount;
setValueTextElement('Balance-total', currentBalance);
});