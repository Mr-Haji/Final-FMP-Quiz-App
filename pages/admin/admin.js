var logingmail = document.getElementById("logingmail");
var loginpasword = document.getElementById("loginpasword");
// Authantication========================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, getDatabase } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyDKat3RpXlMl0dEfhxq0W-A2d_xOouGiNk",
    authDomain: "quizapp-mr-haji.firebaseapp.com",
    databaseURL: "https://quizapp-mr-haji-default-rtdb.firebaseio.com",
    projectId: "quizapp-mr-haji",
    storageBucket: "quizapp-mr-haji.appspot.com",
    messagingSenderId: "15109727828",
    appId: "1:15109727828:web:156033f164088df5cc2fc1",
    measurementId: "G-TQ9TPZS5ED"
};
// Initialize Firebase
var app = initializeApp(firebaseConfig);
var AUTH = getAuth(app);
var DATABASE = getDatabase(app);
window.logIn = function () {
    var email = logingmail.value;
    var pasword = loginpasword.value;
    signInWithEmailAndPassword(AUTH, email, pasword).then(function (success) {
        // console.log("=========>", success.user.uid)
        window.location.replace("./questionAdd.html")
    }).catch(function (error) {
        // console.log(error.code)
    })
}

window.switchPage = function () {
    window.location.replace("./signup.html")
}
// -----------------questionAdd.js


window.questionAdd = function () {
    var question = document.getElementById("question")
    var optionA = document.getElementById("optionA")
    var optionB = document.getElementById("optionB")
    var optionC = document.getElementById("optionC")
    var optionD = document.getElementById("optionD")
    var answer = document.getElementById("answer")
    if (
        question.value !== "" && optionA.value !== "" && optionB.value !== "" && optionC.value !== "" && optionD.value !== "" && answer.value !== "") {

        var questionData = {
            question: question.value,
            optionA: optionA.value,
            optionB: optionB.value,
            optionC: optionC.value,
            optionD: optionD.value,
            answer: answer.value,
            questionid: Math.floor(Math.random()*1000000000000),
        }
        var refer = ref(DATABASE, `Questions/${questionData.questionid}`);
  set(refer,userinfo)
    }
    else (alert("Please Filled All Fields"))
    console.log(questionData.question)
    console.log(questionData.optionA)
    console.log(questionData.optionB)
    console.log(questionData.optionC)
    console.log(questionData.optionD)
    console.log(questionData.answer)




    question.value = "";
    optionA.value = "";
    optionB.value = "";
    optionC.value = "";
    optionD.value = "";
    answer.value = "";


}


















  


