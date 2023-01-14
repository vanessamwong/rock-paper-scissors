let playerScore = 0;
let computerScore = 0;

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
                document.getElementById("computer").innerHTML = "Computer: " + computerScore;
    } else {
        playerScore++;
        document.getElementById("player").innerHTML = "Player: " + playerScore;
    }
}




