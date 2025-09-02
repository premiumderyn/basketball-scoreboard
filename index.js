let scoreHome=0;
let scoreGuest = 0;
let countNumber1= document.getElementById("score-home");
let countNumber2= document.getElementById("score-guest");

function addOneHome() {
    scoreHome++;
    countNumber1.textContent =scoreHome;
}
function addTwoHome() {
    scoreHome +=2;
    countNumber1.textContent =scoreHome;
}
function addThreeHome() {
    scoreHome +=3;
    countNumber1.textContent =scoreHome;
}

function addOneGuest() {
    scoreGuest++;
    countNumber2.textContent=scoreGuest;
}
function addTwoGuest() {
    scoreGuest+=2;
    countNumber2.textContent=scoreGuest;
}
function addThreeGuest() {
    scoreGuest+=3;
    countNumber2.textContent=scoreGuest;
}

function restart() {
    scoreHome=0;
    scoreGuest = 0;
    countNumber1.textContent =scoreHome;
    countNumber2.textContent=scoreGuest;
}