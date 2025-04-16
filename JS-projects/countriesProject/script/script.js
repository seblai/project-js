const container = document.querySelector('#container');
const search = document.querySelector('#search');
const btn = document.querySelector('#btn');
const country = document.querySelector('#country');
const flagImg = document.querySelector('#flag');
const capital = document.querySelector('#capital');
const population = document.querySelector('#population');
const lang = document.querySelector('#lang');
const status = document.querySelector('#status');


async function getCountry(countryName) {
    try {
        const url = `https://restcountries.com/v3.1/name/${countryName}?fields=name,flags,capital,population,languages`;
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error('There was an error fetching the URL');
        }
        const details = await res.json();

        status.textContent = ""
        const info = details[0]
        console.log(info);
        country.innerHTML = info.name.common
        capital.innerHTML = `Capital: ${info.capital[0]}`
        flagImg.src = info.flags.png
        flagImg.alt = `${info.name.common}'s flag`
        population.innerHTML = `Population:${info.population}`

        const languagesList = Object.values(info.languages).join(', ');

        lang.innerHTML = `Languages: ${languagesList}`;
    }
    catch (error) {
        console.error('mistake', error); if (error) { status.textContent = "Country not found!" } if (!countryName) {
            status.textContent = 'Must enter country name!';
        }
    }
};

btn.addEventListener('click', () => {
    let country = search.value;

    getCountry(country);
});
