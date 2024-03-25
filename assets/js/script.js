// API keys and URLs
const weatherApiKey = '8a9ec15361cbfa604cbdb667ea99a47c';
const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&q=';
// const newsApiKey = 'pub_404933325ec8086ad3793fbdae8196582701a';
const newsApiUrl = 'https://newsdata.io/api/1/news?apikey=pub_404933325ec8086ad3793fbdae8196582701a&q=';

// DOM elements
const searchBox = document.querySelector('.search input');
const newsSearchBox = document.querySelector('.news-search input');
const searchBtn = document.querySelector('.search button');
const newsSearchBtn = document.querySelector('.news-search button');
const weatherIcon = document.querySelector('.weather-icon');
const newsImage = document.querySelector('.news-image');

let modalContainer;

// event listener for DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
  // modal setup
  const clearButton = document.getElementById('clear-modal-popup-btn');
  modalContainer = document.getElementById('modal-container'); 
  // Hide the modal by default
  modalContainer.style.display = 'none';

  // event listeners for modal buttons
  if (clearButton && modalContainer) {
    clearButton.addEventListener('click', () => {
      modalContainer.style.display = 'block';
    });
  }

  const closeButton = document.getElementById('close');
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      modalContainer.style.display = 'none';
    });
  }

  const cancelClearButton = document.getElementById('cancel-clear');
  if (cancelClearButton) {
    cancelClearButton.addEventListener('click', () => {
      modalContainer.style.display = 'none';
    });
  }

  const confirmClearButton = document.getElementById('confirm-clear');
  if (confirmClearButton) {
    confirmClearButton.addEventListener('click', () => {
        localStorage.removeItem("todoArray");
        document.getElementById("todo-list").innerHTML = "";
        modalContainer.style.display = 'none';
    });
  }
});

// function to fetch and display news
async function checkNews(topic) {
// fetch news data from the API using the provided topic
const response = await fetch(newsApiUrl + topic + '&language=en');
  // if the response status is 404 (not found), display an error message
  if (response.status == 404) {
    document.querySelector('.news-error').style.display = 'block';
    document.querySelector('.news').style.display = 'none';
  } else {
    // parse the response data as JSON
    var data = await response.json();
    // get the list of news articles from the response
    var results = data.results;
    // select a random article from the list
    var select = Math.floor(Math.random() * 10)
    var article = results[select];

    // display the selected article's title, source, image, description, and link
    document.querySelector('.news-title').innerHTML = article.title;
    document.querySelector('.news-source').innerHTML = article.source_url;
    if (article.image_url != null) {
      newsImage.src = article.image_url;
    }
    document.querySelector('.news-description').innerHTML = article.description;
    document.querySelector('.news-link').href = article.link;

    // display the news section
    document.querySelector('.news').style.display = 'block';
  }
}

// function to fetch and display weather
async function checkWeather(city) {
  // fetch the weather data from the API using the provided city
  const response = await fetch(weatherApiUrl + city + `&appid=${weatherApiKey}`);

  // if the response status is 404 (not found), display an error message
  if (response.status == 404) {
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
  } else {
    // parse the response data as JSON
    var data = await response.json();

    // display the city name, temp, humidity, and wind speed
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°F';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'mp/h';


    // set the weather icon based on the weather condition
    if (data.weather[0].main == 'Clouds') {
      weatherIcon.src = 'assets/images/images/clouds.png';
    } else if (data.weather[0].main == 'Clear') {
      weatherIcon.src = 'assets/images/images/clear.png';
    } else if (data.weather[0].main == 'Rain') {
      weatherIcon.src = 'assets/images/images/rain.png';
    } else if (data.weather[0].main == 'Drizzle') {
      weatherIcon.src = 'assets/images/images/drizzle.png';
    } else if (data.weather[0].main == 'Mist') {
      weatherIcon.src = 'assets/images/images/mist.png';
    }

    // display the weather section
    document.querySelector('.weather').style.display = 'block';
  }
}

