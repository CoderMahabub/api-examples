const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals));
}

const displaySearchResult = (meals) => {
    // console.log(meals);
    const searchResult = document.getElementById('search-result');

    //Clear Data one between two
    searchResult.innerHTML = '';
    // searchResult.textContent = '';

    // show No result Found

    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail('${meal.idMeal}')" class="col">
            <div class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 300)}</p>
                </div>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}

const loadMealDetail = async mealId => {
    // console.log(mealId)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    const res = await fetch(url);
    const data = await res.json();
    displayMealDetail(data.meals)
}

const displayMealDetail = meal => {
    // console.log(meal);
    const mealDetails = document.getElementById('meal-detail');
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <div class="card">
            <img width="100px" src="${meal.strMealThumb}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p> ${meal.strInstructions.slice(0, 300)}</p>
                <a href="${meal.strYoutube}" class="btn btn-primary">Video Link</a>
            </div>
        </div>
    `;
    mealDetails.appendChild(div);
}