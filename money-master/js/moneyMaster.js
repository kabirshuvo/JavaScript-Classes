//* Total Calculations Below;

function getIncomingValue(inputID){
    const incomingInput = document.getElementById(inputID);
    const incomingString = incomingInput.value; 
    const incomingValue = parseFloat(incomingString);
    incomingInput.value = '';
    return incomingValue;
}

function getTotalOutgoing(){
    const food = getIncomingValue('food');
    const rent = getIncomingValue('rent');
    const others = getIncomingValue('others');
    return food + rent + others;
}


document.getElementById('calculate-btn').addEventListener('click', function(){

    const totalIncoming = getIncomingValue('incoming-input');
    const totalOutgoing = getTotalOutgoing();
    const cashInHand = totalIncoming - totalOutgoing;

    const totalExpense = document.getElementById('total-expence');
    totalExpense.innerText = totalOutgoing;

    const restBalance = document.getElementById('rest-balance');
    restBalance.innerText = cashInHand;


    console.log(totalIncoming);
    console.log(totalOutgoing);
    console.log(cashInHand);
    
})
