let homePoint1 = document.getElementById("home-score-btn-1");
let homeScoreEl = document.getElementById("home-score");
let homeScore = 0;
let guestPoint1 = document.getElementById("guest-score-btn-1");
let guestScoreEl = document.getElementById("guest-score");
let guestScore = 0;

function homePointButton1() {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
}

function homePointButton2() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
}
function homePointButton3() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
}

function guestPointButton1() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
}

function guestPointButton2() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}
function guestPointButton3() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}
