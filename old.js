// JavaScript Document
let listItems = document.querySelectorAll('li');
console.log(listItems);


//add event listner to each li using for loop
for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", checkIt);
}


//function that checks off the task once completed.
let close = document.getElementsByClassName("complete");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

let list = document.getElementById("taskList");
function checkIt() {
  list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');

    }
  }, false);
}

//BONUS MARKS: Add a new task to the list
 // allowing the inputed task to be added to the list once button id is trageted
function addItemToTheList() {
  let newItem = document.createElement("li");
  let input = document.getElementById("myInput");
  newItem.innerHTML = input.value;
  input.value = "";
  document.getElementById("taskList").appendChild(newItem);
  newItem.addEventListener('click', input);
}



// Initialize listener for current undone tasks
function init() {
  var unDoneItems = document.querySelector('ul');
  for (var i = 0; i < unDoneItems.length; i++) {
    undoneItems[i].addEventListener('click', done);
  }
}

//creating element to list the 2 and 4th task s high proprity
function prioritize(){
  var high = document.createElement('high');
  var t = document.createTextNode('high-priority');
  high.appendChild(t);
  document.getElementById('checked').appendChild(high);
  high.style.textDecoration = "underline";
  high.style.textDecorationColor= "red";
}

//once clicked the item will be listed by priority 
//text decor and style will underline in read */