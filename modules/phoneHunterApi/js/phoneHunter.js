const loadPhones = async(searchText, dataLimit) => {
    const URL = `https://openapi.programming-hero.com/api/phones?search=${searchText}`

    const res = await fetch(URL)
    const data = await res.json()
    
    displayPhone(data.data, dataLimit);

}

const displayPhone = (phones, dataLimit) =>{
    const phonesContainer = document.getElementById('phone-container');
    phonesContainer.textContent = '';
    //display 12 phones
    const showAll = document.getElementById('show-all');
    if(dataLimit && phones.length > 12){
      phones = phones.slice(0, 12);
      showAll.classList.remove('d-none');
    } else {
      showAll.classList.add('d-none');
    }

    //display No Phones Found
    const noPhone = document.getElementById('no-found-message');

    if(phones.length === 0){
        noPhone.classList.remove('d-none');
    } 
    else{
        noPhone.classList.add('d-none');
    }

    //display all phones
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML =`
        <div class="card p-4">
        <img src="${phone.image}" class="card-img-top p-3" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
        </div>
        <div class="card-footer">
        <!-- Button trigger modal -->
        <button onclick="loadPhoneDetails('${phone.slug}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneModal">
          Launch demo modal
        </button>
        </div>
      </div>
        
      
        `;
        phonesContainer.appendChild(phoneDiv);
    });
    // stop loader
    toggleSpinner(false);
}
const processSearch = (dataLimit) => {
  toggleSpinner(true)
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText, dataLimit);
}
//handle search button clicked
document.getElementById('search-btn').addEventListener('click', function(){
  //start loader
  processSearch(12);
  
});


// search input field enter 
document.getElementById("search-field").addEventListener("keyup", function(e) {
  if (e.key === "Enter") { 
    processSearch(12);
  }
});

const toggleSpinner = isLoading => {
  const loaderSection = document.getElementById('loader');
  if(isLoading){
    loaderSection.classList.remove('d-none')
  } else{
    loaderSection.classList.add('d-none');
  }
}
//Not the best way to show all

document.getElementById('btn-show-all').addEventListener('click', function(){
  processSearch();
})

const loadPhoneDetails = async id => {
  const URL = ` https://openapi.programming-hero.com/api/phone/${id}`;
  const res = await fetch(URL);
  const data = await res.json();
  displayPhoneDetails(data.data);
}

const displayPhoneDetails = phone => {
      console.log(phone.mainFeatures.storage);
      const modalTitle = document.getElementById('phoneModalTitle')
      modalTitle.innerHTML = phone.name;
      const phoneModalDetails = document.getElementById('phone-body-details');
      phoneModalDetails.innerHTML = `
      <p>Release Date: ${phone.releaseDate ? phone.releaseDate : 'No Release Date Found'}</p>
      <p>Storage: ${phone.mainFeatures ? phone.mainFeatures.storage: 'no storage info'} </p>
      <p>Bluetooth: ${phone.others ? phone.others.Bluetooth : 'no Bluetooth Info' }</p>
      `;
}
 loadPhones('apple');