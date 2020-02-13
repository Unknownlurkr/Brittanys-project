//adds to-do item as a li item when user enters task 
//wILL INCLUDE THE CHECK BOX WITH NEXT TASK AS WELL
let addButton = document.getElementsByClassName('addBtn');
function addItemToTheList() {
    let newItem = document.createElement("li");
    let check = document.getElementById("checkOff")
    let input = document.querySelector("input");
    newItem.innerHTML = input.value;
    input.value = "";
    document.getElementById("taskList").appendChild(newItem);
    newItem.appendChild(check);
  }

//global variables 
let item = document.getElementById('taskList');
let taskList = document.querySelector('li');  

item.onclick = highPrior; //click onse to make text red to set task as a high priority
item.ondblclick = undoPrior; // double click to change red high-prioritized task to black(Normal)

//when clicked will make task red to show its high priority 
function highPrior(e){
    item = e.target;
    item.style.color = 'red';
} 

//when double clicked will change the red high priority task items to normal(black text).
function undoPrior(e){
    item = e.target; 
    item.style.color = 'black';
}

for(let i = 0; i < taskList.length; i++ ){
    tab
}
  