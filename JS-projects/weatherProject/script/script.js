const APIKEY = "5402c01f2d0013411231de02e72a6784";
const URL = `https://api.openweathermap.org/data/2.5/weather?appid=${APIKEY}&units=metric&q=`;
const cityName = document.getElementById('inputCity');
const button = document.querySelector('button');
const description = document.getElementById('description');
const temp = document.getElementById('temp');
const cloud = document.getElementById('cloud');
const wind = document.getElementById('wind');
const humidity = document.getElementById('humidity');
const info = document.getElementById('weatherInfo');
const errorM = document.getElementById('errorMessage');
const weatherIcon = document.getElementById('weatherIcon');
const cardsContainer=document.getElementById('cardsContainer');


function getWeather(city) {
    try {
        fetch(URL + city)
            .then((res) => res.json())
            .then((data) => {
                if (data.cod == 200) {
                    document.querySelector('h2').innerText = data.name + " , " + data.sys.country;
                    errorM.innerText="";
                    description.innerText = `Short description: ${data.weather[0].description}`;
                    temp.innerText = `Degrees: ${data.main.temp} Celsius`;
                    wind.innerHTML = `Wind speed: ${data.wind.speed} KM/h`;
                    humidity.innerHTML = `Humidity level: ${data.main.humidity} %`;
                    cloud.innerHTML = `Cloudiness level: ${data.clouds.all} %`;
                    const icon = data.weather[0].icon;
                    weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`
                    
                }else{
                    info.style.display="none";
                    errorM.innerText="City wasn't found... try again"
                }

            });
    }catch(error){console.log(error);
    }
}

function updateCard() {
    return

}

button.addEventListener('click', () => {
    info.style.display = "block";
    getWeather(cityName.value);
    document.querySelector('h2');
    updateCard()
})
// fetch(URL)
//     .then(response => response.json())
//     .then(data => {
//         const temp = data.main.temp;
//         const description = data.weather[0].description;
//         document.getElementById("weather").innerText = `weather: ${temp}°C, ${description}`;
//     })
//     .catch(error => console.error("error:", error));
