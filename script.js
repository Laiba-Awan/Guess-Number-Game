const guess = document.querySelector(".guess");
const displayMessage = document.querySelector(".displaymessage");
const checkBtn = document.querySelector(".check");

let randomNum = Math.trunc(Math.random() * 20) + 1;
console.log(randomNum);
let score = 20;
let highscore = 0;
let trials = 3;

// FUNCTION TO CHECK THE RANDOM NUMBER-----
function Check() {
  if (guess.value == "") {
    alert("You must Enter a Number!");
  } else {
    let guess = Number(document.querySelector(".guess").value);
    if (guess == randomNum) {
      displayMessage.textContent = "🏆🎉YAY! That's a Match.";
      document.querySelector(".matchNumber").textContent = randomNum;
      document.querySelector(".guess").value = "";
      document.querySelector(".guess").disabled = true;
      checkBtn.disabled = true;
      document.body.style.backgroundColor = "lightgreen";
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
    } else if (guess !== randomNum) {
      if (score > highscore) {
        if (guess > randomNum) {
          displayMessage.textContent = "📈Your Number is high";
        } else {
          displayMessage.textContent = "📉Your Number is Low";
        }
        score--;
        document.querySelector(".score").textContent = score;
        trials--;
        document.querySelector(".trials").textContent = trials;
        console.log("trials", trials);
        if (trials === 0) {
          document.querySelector(".matchNumber").textContent = "?";
          document.querySelector(".guess").value = "";
          displayMessage.textContent = `😵OOPS! You are out of trials, The Number was ${randomNum}. Try Again!`;
          document.querySelector(".highscore").textContent = "0";
          document.querySelector(".score").textContent = "20";
          document.querySelector(".guess").disabled = true;
          checkBtn.disabled = true;
        }
      }
    }
  }
}

// FUNCTION TO RELOAD THE PAGE-----
function Again() {
  randomNum = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  highscore = 0;
  trials = 3;
  console.log(randomNum);
  document.querySelector(".matchNumber").textContent = "?";
  document.querySelector(".guess").value = "";
  displayMessage.textContent = "Start Guessing...";
  document.querySelector(".highscore").textContent = "0";
  document.querySelector(".score").textContent = "20";
  document.querySelector(".trials").textContent = "3";
  document.querySelector(".guess").disabled = false;
  checkBtn.disabled = false;
}
