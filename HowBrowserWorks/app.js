console.log('How Browser Works');

alert('How are you')

const showAlert = () => {
    alert('dosto, Taka Dhar Dite parbi?')
}

const somashDe = () => {
    const result = confirm('Amar Shomash De');
    console.log(result);
    if(result === true){
        alert('Duida Icecrime khawa')
    }
    else{
        //alert('Sajul Re Gia Ko')
        alert('amar shomash de')
    }
};

const getInfo = () => {
    //alert('')
    //confirm('')
   const name = prompt('Would you like to tell me your name');
   console.log(name);
   if(name === null){
    alert('নাম না দিলে হইবো না, দিতেই হবে')
   }
   else{
    alert('সু-স্বাগতম');
   }
};