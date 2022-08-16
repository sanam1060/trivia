// DOM elements used in this project:
var buttonEl = document.querySelector(".btn-start-quiz");


var startTimer = function () {
  var timerEl = document.createElement("div");
  timerEl.className = "timer";
  tasksToDoEl.appendChild(listItemEl);
};

buttonEl.addEventListener("click", startQuiz);
