const loadData = async () => {
    const URL = 'https://forbes400.onrender.com/'
    try {
        const response = await fetch(URL);
        const jsonData = await response.json();
        console.log(jsonData);
    }
    catch (error){
            console.log('error', error);
    }
}


const displayDiary = () =>{
    const displayContainer = document.getElementById('display-container');
    
}


loadData()