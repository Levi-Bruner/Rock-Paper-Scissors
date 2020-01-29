// function compChoice() {
//   // let computerChoice = "";
//   let calculation = Math.floor(Math.random() * 9);
//   if (calculation <= 2)
//     return "rock";
//   else if (calculation <= 5)
//     return "paper";
//   else (calculation <= 8)
//   return "scissors";
// }

let choice = ["rock", "paper", "scissors"]

// console.log(compChoice());

// function chooseRock() {
//   let playerChoice = "rock"
//   return playerChoice
// }

// function choosePaper() {
//   return "paper"
// }

// function chooseScissors() {
//   return "scissors"
// }

function play(playerChoice) {
  // rock 
  let computerChoice = choice[Math.floor(Math.random() * choice.length)]
  console.log("comp choice", computerChoice);

  if (playerChoice == computerChoice) {
    console.log("tie")
  }
  if (playerChoice == "rock" && computerChoice == "scissors") {
    console.log("win")
  }
  if (playerChoice == "rock" && computerChoice == "paper") {
    console.log("lose")
  }
  // "paper"
  if (playerChoice == "paper" && computerChoice == "rock") {
    console.log("win")
  }
  if (playerChoice == "paper" && computerChoice == "scissors") {
    console.log("lose")
  }
  // "scissors" 
  if (playerChoice == "scissors" && computerChoice == "rock") {
    console.log("lose")
  }
  if (playerChoice == "scissors" && computerChoice == "paper") {
    console.log("win")
  }
}