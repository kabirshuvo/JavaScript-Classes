const mealDbApi = (searchText) => {
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
  //  console.log(meals);

    //*step:1
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = '';
   meals.forEach(meal => {
   // console.log(meal);
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
              </div>
            </div>
    `;
    //*step4
    mealsContainer.appendChild(mealDiv);
   });
}


const searchMeal = () =>{
    const searchText = document.getElementById('search-field').value;
    // search meals

    console.log(searchText);
    mealDbApi(searchText);

}

mealDbApi('rice');


