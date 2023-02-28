const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
}

const displayUser = user => {
    const userImg = user.results[0].picture.thumbnail;
    document.getElementById('img').innerHTML = userImg;

    const genderTag = document.getElementById('gender');
    genderTag.innerHTML = user.results[0].gender;

    const name = user.results[0].name.first + ' ' + user.results[0].name.last;
    document.getElementById('name').innerHTML = name; 
   
    const userPhone = user.results[0].cell;
    document.getElementById('phone').innerHTML =userPhone;
    console.log(user.results[0].picture.thumbnail) ;



}


loadUser();



