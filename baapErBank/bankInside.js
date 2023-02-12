document.body.style.backgroundColor ='#333'
//Deposit Section
document.getElementById('deposit-btn').addEventListener('click', function(){
    const dipositField = document.getElementById('please-deposite');
    const dipositAmmount = dipositField.value;
    console.log(dipositAmmount);
// Here I got the diposit ammount 
    const depositTotalElement = document.getElementById('total-diposit');
    const depositTotal = depositTotalElement.innerText;
    console.log(depositTotal);
    depositTotalElement.innerText = dipositAmmount;
});



//Withdraw Section

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('emmergency-money');
    const withdrawAmmount = withdrawField.value;
    console.log(withdrawAmmount);
    // Here I got the withdray ammount
    const withdrawTotalElement = document.getElementById('total-withdraw');
    const withdrawTotal = withdrawTotalElement.innerText;
    withdrawTotalElement.innerText = withdrawAmmount;
    console.log(withdrawTotal);
});