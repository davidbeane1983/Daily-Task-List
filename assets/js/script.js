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
