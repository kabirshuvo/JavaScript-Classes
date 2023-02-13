document.getElementById('withdraw-btn').addEventListener('click', function(){
    
const newWithdrawAmmount = inputValue('new-withdraw');
const previousWithdrawAmmount = elementValue('withdraw-total');
const totalWithdraw = newWithdrawAmmount + previousWithdrawAmmount;


const previousBalance = elementValue('Balance-total');

const newBalance = previousBalance - newWithdrawAmmount;

if(newWithdrawAmmount > previousBalance){
    alert('not enough money');
    return;
}
if(isNaN(newWithdrawAmmount)){
    alert('provide valid number')
    return;
}

setElementValue('withdraw-total', totalWithdraw);
setElementValue('Balance-total', newBalance);
});