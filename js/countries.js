const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(countries => displayCountries(countries))
}
loadCountries();

const displayCountries = (countries) => {

    /* for (const country of countries) {
        console.log(country);
    } */
    // As they provide countries info as an array, we can use forEach to do the same work;
    const countriesContainer = document.getElementById('countries');
    countries.forEach(country => {
        console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        const h3 = document.createElement('h3');
        h3.innerText = country.name;
        div.appendChild(h3);
        const p = document.createElement('p');
        p.innerText = country.capital;
        div.appendChild(p);
        countriesContainer.appendChild(div);
    });
}