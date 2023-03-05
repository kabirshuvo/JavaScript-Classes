console.log(1);
console.log(2);

//* i++ VS ++i
//* x++ VS ++x
let num = 15
const intervalId =  setInterval(()=>{
    console.log(++num)
    if(num === 19){
        clearInterval(intervalId)
    }
    // else {

    // }
}, 1000)
console.log(4);
console.log(5);
console.log(6);
console.log(7);