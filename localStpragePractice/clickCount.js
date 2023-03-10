let count = 0;
let storedCount = localStorage.getItem('count');
if(storedCount){
    count = parseInt(storedCount);
}
document.getElementById('clickCount-btn').addEventListener('click', function (){
    console.log('btn-clicked');
    
    count+=1 ; 
    document.getElementById("clickCount").innerText = count;
    localStorage.setItem('count:', count);
    
} );