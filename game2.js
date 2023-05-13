var timer1 = null;
var el = null;
var score = 0; // number of 'hits'
var shots = 0; // total 'shots'

// added xSpeed and ySpeed variables
var xSpeed = 4;
var ySpeed = 4;
var xPosition = 50;
var yPosition = 100;
var maxXPosition = window.innerWidth - 50;
var maxYPosition = 300;

function moveIt() {
    // update the position of the spaceship
    xPosition += xSpeed;
    yPosition += ySpeed;

    // check if the spaceship has hit the walls
    if (xPosition <= 0 || xPosition >= maxXPosition) {
        xSpeed = -xSpeed;
    }
    if (yPosition <= 0 || yPosition >= maxYPosition) {
        ySpeed = -ySpeed;
    }

    // set the new position of the spaceship
    el.style.left = xPosition + 'px';
    el.style.top = yPosition + 'px';

    // set the timer
    timer1 = setTimeout(moveIt, 25);

    function scoreUp() {
        // Increment the player's score
        score++;
    }
}

function scoreboard() {
    // Display the scoreboard
    document.getElementById("score").innerHTML = "Shots:" + shots + " Score: " + score;
}

window.onload = function() {
    el = document.getElementById("img1");
    // onClick handler calls scoreUp()
    // when the image is clicked
    el.onclick = scoreUp;
    // update total number of shots
    // for every click within play field
    document.getElementById("range").onclick = function () {
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