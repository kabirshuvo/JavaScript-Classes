const getDogs = async () => {
    //Random Dog Api
    const URL = `{"fileSizeBytes":3356271,"url":"https://random.dog/5d433414-7e79-4d14-9951-640cb7a85c3f.mp4"}`

    try{
        console.log('load Start')

        const res = await fetch(URL);
        const data = await res.json();

        console.log(data.slice(0, 10));

        console.log('load last')
    } catch (error){
        console.log(error);
    }
}

const displayDogs = (dogs) => {

    console.log(dogs);

    const dogsContainer = document.getElementById('dogs-container').addEventListener('click', function(){
        dogs.forEach(dog =>{
            
        console.log(dog); 

            const imgUrl = dogs.imgUrl ? dogs.imageurl: 'No img found'

        const displayDiv = document.createElement('div');
        displayDiv.classList.add('')
        displayDiv.innerHTML = `
        <img src="${imgUrl}">
        `;
        dogsContainer.appendChild(displayDiv);
        
        })

        
    });
    

}

getDogs();
