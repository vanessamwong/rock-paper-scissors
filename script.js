let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const message = document.createElement("div");

function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * 2)];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        playerScore = playerScore;
        computerScore = computerScore;
    } else if (((playerSelection == "Rock") && (computerSelection == "Paper")) ||
               ((playerSelection == "Scissors") && (computerSelection == "Rock")) ||
               ((playerSelection == "Paper") && (computerSelection == "Scissors"))) {
                computerScore++;
    } else {
        playerScore++;
    }
}

function game() {

    while (playerScore < 6 || computerScore < 6) {
        if ((playerScore == 5) || (computerScore == 5)) {
            
        } else {
            rock.addEventListener("click", playRound("Rock", getComputerChoice()));
            paper.addEventListener("click", playRound("Paper", getComputerChoice()));
            scissors.addEventListener("click", playRound("Scissors", getComputerChoice()));    
        }
    }
}




