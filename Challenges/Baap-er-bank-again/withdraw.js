document.getElementById('withdraw-btn').addEventListener('click', function(){
const withdraw = getValueFromInpuField('new-withdraw');
const previousWithdraw = getValueFromTextElement('withdraw-total');
const totalWithdraw = previousWithdraw + withdraw;
const balance = getValueFromTextElement('Balance-total');
const currentBalance = balance - withdraw;

if(isNaN(withdraw)){
    alert('Please Input a Valid Number');
    return;
}
if(withdraw > currentBalance){
    alert('not Enough Fund');
    return;
}
setValueTextElement('withdraw-total', totalWithdraw);

setValueTextElement('Balance-total', currentBalance);
});