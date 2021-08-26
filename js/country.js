const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

loadCountries();

const displayCountries = (countries) => {
    const countriesContainer = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country.capital);
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="countryDetails('${country.name}')">Detail</button>
        `;
        countriesContainer.appendChild(div);

    });
}

const countryDetails = (name) => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country => {
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
    <h4>${country.name}</h4>
    <p>Population: ${country.population}</p>
    <img height="auto" width="200px" src="${country.flag}">
    `;
}