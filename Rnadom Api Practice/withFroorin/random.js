
//* if 
const getData = async () => {
    //Random Dog Api
    const URL = 'https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=Danny%20Welbeck'

    try{
        console.log('load Start')

        const res = await fetch(URL);
        const data = await res.json();
        console.log(data);
        console.log('load End')
    } catch (error){
        console.log(error);
    }
}

const displayMe = () =>{
   console.log(data.player)
}

getData();