// event listener for the weather search button
searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value);
});

// event listener for the news search button
newsSearchBtn.addEventListener('click', (event) => {
  // prevent the default form submission behavior
  event.preventDefault();
  // call the checkNews function with the value from the news search box
  checkNews(newsSearchBox.value);
});

// Function to get the current date in the desired format
function getCurrentDate() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const month = months[currentDate.getMonth()];
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();

  return `${dayOfWeek}, ${month} ${date}, ${year}`;
}
// Update the date element with the current date
function updateDate() {
  document.getElementById('date').innerHTML = getCurrentDate();
}

// Update the date initially
updateDate();

// Update the date every 24 hours
setInterval(updateDate, 24 * 60 * 60 * 1000);

// Update the date element with the current date
document.getElementById('date').innerHTML = getCurrentDate();

// Update the date element with the current date
document.getElementById('date').innerHTML = getCurrentDate();

// Update the date initially
updateDate();

// Update the date every 24 hours
setInterval(updateDate, 24 * 60 * 60 * 1000);

// Update the date element with the current date
document.getElementById('date').innerHTML = getCurrentDate();

// Update the date element with the current date
document.getElementById('date').innerHTML = getCurrentDate();

// get the elements needed for managing the todo list
var inputValue = document.getElementsByClassName("remove");
var addInput = document.querySelector("#addBtn");
var addBtn = document.querySelector("#myForm");
// retrieve the todoArray from localStorage or initialize it as empty
var todoArray = JSON.parse(localStorage.getItem("todoArray"))||[];
var items = todoArray;
 
//  function to add items to the todo list
function addLists(event) {
  // prevent the default form submission behavior
  event.preventDefault();
  // check if the input value is empty
  if (addInput.value === "") {
    console.log("empty");
  } else {
    console.log(addInput.value);
 
    // Save the string to localStorage
    var todoArray = JSON.parse(localStorage.getItem("todoArray"))||[];
    todoArray.push({text:addInput.value,id:Math.floor(Math.random()*999)});
    var string = JSON.stringify(todoArray);
    localStorage.setItem("todoArray", string);
    createLi()
    console.log("string",string);
    addInput.value = "";
  }
}
 
// function to create and display the list items
function createLi(){
  
  // get the <ol> element by id
  var ol = document.getElementById("todo-list");
  
  //clear the existing content of the <ol> element
  ol.innerHTML = "";
  
  // retrieve the todoArray from localStorage or initialize it as an empty array
  var todoArray = JSON.parse(localStorage.getItem("todoArray"))||[];

  // loop through the todoArray and create a new <li> element for each item
  for(let i=0;i<todoArray.length;i++){
    var li = document.createElement("li");
    var spanTag = document.createElement("span");
    const newButton = document.createElement("button");
    newButton.textContent = "Remove"; // Set the text content of the button
 
    spanTag.innerText= todoArray[i].text
    // Add any additional attributes or styles to the button if needed
    newButton.setAttribute("id",todoArray[i].id);
    newButton.classList.add("btn", "btn-primary");
 
    // Add a click event listener to the button
    newButton.addEventListener("click", deleteElement);
    li.append(spanTag)
    li.append(newButton);
    ol.appendChild(li);
  }
 
}

// add list when clicked on add item button
addBtn.addEventListener("submit", addLists);
 
// console.log("Updated array:", numbers);
function deleteElement(event) {
  // Sample array of numbers
   console.log(event.target);
   var deleteId = event.target.getAttribute("id")
   var tempArr = [];
   var todoArray = JSON.parse(localStorage.getItem("todoArray"))||[];
   for(let i=0;i<todoArray.length;i++){
    if(todoArray[i].id != deleteId){
      tempArr.push(todoArray[i]);
    }
   }
   localStorage.setItem("todoArray",JSON.stringify(tempArr));
   createLi();
}
 
createLi();