const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = countries => {
    const countryContainer = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        // const h3 = document.createElement('h3');
        // h3.innerText = country.name;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}')">Detail Info</button>
        `;
        countryContainer.appendChild(div);
    });
}

loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
}
displayCountryDetail = countryDetail => {
    const countryDetailContainer = document.getElementById('country-detail');
    countryDetailContainer.textContent = '';
    const div = document.createElement('div')
    div.classList.add('country-detail');
    div.innerHTML = `
        <h2>${countryDetail.name}</h2>
        <img src="${countryDetail.flag}" alt="">
        <br>
        <b>Time Zone: ${countryDetail.timezones}</b>
        <p>Total Population: ${countryDetail.population}</p>
        `;
    countryDetailContainer.appendChild(div);
}