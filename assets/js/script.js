// Arrays of questions/answers
let questions = [
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
var quizContent = document.getElementById('quiz-content');
var result = document.getElementById('result');
var endQuiz = document.getElementById('end-quiz');
var finalScore = document.getElementById('finalScore'); 
var viewHighScores = document.getElementById('view-high-scores');
var btnStartQuiz = document.getElementById('btn-start-quiz');
var homeContent = document.getElementById('home-content');
var quizContent = document.getElementById('quiz-content');
var question = document.getElementById('question');
var btna = document.getElementById('a');
var btnb = document.getElementById('b');
var btnc = document.getElementById('c');
var btnd = document.getElementById('d');
var progress = document.getElementById('progress');
var correctAlert = document.getElementById('correct');
var wrongAlert = document.getElementById('wrong');
var scoreContainer = document.getElementById('high-scores-page');
var viewHighScore = document.getElementById('btn-high-scores');
var endQuiz = document.getElementById('end-quiz');
var answersId = document.getElementById('answersId');
var questionsAnswers = document.getElementById('questionsAnswers');
var goBack = document.getElementById('btn-go-back');
var clearHighScores = document.getElementById('btn-clear-high-scores');
var submitScore = document.getElementById('submitScore');

// I will use these variables later
let score = 0;
let runningQuestionIndex = 0;
let lastQuestionIndex = questions.length - 1;

// prevent endQuiz from appreaning on the homepage
endQuiz.style.display = "none";

// New questions appear
function quizQuestions(){
  var q = questions[runningQuestionIndex];
  question.innerHTML = q.question;
  btna.innerHTML = q.answerA;
  btnb.innerHTML = q.answerB;
  btnc.innerHTML = q.answerC;
  btnd.innerHTML = q.answerD;
};

function renderProgress() {
  for (var qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
};

function answerIsCorrect() {
  progress.style.display = "block";
  correctAlert.style.display = "block";
  wrongAlert.style.display = "none";
  alert("Correct!");
};

function answerIsWrong() {
  progress.style.display = "block";
  wrongAlert.style.display = "block";
  correctAlert.style.display = "none";
  alert("Wrong! You loose 10 seconds on the timer :(");
};

function enterScore() {
  questionsAnswers.style.display = "none";
  endQuiz.style.display = "block";
};

function rightWrong(answer) {
  if (questions[runningQuestionIndex].correct == answer) {
    score++;
    answerIsCorrect();
  } else if (questions[runningQuestionIndex].correct !== answer) {
    answerIsWrong();
  }

  if (runningQuestionIndex < lastQuestionIndex) {
    runningQuestionIndex++;
    quizQuestions();
  } else {
    enterScore();
  }
};

function startQuiz() {
  homeContent.style.display="none";
  endQuiz.style.display="none";
  quizContent.style.display="block";
  quizQuestions();
};

function scoreRender() {
  endQuiz.style.display = "none";
  homeContent.style.display = "none";
  quizContent.style.display = "none";
  scoreContainer.style.display = "block";
  let scorePerCent = Math.round((100 * score) / questions.length);
};

function submitScoreInitial() {
  alert("You are all set!");
};

function goBackFunction() {
  homeContent.style.display = "block";
  quizContent.style.display = "none";
  scoreContainer.style.display = "none";
};

// Event listeners
btnStartQuiz.addEventListener("click", startQuiz);
viewHighScore.addEventListener("click", scoreRender);
goBack.addEventListener("click", goBackFunction);
clearHighScores.addEventListener("click", function (evt) {});
submitScore.addEventListener("click", submitScoreInitial);
