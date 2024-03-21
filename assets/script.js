

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