const apiKey = '8a9ec15361cbfa604cbdb667ea99a47c';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

if(response.status == 404){
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
}
else {
    var data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°F';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'mp/h';
    

    if(data.weather[0].main == 'Clouds') {
        weatherIcon.src = 'assets/images/images/clouds.png';
    }
    else if(data.weather[0].main == 'Clear') {
        weatherIcon.src = 'assets/images/images/clear.png';
    }
    else if(data.weather[0].main == 'Rain') {
        weatherIcon.src = 'assets/images/images/rain.png';
    }
    else if(data.weather[0].main == 'Drizzle') {
        weatherIcon.src = 'assets/images/images/drizzle.png';
    }
    else if(data.weather[0].main == 'Mist') {
        weatherIcon.src = 'assets/images/images/mist.png';
    }

    document.querySelector('.weather').style.display = 'block';
}

    
}

searchBtn.addEventListener('click', ()=> {
    checkWeather(searchBox.value);
})