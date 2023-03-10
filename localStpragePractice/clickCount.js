// const clickCount = () => {
//     let count = 0;
//     count ++; 
//     document.getElementById("clickCount").innerText = count;
//     }




let count = 0;
document.getElementById('clickCount-btn').addEventListener('click', function (){
    console.log('btn-clicked');
    
    count+=1 ; 
    document.getElementById("clickCount").innerText = count;

    
} )

const 