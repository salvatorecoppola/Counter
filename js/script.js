
//starting with add div for result
var displayNumberDiv = document.createElement('div');
displayNumberDiv.classList = ("numb");
document.body.append(displayNumberDiv);


//adding <p> in div for result
var p = document.createElement('p');
p.classList = ("p")
p.textContent = 0
displayNumberDiv.appendChild(p);


// initializing the variable with zero which we will refer to the functions to add or subtract the value 
let counter = 0;


//adding a container div for the buttons
let buttonsContainer = document.createElement('div');
buttonsContainer.classList = ("container");
document.body.appendChild(buttonsContainer);


//writing a function that helps me create a button whenever I need it

function createButton (type, classList, text) {
  var btn = document.createElement('button');
  btn.setAttribute('value', type)
  btn.innerText = (text)
  btn.classList.add(classList);
  buttonsContainer.appendChild(btn);
};

createButton ('increaseByOneButton','increaseByOneButton', '+'); //adding increment button and appending in 'container' div
createButton ('decreaseByOneButton','decreaseByOneButton','-'); //adding decrease button and appending in 'container' div
createButton ( 'plusTenButton','plusTenButton','+10');//adding plusTen button and appending in 'container' div
createButton ( 'minusTenButton','minusTenButton','-10');//adding minusTen button and appending in 'container' div
createButton ( 'resetButton','resetButton', 'reset'); //adding reset button and appending in 'container' div


// creating an event listener function that on click, through event target class name,
// will look for the button with the same class and automatically add its own function

buttonsContainer.addEventListener("click", (event) => {
  //increment by one function
  if (event.target.className === 'increaseByOneButton') {
    counter++
    p.innerText = counter; return
  //increment by ten function
  } else if (event.target.className === 'plusTenButton') {
    counter+=10
    p.innerText = counter; return
  //decrement by one function
  } else if (event.target.className === 'decreaseByOneButton') 
    { counter--
    p.innerText = counter; return
  //decrement by ten function
  } else if (event.target.className === 'minusTenButton') 
    { counter-=10
    p.innerText = counter; return
  //reset function 
  } else ( event.target.className === 'resetButton') 
    counter = 0
    p.innerText = counter; return
});

