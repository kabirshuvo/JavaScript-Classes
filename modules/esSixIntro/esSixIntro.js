document.getElementById('apply-bg').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){

        friend.style.backgroundColor = '#df56ef';
    }
})

document.getElementById('center-third').addEventListener('click', function(){
    document.getElementById('third-friend').style.textAlign = 'center';

})