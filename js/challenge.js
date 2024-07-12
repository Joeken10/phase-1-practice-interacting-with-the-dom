
//What we need to do:

// a like button that displays the text in the like ul saying "value has been liked X times"

// a pause button that pauses the counter



///////////////////////////////// GLOBAL VARIABLES ///////////////////////////////////

const counter = document.getElementById("counter");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const heartButton = document.getElementById("heart");
const pauseButton = document.getElementById("pause");
const likes = document.querySelector(".likes");
const commentForm = document.getElementById("comment-form");
const commentInput = document.getElementById("comment-input");
const commentList = document.getElementById("list");
let count = 0;
let paused = false;
///////////////////////////////// EVENT LISTENERS  ///////////////////////////////////

plusButton.addEventListener("click", incrementCounter);
minusButton.addEventListener("click", decrementCounter);
heartButton.addEventListener("click", addLike);
commentForm.addEventListener("submit", addComment);
pauseButton.addEventListener("click", function(){
    paused = !paused;
    if (paused) {
        pauseCounter();
    } else {
        startCounter();
    }
});

///////////////////////////////// FUNCTIONS ///////////////////////////////////

//sets counter inner text to count state
function counterValue() {
    counter.innerText = count; 
}

//runs incrementCounter function every second
function startCounter() {
   intervalID = setInterval(incrementCounter, 1000); 
}

// pauses the counter
function pauseCounter() { 
    clearInterval(intervalID);
}

// increments counter by 1 
function incrementCounter() {
    count++;
    counterValue();
}

//decrements counter by 1
function decrementCounter() {
    count--;
    counterValue();
}

// adds a like to the list
function addLike() {
    const li = document.createElement("li");
    li.innerText = `${count} has been liked`;
    likes.appendChild(li);
}

// appends a comment to p based on comment input
function addComment(e) {
    e.preventDefault();
    const p = document.createElement("p");
    p.innerText = commentInput.value;
    commentList.appendChild(p);
}



// #INVOKE startCounter #
startCounter();