const getData = new Promise((resolve, Reject) => {
    const num = Math.random()*10;
    //Math.random = a number form 0 to 1
    console.log(num);
    if(num < 5){
        resolve(1983);
    }
    else{

        Reject('No Data Available');
    }
})

//console.log(getData + 19);

getData
.then(data => console.log(data + 40))
.catch(err => console.error('ERR:', err))

