
//* Step Number 1: add Event Listener.
document.getElementById('post-btn').addEventListener('click', function(){
//* step number 2: get the comment inside the text area

    const commentBox = document.getElementById('new-comment');
    const newComment = commentBox.value; 

//* step number 3: set the comment inside the container    
//* step 3.1: get the comment container (where the comment will appare)
const comments = document.getElementById('comments');
            //* step 3.2: create the tag how the text will display
const p = document.createElement('p');
            //* step 3.3: Set the text of the comment as innerText of the p tag
p.innerText = newComment;
            //* step 3.4: add the p tag in that div by using appendChild.
comments.appendChild(p);

            //* Step 4: clear the text area
commentBox.value = '';
});