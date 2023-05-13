var timer1 = null;
var el = null;
var score = 0; // number of 'hits'
var shots = 0; // total 'shots'

// Set initial horizontal and vertical positions
var xPosition = -1;
var yPosition = 1;

// Set the step size for the spaceship's oscillations
var xStepSize = 10;
var yStepSize = 5;

function moveIt() {
    // Move the spaceship horizontally
    xPosition += xStepSize;
    if (xPosition >= (window.innerWidth) || xPosition <= 0) {
        xStepSize = -xStepSize; // Reverse direction when the spaceship hits the edge of the screen
    }
    
    // Move the spaceship vertically
    yPosition += yStepSize;
    if (yPosition >= 500 || yPosition <= 0) {
        yStepSize = -yStepSize; // Reverse direction when the spaceship hits the top or bottom of the playfield
    }
    
    // Set the new position of the spaceship
    el.style.left = xPosition + 'px';
    el.style.top = yPosition + 'px';

    // Set the timer
    timer1 = setTimeout(moveIt, 25);
    }

    function scoreUp() {
        // Increment the player's score
        score++;
}

function scoreboard() {
    // Display the scoreboard
    document.getElementById("score").innerHTML = "Shots:" + shots + " Score: " + score;
}

window.onload = function() {
    el = document.getElementById("img1");
    el.onclick = scoreUp;
    // update total number of shots
    // for every click within play field
    document.getElementById("range").onclick = function() {
        shots++;
        // update scoreboard
        scoreboard();
    }
    // initialize game
    scoreboard();
    el.style.left = xPosition + 'px';
    el.style.top = yPosition + 'px';
    moveIt();
}