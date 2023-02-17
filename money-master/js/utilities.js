// Function to get the value of total incoming
function getIncomingValue(inputID) {
    const incomingInput = document.getElementById(inputID);
    const incomingString = incomingInput.value;
    const incomingValue = parseFloat(incomingString);
    
    // Check if incoming value is negative or not a number
    if (incomingValue < 0 || isNaN(incomingValue)) {
      alert("Please enter a valid incoming value");
      incomingInput.value = '';
      return 0;
    }
    
    incomingInput.value = '';
    return incomingValue;
  }
  
  // Function to get the value of total outgoing
  function getTotalOutgoing() {
    const food = getIncomingValue('food');
    const rent = getIncomingValue('rent');
    const others = getIncomingValue('others');
    
    const totalOutgoing = food + rent + others;
    
    // Check if total outgoing is greater than total incoming
    if (totalOutgoing > totalIncoming) {
      alert("Total outgoing cannot be greater than total incoming");
      return 0;
    }
    
    return totalOutgoing;
  }
  
  // Function to get the value of total savings
  function getSavingsFrom(inputID) {
    const savingsFromInput = document.getElementById(inputID);
    const savingsInputString = savingsFromInput.innerText;
    const savingsFromValue = parseFloat(savingsInputString);
    
    // Check if savings value is negative or not a number
    if (savingsFromValue < 0 || isNaN(savingsFromValue)) {
      alert("Please enter a valid savings value");
      return 0;
    }
    
    return savingsFromValue;
  }
      
  // Execution to display the value of total expense and cash in hand
  document.getElementById('calculate-btn').addEventListener('click', function() {
    const totalIncoming = getIncomingValue('incoming-input');
    const totalOutgoing = getTotalOutgoing();
    const cashInHand = totalIncoming - totalOutgoing;
  
    const totalExpense = document.getElementById('total-expence');
    totalExpense.innerText = totalOutgoing;
  
    const restBalance = document.getElementById('rest-balance');
    restBalance.innerText = cashInHand;
  })
  
  // Function to get the amount of savings 
  function mySavings() {
    const restBalance = getSavingsFrom('rest-balance'); 
    const savingsInput = getIncomingValue('save-input');
    const savings = (restBalance * savingsInput) / 100;
  
    // Check if savings value is greater than remaining balance
    if (savings > restBalance) {
      alert("Savings cannot be greater than remaining balance");
      return 0;
    }
    
    return savings;
  }
  
  // Function to get the remaining balance
  function remainingBalance() {
    const restBalance = getSavingsFrom('rest-balance');
    const mySavings = getSavingsFrom('savings-ammount');
    const remainingBalance = restBalance - mySavings;
  
    return remainingBalance;
  }
  
  // Execution to display the total savings and remaining balance 
  document.getElementById('save-btn').addEventListener('click', function() {
    const savingsOutput = document.getElementById('savings-ammount');
    savingsOutput.innerText = mySavings();
  
    const remainingBalanceOutput = document.getElementById('balance-remaining');
    remainingBalanceOutput.innerText = remainingBalance();
  })