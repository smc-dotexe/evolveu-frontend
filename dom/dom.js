/***********************************
BASIC DOM
*************************************/

let list, counter, removeLi;

const dom1 = document.getElementById('basicDom');
const showButton = document.getElementById('showBtn');
const addButton = document.getElementById('addBtn');
const deleteButton = document.getElementById('deleteBtn');
const orderedList = document.getElementById('orderedList');
const listAll = [document.querySelectorAll('.this-orderedList li')];
const container = document.getElementById('container');

counter = 4;

//Target Click
function clickEvent(e) {

  console.log(e.target);

}

//Show/Hiding List Items
function showFunction() {

  if (orderedList.style.display === 'none') {
    orderedList.style.display = 'block';
  } else {
    orderedList.style.display = 'none';
  }

}

//Add list Item
function addFunction() {

  list = document.createElement('li');
  orderedList.appendChild(list);
  listAll.push(list);
  list.appendChild(document.createTextNode('Item' + ' ' + counter));
  counter++;

}

//Delete List Item
function deleteFunction() {

  list = document.getElementsByTagName('li');
  removeLi = list[list.length-1];
  orderedList.removeChild(removeLi);
  counter--;

}

//Click Events
dom1.addEventListener('click', clickEvent);
showButton.addEventListener('click', showFunction);
addButton.addEventListener('click', addFunction);
deleteButton.addEventListener('click', deleteFunction);

/***********************************************************************
WORKING WITH CARDS
************************************************************************/
let parentDiv, addBeforeBtn,  cardDiv, newCardDiv, cardCounter, theFirstChild,
addAfterBtn, deleteCardBtn;

const addCardBtn = document.querySelector('#addCard');
const addButtonDiv = document.getElementById('addButtonDiv');
const leftSide = document.querySelector('#leftSide');
const cardSectionDiv = document.getElementById('cardSection');


cardCounter = 0;


function divFunction() {
//Card Counter
  counter = document.createElement('p');
  counter.classList.add('counter');
  counter.textContent = cardCounter++;

//Create Div
  cardDiv = document.createElement('div');
  cardDiv.appendChild(counter);
  cardDiv.classList.add('leftCardDiv');
  leftSide.appendChild(cardDiv);

//Add Before Button
  addBeforeBtn = document.createElement('button');
  addBeforeBtn.appendChild(document.createTextNode('Add Before'));
  addBeforeBtn.classList.add('addBefore');
  cardDiv.appendChild(addBeforeBtn);
  addBeforeBtn.addEventListener('click', addBeforeFunction);

//Add After Button
  addAfterBtn = document.createElement('button');
  addAfterBtn.appendChild(document.createTextNode('Add After'));
  addAfterBtn.classList.add('addAfter');
  cardDiv.appendChild(addAfterBtn);
  addAfterBtn.addEventListener('click', addAfterFunction);

//Delete Button
  deleteCardBtn = document.createElement('button');
  deleteCardBtn.appendChild(document.createTextNode('Delete'));
  deleteCardBtn.classList.add('delete');
  cardDiv.appendChild(deleteCardBtn);
  deleteCardBtn.addEventListener('click', deleteCardFunction);
}


//Add Card Before
function addBeforeFunction(e) {
  divFunction();
  e.target.parentNode.before(cardDiv);
}

//Add Card After
function addAfterFunction(e) {
  divFunction();
  e.target.parentNode.after(cardDiv);
}

//Delete Current Card
function deleteCardFunction(e) {
  e.target.parentNode.remove(cardDiv);
}

//Create First Card
addCardBtn.addEventListener('click', divFunction);
