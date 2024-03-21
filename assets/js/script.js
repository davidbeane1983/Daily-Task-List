<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function() {
  const addBtn = document.querySelector('#addBtn');
  const submit = document.getElementById("submit");
  const temp = document.getElementById("temp");
  const humidity = document.getElementById("humidity");
  const feels_like = document.getElementById("feels_like");
  const temp_max = document.getElementById("temp_max");
  const temp_min = document.getElementById("temp_min");
  const pressure = document.getElementById("pressure");
  

  // add list when clicked on add item button
  if (addBtn) {
    addBtn.addEventListener('click', addLists);
  }

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

  const divList = document.querySelector('.list');

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
  });

  // get latitude and longitude
  var lat = document.getElementById("lat").value;
  var lon = document.getElementById("lon").value;

  var api = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=0ee3713d06e3262bab7f50251486a437`;

  fetch(api)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      temp.textContent = data.list[0].main.temp;
      humidity.textContent = data.list[0].main.humidity;
      feels_like.textContent = data.list[0].main.feels_like;
      temp_max.textContent = data.list[0].main.temp_max;
      temp_min.textContent = data.list[0].main.temp_min;
      pressure.textContent = data.list[0].pressure;
      console.log(data);
    });

});

const divList = document.querySelector('.list');

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
});

// get latitude and longitude
var lat = 40.7128;
var lon = -74.0060;

const addInput = document.querySelector('#addBtn');
const addBtn = document.querySelector('#todo-entry-box');

function addLists(event) {
  event.preventDefault();
  if (addInput.value === '') {
    console.log("empty")
  } else {
    console.log(addInput.value)
    var ol = document.getElementById("todo-list");
    var li = document.createElement('li');
    li.innerHTML = addInput.value;
    addInput.value = '';
    ol.appendChild(li);
    //createBtn(li);
  }
}

// add list when clicked on add item button
if (addBtn) {
  addBtn.addEventListener('click', addLists);
}
=======
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
>>>>>>> 63d9106efa5d77802ff5a6b95f292c7e89e0d502

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

<<<<<<< HEAD
=======

/* 
4. enabling button actions (to move item up, down or delete)
------------------------------------------------------------
*/
/*
>>>>>>> 63d9106efa5d77802ff5a6b95f292c7e89e0d502
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
<<<<<<< HEAD
});
=======
});*/

>>>>>>> 63d9106efa5d77802ff5a6b95f292c7e89e0d502
