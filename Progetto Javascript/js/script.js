
//adding div for result
var numb = document.createElement('div');
numb.classList = ("numb");
document.body.append(numb);


//adding <p> in div for result
var p = document.createElement('p');
p.textContent = 0
numb.appendChild(p);

let counter = 0;


//adding a div for the button
let container = document.createElement('div');
container.classList = ("container");
document.body.appendChild(container);


//adding increment button and appending in 'numb' div
var btn = document.createElement('button');
btn.classList = ("increase");
btn.textContent = "+";
container.appendChild(btn);

//increment button function
btn.setAttribute('data-counter', counter);
btn.addEventListener("click",()=>{
    counter++;
    btn.setAttribute('data-counter', counter);
    p.innerHTML = counter ;
    counter.innerHTML = btn;
});




//adding decrease button and appending in 'numb' div
var btn2 = document.createElement('button');
btn2.classList = ("decrease");
btn2.textContent = "-";
container.appendChild(btn2);

//decrease button function
btn2.setAttribute('data-counter2', counter);
btn2.addEventListener("click",()=>{
    counter--;
    
    btn2.setAttribute('data-counter2',counter);
    p.innerText = counter ;
});


//adding reset button and appending in 'numb' div
var reset = document.createElement('button');
reset.classList = ("reset");
reset.textContent = "reset";
container.appendChild(reset);

//reset button function
reset.setAttribute('reset-counter', counter);
reset.addEventListener("click",()=>{
    counter = 0;
    reset.setAttribute('reset-counter', counter);
    p.innerHTML = counter ;
    counter.innerHTML = reset;
});

