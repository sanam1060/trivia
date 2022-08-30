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
    answerA: "1. Seven generations",
    answerB: "2. Four generations",
    answerC: "3. Six generations",
    answerD: "4. Five generations",
    correctAnswer: "d",
  },
];

// DOM elements used in this project:
var buttonEl = document.querySelector(".btn-start-quiz");

var startTimer = function () {
  var timerEl = document.createElement("div");
  timerEl.className = "timer";
  tasksToDoEl.appendChild(listItemEl);
};

// DOM elements

// timer function

// addEventListeners - click