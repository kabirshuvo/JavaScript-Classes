const mealDbApi = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    console.log(meals);

    //*step:1
    const mealsContainer = document.getElementById('meals-container');
   meals.forEach(meal => {
    console.log(meal);
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


mealDbApi();