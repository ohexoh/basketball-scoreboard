let homePoint1 = document.getElementById("home-score-btn-1");
let homeScoreEl = document.getElementById("home-score");
let homeScore = 0;
let awayPoint1 = document.getElementById("away-score-btn-1");
let awayScoreEl = document.getElementById("away-score");
let awayScore = 0;

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

function awayPointButton1() {
  awayScore += 1;
  awayScoreEl.textContent = awayScore;
}

function awayPointButton2() {
  awayScore += 2;
  awayScoreEl.textContent = awayScore;
}
function awayPointButton3() {
  awayScore += 3;
  awayScoreEl.textContent = awayScore;
}
