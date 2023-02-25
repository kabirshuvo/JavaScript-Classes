const loadPhones = async() => {
    const URL = `https://openapi.programming-hero.com/api/phones?search=iphone`

    const res = await fetch(URL)
    const data = await res.json()
    
    displayPhone(data.data);

}

const displayPhone = phones =>{
    const phonesContainer = document.getElementById('phone-container');
    phones.forEach(phone => {
        
    })
}


loadPhones();