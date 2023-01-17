let playerScore = 0;
let computerScore = 0;
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.querySelector(".prompt");
const your_score = document.getElementById("player");
const cpu_score = document.getElementById("computer");

const message = document.createElement("div");

function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * 3)];
}

function win(playerSelection, computerSelection) {
    playerScore++;
    your_score.innerHTML = "PLAYER: " + playerScore;
    cpu_score.innerHTML = "COMPUTER: " + computerScore;
    result.innerHTML = playerSelection + " beats " + computerSelection + "! You win!";
}

function lose(playerSelection, computerSelection) {
    computerScore++;
    your_score.innerHTML = "PLAYER: " + playerScore;
    cpu_score.innerHTML = "COMPUTER: " + computerScore;
    result.innerHTML = computerSelection + " beats " + playerSelection + "! You lose!";
}

function tie(playerSelection, computerSelection) {
    your_score.innerHTML = "PLAYER: " + playerScore;
    cpu_score.innerHTML = "COMPUTER: " + computerScore;
    result.innerHTML = "Tie game!";
}

function game (playerSelection) {
    const computerSelection = getComputerChoice();
    switch (playerSelection + computerSelection) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(playerSelection, computerSelection);
            break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            lose(playerSelection, computerSelection);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            tie(playerSelection, computerSelection);
            break;
    }
}

function main() {
    rock.addEventListener("click", function() {
        game("Rock");
    })
    paper.addEventListener("click", function() {
        game("Paper");
    })
    scissors.addEventListener("click", function() {
        game("Scissors");
    })

}


main();