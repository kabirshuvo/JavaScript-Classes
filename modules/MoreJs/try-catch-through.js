
function checkAge(){
   const ageField = document.getElementById('age');
   const ageText = ageField.value;
   //ageField.innerText = '';
  
   const errorTag = document.getElementById('error');

  

   
   try{
    const age = parseInt(ageText);
    
    if(isNaN(age)){
        throw "Please enter a number";
    }
    
    else if(age < 18){
        throw "Child Not Allowed"
    }
    else if(age > 30){
        throw 'Age Limit Restriction: You Are Over Aged'
    }
    
    errorTag.innerHTML = '';
   }
   catch(err){
    console.log('ERROR:', err)
    errorTag.innerHTML = 'ERROR:' + ' ' + err;
   }
   finally{
    console.log('ALL is WeLL')
   }
   console.log(19);
   
}
