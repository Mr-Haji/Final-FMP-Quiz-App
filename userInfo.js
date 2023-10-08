// =========================


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase,ref , set} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
var firebaseConfig = {
  apiKey: "AIzaSyDKat3RpXlMl0dEfhxq0W-A2d_xOouGiNk",
  authDomain: "quizapp-mr-haji.firebaseapp.com",
  projectId: "quizapp-mr-haji",
  storageBucket: "quizapp-mr-haji.appspot.com",
  messagingSenderId: "15109727828",
  appId: "1:15109727828:web:156033f164088df5cc2fc1",
  measurementId: "G-TQ9TPZS5ED"
};

// Initialize Firebase
var app = initializeApp(firebaseConfig);
var DATABASE = getDatabase(app);
// to make quiz app with proper ui
// User Intro 
var userName = document.getElementById("userName")
var userFatherName = document.getElementById("userFatherName")
var userClass = document.getElementById("userClass")
var userSection = document.getElementById("userSection")
var userQuizCode = document.getElementById("userQuizCode")

window.userDataGet = function() {
  // console.log("running")
  if (
    userName.value !== "" && userFatherName.value !== "" && userClass.value !== "" && userSection.value !== "" && userQuizCode.value !== "") {
    var userinfo = {
      userName: userName.value,
      userFatherName: userFatherName.value,
      userClass: userClass.value,
      userSection: userSection.value,
      userQuizCode: userQuizCode.value,
      userid: Math.floor(Math.random()*1000000000000),
    }
    var refer = ref(DATABASE, `Users/${userinfo.userid}`);
  set(refer,userinfo)
  // console.log("Done")
  
  }
  else (alert("Please Filled All Fields"))
  
  // console.log(userinfo.userName)
  // console.log(userinfo.userFatherName)
  // console.log(userinfo.userClass)
  // console.log(userinfo.userSection)
  // console.log(userinfo.userQuizCode)
  
  userName.value = "";
  userFatherName.value = "";
  userClass.value = "";
  userSection.value = "";
  userQuizCode.value = "";
  
  // window.location.replace("./pages/questionAnswer.html")

}


