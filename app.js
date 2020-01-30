

let choice = ["rock", "paper", "scissors"]

function playerRock() {
  document.getElementById("pic-1").src = "https://images.homedepot-static.com/productImages/94af8836-0338-4802-914e-04cc71e562ad/svn/backyard-x-scapes-fake-rocks-hdd-rof-rocsb-64_1000.jpg";
}
function playerPaper() {
  document.getElementById("pic-1").src = "https://epmgaa.media.clients.ellingtoncms.com/img/croppedphotos/2015/09/16/EATHTALK_PIC.jpg";
}
function playerScissors() {
  document.getElementById("pic-1").src = "https://www.cchobby.com/media/catalog/product/cache/14/image/9df78eab33525d08d6e5fb8d27136e95/1/1/11196_1.jpg";
}

function computerRock() {
  document.getElementById("pic-2").src = "https://images.homedepot-static.com/productImages/94af8836-0338-4802-914e-04cc71e562ad/svn/backyard-x-scapes-fake-rocks-hdd-rof-rocsb-64_1000.jpg";
}
function computerPaper() {
  document.getElementById("pic-2").src = "https://epmgaa.media.clients.ellingtoncms.com/img/croppedphotos/2015/09/16/EATHTALK_PIC.jpg";
}
function computerScissors() {
  document.getElementById("pic-2").src = "https://www.cchobby.com/media/catalog/product/cache/14/image/9df78eab33525d08d6e5fb8d27136e95/1/1/11196_1.jpg";
}

function play(playerChoice) {
  // rock 
  var computerChoice = choice[Math.floor(Math.random() * choice.length)]

  if (playerChoice == "rock" && computerChoice == "rock") {
    computerRock();
    setTimeout(function () { alert("It's a tie!"); }, 500);
  }
  if (playerChoice == "rock" && computerChoice == "scissors") {
    computerScissors();
    setTimeout(function () { alert("You won!"); }, 500);
  }
  if (playerChoice == "rock" && computerChoice == "paper") {
    computerPaper();
    setTimeout(function () { alert("You lost..."); }, 500);
  }
  // "paper"
  if (playerChoice == "paper" && computerChoice == "rock") {
    computerRock();
    setTimeout(function () { alert("You won!"); }, 500);
  }
  if (playerChoice == "paper" && computerChoice == "scissors") {
    computerScissors();
    setTimeout(function () { alert("You lost..."); }, 500);
  }
  if (playerChoice == "paper" && computerChoice == "paper") {
    computerPaper();
    setTimeout(function () { alert("It's a tie!"); }, 500);
  }
  // "scissors" 
  if (playerChoice == "scissors" && computerChoice == "rock") {
    computerRock();
    setTimeout(function () { alert("You lost..."); }, 500);
  }
  if (playerChoice == "scissors" && computerChoice == "paper") {
    computerPaper();
    setTimeout(function () { alert("You won!"); }, 500);
  }
  if (playerChoice == "scissors" && computerChoice == "scissors") {
    computerScissors();
    setTimeout(function () { alert("It's a tie!"); }, 500);
  }
}