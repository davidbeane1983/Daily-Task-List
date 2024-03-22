const weatherApiKey = '8a9ec15361cbfa604cbdb667ea99a47c';
const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&q=';
// const newsApiKey = 'pub_404933325ec8086ad3793fbdae8196582701a';
const newsApiUrl = 'https://newsdata.io/api/1/news?apikey=pub_404933325ec8086ad3793fbdae8196582701a&q=';

const searchBox = document.querySelector('.search input');
const newsSearchBox = document.querySelector('.news-search input');
const searchBtn = document.querySelector('.search button');
const newsSearchBtn = document.querySelector('.news-search button');
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
    const response = await fetch(weatherApiUrl + city + `&appid=${weatherApiKey}`);

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

var inputValue = document.getElementsByClassName("remove");
var addInput = document.querySelector("#addBtn");
var addBtn = document.querySelector("#myForm");
var todoArray = JSON.parse(localStorage.getItem("todoArray"))||[];
var items = todoArray;
var item 
 
 
  document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the item with the key 'myKey' from local storage
 
    // JSON string to be parsed
    const jsonString = todoArray;
 
    // Parse the JSON string into a JavaScript object
    //const to = JSON.parse(todoArray);
  });
 
 
function addLists(event) {
  event.preventDefault();
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
    addInput.value=""
  }
}
 
function createLi(){
  var ol = document.getElementById("todo-list");
  //createBtn(li);
  ol.innerHTML=""
  var todoArray = JSON.parse(localStorage.getItem("todoArray"))||[];
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
 
// var removetext =
// add list when clicked on add item button
addBtn.addEventListener("submit", addLists);
 
 
 
 
 
 
  // console.log("Updated array:", numbers);
function deleteElement(event) {
  // Sample array of numbers
   console.log(event.target)
   var deleteId = event.target.getAttribute("id")
   var tempArr = []
   var todoArray = JSON.parse(localStorage.getItem("todoArray"))||[];
   for(let i=0;i<todoArray.length;i++){
    if(todoArray[i].id != deleteId){
      tempArr.push(todoArray[i])
    }
   }
   localStorage.setItem("todoArray",JSON.stringify(tempArr))
   createLi()
 
}
 
createLi()

