document.body.style.backgroundColor ='#333'
//Deposit Section
document.getElementById('deposit-btn').addEventListener('click', function(){
    const dipositField = document.getElementById('please-deposite');
    const newDipositAmmountString = dipositField.value;
    const newDipositAmmount = parseFloat(newDipositAmmountString);
    
   
// Here I got the diposit ammount 
    const depositTotalElement = document.getElementById('total-diposit');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

  // here is the inTotalDeposite  
    const inTotalDeposit = previousDepositTotal + newDipositAmmount; 

    depositTotalElement.innerText = inTotalDeposit;

    // adding inTotal Deposit with balance
    const currentBalance = document.getElementById('balance');
    const previousBalanceString = currentBalance.innerText;
    const previousBalance = parseFloat(previousBalanceString) ;

    const newTotalBalance = newDipositAmmount + previousBalance;

    currentBalance.innerText = newTotalBalance;

    console.log(newTotalBalance);
// Adding 

//* Clear the deposit field
dipositField.value = '';
});



//Withdraw Section

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('emmergency-money');
    const newWithdrawAmmountString = withdrawField.value;
    const newWithdrawAmmount = parseFloat(newWithdrawAmmountString);
    //* clear the withdraw field
 withdrawField.value = '';

    if(isNaN(newWithdrawAmmount)){
        alert('please provide a valid ammount');
        return;
    }
   
    // Here I got the withdray ammount
    const withdrawTotalElement = document.getElementById('total-withdraw');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

   

// minus withdray from balance 
const currentBalance = document.getElementById('balance');
const previousBalanceString = currentBalance.innerText;
const previousBalance = parseFloat(previousBalanceString) ;

 

if(newWithdrawAmmount > previousBalance){
    alert('Not Enough Munnny');
    return;
}
    
const inTotalWithdraw = newWithdrawAmmount + previousWithdrawTotal; 

withdrawTotalElement.innerText = inTotalWithdraw;

const newTotalBalance = previousBalance - newWithdrawAmmount;

currentBalance.innerText = newTotalBalance;

    console.log(newTotalBalance);

   
});