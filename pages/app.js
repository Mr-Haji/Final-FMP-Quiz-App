














// -------------------------------------------------------



var questionData = [
  //QUESTIONS ARRAY
  {
    question: "What is the Full Form Of HTML",
    options: [
      "HyperText Makeup Language",
      "HyperText Markup Language",
      "HyperText Markup Lame",
      "HyperTate Markup Language",
    ],
    answer: "HyperText Markup Language",
  },
  {
    question: "What is the Full Form Of CSS",
    options: [
      "HyperText Makeup Language",
      "HyperText Markup Language",
      "HyperText Markup Lame",
      "HyperTate Markup Language",
    ],
    answer: "HyperText Markup Language",
  },
  {
    question: "What is the Full Form Of HTML",
    options: [
      "HyperText Makeup Language",
      "HyperText Markup Language",
      "HyperText Markup Lame",
      "HyperTate Markup Language",
    ],
    answer: "HyperText Markup Language",
  },
  {
    question: "What is the Full Form Of HTML",
    options: [
      "HyperText Makeup Language",
      "HyperText Markup Language",
      "HyperText Markup Lame",
      "HyperTate Markup Language",
    ],
    answer: "HyperText Markup Language",
  },
  {
    question: "What is the Full Form Of HTML",
    options: [
      "HyperText Makeup Language",
      "HyperText Markup Language",
      "HyperText Markup Lame",
      "HyperTate Markup Language",
    ],
    answer: "HyperText Markup Language",
  },



];
// question 
var question = document.getElementById("question");
// options
var options = document.getElementById("options");
// question number
var questionNum = document.getElementById("questionNum");
// score
var obtScore = document.getElementById("obtScore");
// question display
var questionDisplay = document.getElementById("questionDisplay");
// progress
var progress = document.getElementById("progress")
// timer
var timerMin = 4;
var timerSec = 60;
var interval;
var timerMinHeading = document.getElementById("timerMin")
var timerSecHeading = document.getElementById("timerSec")



window.timer = function () {
  timerSec--;
  timerSecHeading.innerHTML = timerSec;
  timerMinHeading.innerHTML = "04"
  if (timerSec <= 0) {
    timerMin--;
    timerMinHeading.innerHTML = timerMin;
    timerSec = 60;
  }

}
interval = setInterval(timer, 1000);

var questionIndex = 0;
var score = 0;
// render question from array
window.renderQuestion = function () {
  if (questionIndex < questionData.length) {
    // question number 
    questionNum.innerHTML = `
     Question ${questionIndex + 1} / ${questionData.length}`;
    // progress bar
    progress.innerHTML = `
     <div class="progress-bar bg-info"  style="width:${(questionIndex + 1) / questionData.length * 100}%"></div>
     `
    // question data
    question.innerHTML = questionData[questionIndex].question;
    options.innerHTML = ""
    // options data
    for (i = 0; i < questionData[questionIndex].options.length; i++) {
      options.innerHTML += `
      <div class="d-grid my-2">
      <button class="btn shadow-lg fixHeight" onclick="check('${questionData[questionIndex].options[i]}','${questionData[questionIndex].answer}')">${questionData[questionIndex].options[i]}</button>
  </div>`
    }
  }
  else {
    result()
  }

}
renderQuestion()

window.result = function () {
  var marks = document.getElementById("marks")
  window.location.replace("../pages/result.html")

  marks.innerHTML = `<div class="card bg-info  text-center" >
              <div class="mt-3">
                  <h1>Result</h1>
              </div>
  //             <hr />
  //             <div >
  //                 <h3>Your Right Clicks Are  <hr />
  //                   ${score} Out Of 5</h3>
  //             </div>
  //             <div >
  //                 <h3>And You Get: ${score / questionData.length * 100} %</h3>
  //                 </div>
  //                 <hr />
  
  //                 <div >
  //                 <h3>Better Luck For The Next Time 🎉</h3>
                  
  //             </div>
  
          
  //         </div>`
}
// next question 
window.next = function () {

  questionIndex++;
  renderQuestion()
}
// check answer wrong or right
window.check = function (userSelection, correctAns) {
  if (userSelection === correctAns) {
    score++
  }
  next()
}


// console.log(timerMin)