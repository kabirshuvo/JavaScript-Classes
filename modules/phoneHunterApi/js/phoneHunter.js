const loadPhones = async() => {
    const URL = `https://openapi.programming-hero.com/api/phones?search=iphone`

    const res = await fetch(URL)
    const data = await res.json()
    
    displayPhone(data.data);

}

const displayPhone = phones =>{
    const phonesContainer = document.getElementById('phone-container');
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML =`
        <div class="card p-4">
        <img src="${phone.image}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">
            ${phone.slug}
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
        
        `;
        phonesContainer.appendChild(phoneDiv);
    })
}


loadPhones();