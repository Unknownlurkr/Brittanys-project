//adds to-do item as a li item when user enters task 
//wILL INCLUDE THE CHECK BOX WITH NEXT TASK AS WELL
//global variables 
let item = document.getElementById('taskList');
let taskList = document.querySelectorAll('li');
let checked = document.getElementsByClassName('checkOff');
for (let i = 0; i < listItems.length; i++) {
    taskList[i].addEventListener("click", addItemToTheList);
  }

let addButton = document.getElementsByClassName('addBtn');
function addItemToTheList() {
    let newItem = document.createElement('li');
    let check = document.createElement('input');
    let input = document.querySelector('input');
    let button = document.createElement('button');
    button.className = 'del';
    check.type ='checkbox';
    check.className ='checkOff';
    newItem.innerHTML = input.value;
    input.value = "";
    item.appendChild(newItem);
    newItem.appendChild(check);
    newItem.appendChild(button);

}

item.onclick = deleteTask;
item.onclick = highPrior; //click onse to make text red to set task as a high priority
item.ondblclick = undoPrior; // double click to change red high-prioritized task to black(Normal)

//when clicked will make task red to show its high priority 
function highPrior(e){
    taskList = e.target;
    taskList.style.color = 'red';
} 

//when double clicked will change the red high priority task items to normal(black text).
function undoPrior(e){
    taskList = e.target; 
    taskList.style.color = 'black';
}

function removeEvent(e) {
    if(e.target.classList.contains('del')) {
        item.removeChild(e.target.parentElement);
        item.removeChild(list);
    }
  }

function myFunction (e) {
     while(item.hasChildNodes(e) ) {
      item.removeChild(list.firstChild);
  } 
}
/*function init() {
    var unDoneItems = document.querySelector('li');
    for (var i = 0; i < unDoneItems.length; i++) {
      undoneItems[i].addEventListener('click', done);
    }
  }; */

  //myDiv.appendChild('li');
  //let myDiv = document.querySelectorAll('div')[i];


  //try using some darn tootin divs for li items bc I am a dummie
  //
