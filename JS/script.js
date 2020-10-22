let leaderBoard = localStorage.getItem('leaderboard');
const finishQuizButton = document.getElementById('Finish-Quiz');

 window.addEventListener('load', (e)=>{
    let leaderBoardDataArr = JSON.parse(localStorage.getItem('leaderboard'))
    let sortresult = leaderBoardDataArr.sort((a, b) => {return b.playerScore-a.playerScore} )
    let leaderBoardSection = document.getElementById('leader-board')
    let playerDatatDiv = document.createElement('div')
    let playerNameElement = document.createElement('p')
    let playerScoreElement = document.createElement('p')
    playerNameElement.setAttribute('class', 'scoredata')
    playerScoreElement.setAttribute('class', 'scoredata')
    playerNameElement.textContent = leaderBoardDataArr[0].playerName;
    playerScoreElement.textContent = leaderBoardDataArr[0].playerScore;
    playerDatatDiv.appendChild(playerNameElement)
    playerDatatDiv.appendChild(playerScoreElement)
    leaderBoardSection.appendChild(playerDatatDiv)

})

let questionsArr = [
    {
        question : "1+1 " ,
        options : ["2", "0", "0", "0"] ,
        answer : "2"
    },
    {
        question : "2+2 " ,
        options : ["4", "0", "0", "0"] ,
        answer : "4"
    },
    {
        question : "3+3" ,
        options : ["6", "0", "0", "0"] ,
        answer : "6"
    },
    {
        question : "4+4" ,
        options : ["8", "0", "0", "0"] ,
        answer : "8"
    },
    {
        question : "5+5" ,
        options : ["10", "0", "0", "0"] ,
        answer : "10"
    },
    {
        question : "6+6" ,
        options : ["12", "0", "0", "0"] ,
        answer : "12"
    },
    {
        question : "7+7" ,
        options : ["14", "0", "0", "0"] ,
        answer : "14"
    },
    {
        question : "8+8" ,
        options : ["16", "0", "0", "0"] ,
        answer : "16"
    },
    {
        question : "9+9" ,
        options : ["18", "0", "0", "0"] ,
        answer : "18"
    },
    {
        question : "10+10" ,
        options : ["20", "0", "0", "0"] ,
        answer : "20"
    }
] 
const  answers = ["2", "4", "6", "8","10", "12", "14", "16", "18", "20"]
const useranswer = []

const startQuizBtn = document.getElementById('Start-Quiz')
const nextQuestionBtn = document.getElementById('Next-Question')
const finishQuizBtn = document.getElementById('Finish-Quiz')


function hidestartbtn() {
    startQuizBtn.style.display = "none";
    nextQuestionBtn.style.display = "block";
}
function addnextbtn() {
    nextQuestionBtn.style.display = "block";
}
function addfinishbtn() {
    nextQuestionBtn.style.display = "none";
    finishQuizBtn.style.display = "block";
}
 
function random(mn, mx) {  
    return Math.random() * (mx - mn) + mn;  

}  
function randomearrange(){
    return  questionsArr[Math.floor(random(1, questionsArr.length))-1]
}

startQuizBtn.addEventListener('click', (event)=>{

    event.preventDefault();
    DrawQuestion()
})

 nextQuestionBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    distroy()
    DrawQuestion()
    let currentQ = 0
    if (currentQ == 10){
       addfinishbtn() 
    }else{
       currentQ +=1
       console.log(currentQ)
    }
}) 
finishQuizButton.addEventListener("click", (event)=>{
    event.preventDefault();
    distroy()
    DrawQuestion()
})


function distroy(){
const parent = document.getElementById("Container")
    parent.remove()
}

function DrawQuestion (){

     let formQuestions = document.getElementById('Form-Questions')
     let questionDiv = document.createElement('div')
     questionDiv.id='Container'
     let questionLabel = document.createElement('label')
     let selectElement = document.createElement('select')
     selectElement.setAttribute('name', 'Qanswer')
     selectElement.setAttribute('id', 'Qanswer')
     const Question= randomearrange()
     questionLabel.textContent =Question.question
   
     for(i=0; i<Question.options.length; i++){
         let option = document.createElement('option')
             option.value = Question.options[i];
             option.text = Question.options[i];
         selectElement.appendChild(option)
    }
    questionDiv.appendChild(questionLabel)
     questionDiv.appendChild(selectElement)
          formQuestions.appendChild(questionDiv)
     hidestartbtn()


}


