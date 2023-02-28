function loadPosts(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}

/**
 **1: get the container element where I want to add the new elements 
 *  *2: create child element 
 * *3 set inner html
 * *4: appenchild
 */

function displayPosts(posts){
    const postsContainer = document.getElementById('posts-container');
    for(const post of posts){
        const postdiv = document.createElement('div');
        postdiv.classList.add('post');
        console.log(post);
        postdiv.innerHTML =` 
        <h4>User-${post.userId}</h4>
        <h5>Post:${post.title}</h5>
        <p>Post Description${post.body}</p>
        `;
        postsContainer.appendChild(postdiv);
    }
}


loadPosts();