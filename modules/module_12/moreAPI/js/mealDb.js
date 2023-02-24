const mealDbApi = (searchText) => {
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
    .catch((err) => {
      console.log(err)
  })
}

const displayMeals = meals => {
  //  console.log(meals);
    //*step:1
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = '';
    meals.forEach(meal => {
    //console.log(meal);
    //*step2: create child for 
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('col');

    //*step3:
    mealDiv.innerHTML = `
    <div class="card">
              <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions}
                </p>
                <button
                onclick="loadMealDetails2(${meal.idMeal})"
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#mealDetails"
      >
        Details
      </button>
              </div>
        </div>
    `;
    //*step4
    mealsContainer.appendChild(mealDiv);
   })
}

const searchMeal = () =>{
    const searchText = document.getElementById('search-field').value;
    // search meals

    console.log(searchText);
    mealDbApi(searchText);
}

const loadMealDetails = idMeal => {
  const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  console.log(URL)
  fetch(URL)
  .then(res => res.json())
  .then(data => displayMealDetails(data.meals[0]))
  .catch(err => {
    console.log(err)
  })

}

//* Async Await 

const loadMealDetails2 = async(idMeal) =>{
  const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`

  try{
    const res = await fetch(URL);
    const data = await res.json();
    displayMealDetails(data.meals[0])
    }
  catch(error){
    console.log(error);

  }


}


const displayMealDetails = meal => {
    document.getElementById('mealDetailsLabel').innerText = meal.strMeal;

    const mealDetails = document.getElementById('mealDetailBody');
    mealDetails.innerHTML = `
    <img class="img-fluid" src="${meal.strMealThumb}" alt=""> 
    
    `
}
mealDbApi('rice');