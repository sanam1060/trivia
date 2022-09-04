// Arrays of questions/answers
var questions = [
  {
    question: "What year was the very first model of the iPhone released?",
    answerA: "1. 1997",
    answerB: "2. 2005",
    answerC: "3. 2007",
    answerD: "4. 1995",
    correctAnswer: "c",
  },
  {
    question: "Which email service is owned by Microsoft?",
    answerA: "1. iCloud",
    answerB: "2. AOL",
    answerC: "3. Yahoo",
    answerD: "4. Hotmail",
    correctAnswer: "d",
  },
  {
    question: "Arrays in JavaScript can be used to store _______.",
    answerA: "1. numbers and strings",
    answerB: "2. other arrays",
    answerC: "3. booleans",
    answerD: "4. all of the above",
    correctAnswer: "d",
  },
  {
    question: "What is often seen as the smallest unit of memory?",
    answerA: "1. Byte",
    answerB: "2. Bit",
    answerC: "3. Kilobyte",
    answerD: "4. Kilobit",
    correctAnswer: "a",
  },
  {
    question: "How many generations of computers have been invented?",
    answerA: "1. Two generations",
    answerB: "2. Four generations",
    answerC: "3. Six generations",
    answerD: "4. Five generations",
    correctAnswer: "d",
  }
];

// DOM elements
var quizContent = document.getElementById("quiz-content");
var result = document.getElementById("result");
var endQuiz = document.getElementById("end-quiz");
var finalScore = document.getElementById("finalScore");
var btnStartQuiz = document.getElementById("btn-start-quiz");
var homeContent = document.getElementById("home-content");
var question = document.getElementById("question");
var btna = document.getElementById("a");
var btnb = document.getElementById("b");
var btnc = document.getElementById("c");
var btnd = document.getElementById("d");
var progress = document.getElementById("progress");
var correctAlert = document.getElementById("correct");
var wrongAlert = document.getElementById("wrong");
var scoreContainer = document.getElementById("high-scores-page");
var viewHighScores = document.getElementById("btn-high-scores");
var endQuiz = document.getElementById("end-quiz");
var answersId = document.getElementById("answersId");
var questionsAnswers = document.getElementById("questionsAnswers");
var goBack = document.getElementById("btn-go-back");
var clearHighScores = document.getElementById("btn-clear-high-scores");
var submitScore = document.getElementById("submitScore");
var replay = document.getElementById("replay");
var finalScore = document.getElementById("finalScore");
var timer = document.getElementById("timer");
var timerNumber = document.getElementById("timerNumber");
var highscoreDisplayName = document.getElementById("highscore-initials");
var highscoreInputName = document.getElementById("initials");

//Timer
var timeLeft = 60;
var timeInterval;

// I will use these variables later
var score = 0;
var runningQuestionIndex = 0;
var lastQuestionIndex = questions.length - 1;

// prevents endQuiz from appreaning on the homepage
endQuiz.style.display = "none";

// quizQuestions() makes new questions appear
function quizQuestions() {
  var q = questions[runningQuestionIndex];
  question.innerHTML = q.question;
  btna.innerHTML = q.answerA;
  btnb.innerHTML = q.answerB;
  btnc.innerHTML = q.answerC;
  btnd.innerHTML = q.answerD;
};

// Counter render
function renderCounter() {
  if (count <= questionTime) {
    counter.innerHTML = count;
    timeGauge.style.width = count * gaugeUnit;
    count++;
  } else {
    count = 0;
  }
};

// If selected option is correct
function answerIsCorrect() {
  progress.style.display="block";
  correctAlert.style.display="block";
  wrongAlert.style.display="none";
  score++;
  alert('Correct!');
};

// If selected option is wrong
function answerIsWrong() {
  progress.style.display = "block";
  wrongAlert.style.display = "block";
  correctAlert.style.display = "none";
  timeLeft = timeLeft - 10;
  alert("Wrong! You loose 10 seconds on the timer :(");
};

function enterScore() {
  questionsAnswers.style.display="none";
  endQuiz.style.display="block";
  clearInterval(timerInterval);
  timerNumber.textContent = ('Done');
  document.getElementById("finalScore").innerHTML = "Your score is " + score + " points out of 5!";
};

function rightWrong(answer) {
  if (answer == questions[runningQuestionIndex].correctAnswer) {
    answerIsCorrect();
  } else {
    answerIsWrong();
  };
  
  if (runningQuestionIndex < lastQuestionIndex) {
    runningQuestionIndex++;
    quizQuestions();
  } else {
    enterScore();
  }
};

// Start the trivia
function startQuiz() {
  homeContent.style.display="none";
  endQuiz.style.display="none";
  quizContent.style.display="block";
  quizQuestions();

  // Timer
  timerInterval = setInterval(function () {
    timeLeft--;
    timerNumber.textContent = timeLeft;
    if (timeLeft === 0 || timeLeft < 0) {
      alert("Time out!");
      clearInterval(timerInterval); 
      enterScore();
    }
  }, 1000);
};

function clearScores() {
  localStorage.setItem("savedHighscores", JSON.stringify([]));
  scoreRender();
};

function scoreRender() {
  endQuiz.style.display = "none";
  homeContent.style.display = "none";
  quizContent.style.display = "none";
  scoreContainer.style.display = "block";
  generateHighscores();
};

function generateHighscores() {
  highscoreDisplayName.innerHTML = "";
  var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];

  highscores.forEach(function (ele) {
    var newLi = document.createElement("li");
    newLi.textContent = ele.name + " - " + ele.score;
    highscoreDisplayName.appendChild(newLi);
  })
};

function submitScoreInitial() {
  alert("You are all set!");

  if (highscoreInputName.value === "") {
    alert("Your initials cannot be blank. Please re-submit.");
    return false;
  } else {
    var savedHighscores =
      JSON.parse(localStorage.getItem("savedHighscores")) || [];
    var currentUser = highscoreInputName.value;
    var currentHighscore = {
      name: currentUser,
      score: score,
    };

    console.log(savedHighscores);

    savedHighscores.push(currentHighscore);
    localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
    generateHighscores();
  }
};

function replayQuiz(){
  location.reload();
};

function goBackFunction() {
  location.reload();
};

// Event listeners
btnStartQuiz.addEventListener("click", startQuiz);
viewHighScores.addEventListener("click", scoreRender);
goBack.addEventListener("click", goBackFunction);
clearHighScores.addEventListener("click", clearScores);
submitScore.addEventListener("click", submitScoreInitial);
replay.addEventListener("click", replayQuiz);