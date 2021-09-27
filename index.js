var readlineSync = require('readline-sync');
var score = 0;

//welcome code
function welcome(){
var name = readlineSync.question("Hey! enter your name: ")
console.log("Hey! "+ name.toUpperCase() +" Welcome to Game-- How well do you know me??")
}
//high scores
function highScore(){
 console.log("High scores by other players")
 console.log("Name: Priya  Score: 4");
 console.log("Name: Mohit  Score: 3"); }


//question bank
var questions= [{
      question: "What's my favourite color?",
      answer:"Black"
    },{
      question: "Which family member do I love the most??",
      answer:"mother"
    },{
      question: "Where do i live??",
      answer: "haryana"
    },{
      question:"Who is my favourite coder?",
      answer: "tanay"
    },{
      question:"Which is my favourite operating system?",
      answer: "mac"
    }];

// size of array
var length = questions.length

function play(Q,A)
{
  var playerAnswer = readlineSync.question(Q)
  console.log("You entered: " +playerAnswer)
  if(playerAnswer.toUpperCase()=== A.toUpperCase()){
    console.log("You're Right!!!")
    score= score+ 1;
    console.log("Your current score is: " + score)
    console.log("-----------------------------")
  }else{
    console.log("You're wrong");
    score = score - 1;
    console.log("Your current score is: " + score)
    console.log("-----------------------------")
  }
}
//game
function game(question,answer){
  for (var i=0; i<length;i++){
    var currentQuestion = questions[i]
    var currentAnswer = questions[i]

    play(currentQuestion.question,currentAnswer.answer)
  }
}
function yourScore(){
  console.log("Your total score is: "+ score)
  if(score>=4){console.log("Awwwww!!!! You know me so well, message me and I'll update your score here.")}
  console.log(highScore())
   
}

welcome()
game()
yourScore()
