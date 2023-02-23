document.getElementById('apply-bg').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){

        friend.style.backgroundColor = '#df56ef';
    }
})

document.getElementById('center-third').addEventListener('click', function(){
    document.getElementById('third-friend').style.textAlign = 'center';

})

document.getElementById('add-new-friend').addEventListener('click', function(){
    const friendContainer = document.getElementById('friends-container');
    const newfriend = document.createElement('div');
newfriend.classList.add('friend');
    newfriend.innerHTML = `<h3 class="friend-name">New Friend</h3>
    <p>Quod reprehenderit ea tempore est!</p>`

    friendContainer.appendChild(newfriend);
})