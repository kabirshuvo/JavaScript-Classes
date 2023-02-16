//*1. function to get the value of total incoming

function getIncomingValue(inputID){
    const incomingInput = document.getElementById(inputID);
    const incomingString = incomingInput.value; 
    const incomingValue = parseFloat(incomingString);
    incomingInput.value = '';
    return incomingValue;
}
//*2. Function to get the value of total outgoing

function getTotalOutgoing(){
    const food = getIncomingValue('food');
    const rent = getIncomingValue('rent');
    const others = getIncomingValue('others');
    return food + rent + others;
}

//*3. function to get the value of total savings

function getSavingsFrom(inputID){
    const savingsFromInput = document.getElementById(inputID);
    const savingsInputString = savingsFromInput.innerText;
    const savingsFromValue = parseFloat(savingsInputString);
    
    return savingsFromValue;
}
    
//*4. execution to display the value of total expense and cash in hand

document.getElementById('calculate-btn').addEventListener('click', function(){

    const totalIncoming = getIncomingValue('incoming-input');
    const totalOutgoing = getTotalOutgoing();
    const cashInHand = totalIncoming - totalOutgoing;

    const totalExpense = document.getElementById('total-expence');
    totalExpense.innerText = totalOutgoing;

    const restBalance = document.getElementById('rest-balance');
    restBalance.innerText = cashInHand;
    
})

//*5. function to get the ammount of savings 

function mySavings(){
    const restBalance = getSavingsFrom('rest-balance'); 
    const savingsInput = getIncomingValue('save-input');
    const sevings = (restBalance * savingsInput) / 100;

    return sevings;

}
//*6. function to get the remaining balance

function remainingBalance(){
    const restBalance = getSavingsFrom('rest-balance');
    const mySavings = getSavingsFrom('savings-ammount');
    const remainingBalance = restBalance - mySavings;

    return remainingBalance;
}
//*7. execution to display the total savings and remaining balance 

document.getElementById('save-btn').addEventListener('click', function(){

        const savingsOutput = document.getElementById('savings-ammount');
        savingsOutput.innerText = mySavings();

        const remainingBalanceOutput = document.getElementById('balance-remaining');
        remainingBalanceOutput.innerText = remainingBalance();

    })
    