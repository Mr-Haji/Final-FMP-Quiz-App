// to make quiz app with proper ui
// User Intro 
var userName = document.getElementById("userName")
var userFatherName = document.getElementById("userFatherName")
var userClass = document.getElementById("userClass")
var userSection = document.getElementById("userSection")
var userQuizCode = document.getElementById("userQuizCode")

function userDataGet() {
  if (
    userName.value !== "" && userFatherName.value !== "" && userClass.value !== "" && userSection.value !== "" && userQuizCode.value !== "") {
    var userinfo = {
      userName: userName.value,
      userFatherName: userFatherName.value,
      userClass: userClass.value,
      userSection: userSection.value,
      userQuizCode: userQuizCode.value,
    }
    window.location.replace("./pages/questionAnswer.html")
  }
  else (alert("Please Filled All Fields"))

  console.log(userinfo.userName)
  console.log(userinfo.userFatherName)
  console.log(userinfo.userClass)
  console.log(userinfo.userSection)
  console.log(userinfo.userQuizCode)

  userName.value = "";
  userFatherName.value = "";
  userClass.value = "";
  userSection.value = "";
  userQuizCode.value = "";


}


