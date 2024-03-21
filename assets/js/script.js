const weatherApiKey = '8a9ec15361cbfa604cbdb667ea99a47c';
const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&q=';
// const newsApiKey = 'pub_404933325ec8086ad3793fbdae8196582701a';
const newsApiUrl = 'https://newsdata.io/api/1/news?apikey=pub_404933325ec8086ad3793fbdae8196582701a&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
const newsImage = document.querySelector('.news-image');

async function checkNews(topic) {
    const response = await fetch(newsApiUrl + topic + '&language=en');

    if(response.status == 404) {
      document.querySelector('.news-error').style.display = 'block';
      document.querySelector('.news').style.display = 'none';
    } else {
      var data = await response.json();
      var results = data.results;
      var select = Math.floor(Math.random() * 10)
      var article = results[select];

      console.log(article);

      document.querySelector('.news-title').innerHTML = article.title;
      document.querySelector('.news-source').innerHTML = article.source_url;
      if(article.image_url != null) {
        newsImage.src = article.image_url;
      }
      document.querySelector('.news-description').innerHTML = article.description;
      document.querySelector('.news-link').href = article.link;

      document.querySelector('.news').style.display = 'block';
    }
}

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
});

newsSearchBtn.addEventListener('click', (event)=> {
    event.preventDefault();
    checkNews(newsSearchBox.value);
});

// create variables
//const toggleBtn = document.querySelector('#toggleBtn');
//const divList = document.querySelector('.listHolder');
//todo-entry-box
//addBtn
//







document.addEventListener("DOMContentLoaded", function(){
  const addInput = document.querySelector('#addBtn');
  const addBtn = document.querySelector('#todo-entry-box');
  
  function addLists(event) {
    event.preventDefault();
    if (addInput.value === '') {
      console.log ("empty")
    } else {
      console.log(addInput.value)
      var ol = document.getElementById ("todo-list");
      var li = document.createElement('li');
      li.innerHTML = addInput.value;
      addInput.value = '';
      ol.appendChild(li);
      //createBtn(li);
      
      
      
      
    }
  }
  
  // add list when clicked on add item button
  addBtn.addEventListener('click',addLists);

})




/* 
3. create action buttons
------------------------

// create variables
const listUl = document.querySelector('.list');
const lis = listUl.children;

function createBtn(li) {
  // create remove button
  const remove = document.createElement('button');
  remove.className = 'btn-icon remove';
  li.appendChild(remove);

  // create down button
  const down = document.createElement('button');
  down.className = 'btn-icon down';
  li.appendChild(down);

  // create up button
  const up = document.createElement('button');
  up.className = 'btn-icon up';
  li.appendChild(up);

  return li;
}

// loop to add buttons in each li
for (var i = 0; i < lis.length; i++) {
  createBtn(lis[i]);
}


/* 
4. enabling button actions (to move item up, down or delete)
------------------------------------------------------------
*/
/*
divList.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const button = event.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    if (button.className === 'btn-icon remove') {
      ul.removeChild(li);
    } else if (button.className === 'btn-icon down') {
      const nextLi = li.nextElementSibling;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
      }
    } else if (button.className === 'btn-icon up') {
      const prevLi = li.previousElementSibling;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }
  }
});*/

