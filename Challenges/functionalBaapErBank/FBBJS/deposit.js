
document.getElementById('deposit-btn').addEventListener('click', function(){
const newDeposit = inputValue('new-deposit');
const previousDeposit = elementValue('deposit-total');
const totalDeposit = previousDeposit + newDeposit;
if(isNaN(newDeposit)){
    alert('provide valid number')
    return;
}
setElementValue('deposit-total', totalDeposit);
const previousBalance = elementValue('Balance-total');
const newBalance = previousBalance + newDeposit;



setElementValue('Balance-total', newBalance);

});