let playerScore = 0;
let computerScore = 0;

const message = document.createElement("div");

function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * 2)];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return "Tie game! \nThe score is now:\nPlayer: " + playerScore + " Computer: " + computerScore;
    } else if (playerSelection == "Rock") {
        if (computerSelection == "Paper") {
            computerScore += 1;
            return "You lose! Paper beats rock! :( \nThe score is now:\nPlayer: " + playerScore + " Computer: " + computerScore;
        } else {
            playerScore += 1;
            return "You win! Rock beats scissors! :D \nThe score is now:\nPlayer: " + playerScore + " Computer: " + computerScore;
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            playerScore += 1;
            return "You win! Paper beats rock! :D \nThe score is now:\nPlayer: " + playerScore + " Computer: " + computerScore;
        } else {
            computerScore += 1;
            return "You lose! Scissors beats paper! :( \nThe score is now:\nPlayer: " + playerScore + " Computer: " + computerScore;
        }
    } else {
        if (computerSelection == "Rock") {
            computerScore += 1;
            return "You lose! Rock beats scissors! :( \nThe score is now:\nPlayer: " + playerScore + " Computer: " + computerScore;
        } else {
            playerScore += 1;
            return "You win! Scissors beats paper! :D \nThe score is now:\nPlayer: " + playerScore + " Computer: " + computerScore;
        }
    }
}

function game() {

    for (let i = 0; i < 6; i++) {
        if (i < 5) {
            let playerSelection = prompt("Choose 'Rock', 'Paper' or 'Scissors'");
            console.log(playRound(playerSelection, getComputerChoice()));
        } else {
                if (playerScore == computerScore) {
                    console.log("It's a tie! No winners here. :/");
                } else if (playerScore > computerScore) {
                    console.log("You win! Congrats! B)");
                } else {
                    console.log("You lose! Better luck next time! :P");
                }
        }
    }
}

game();

const rock = document.createElement("input");
const paper = document.createElement("input");
const scissors = document.createElement("input");
const buttons = document.querySelectorAll("input");

buttons.setAttribute("type", "image");
rock.setAttribute("src", "images/rock.png");
paper.setAttribute("src", "images/paper.png");
scissors.setAttribute("src", "images/scissors.png");
rock.setAttribute("id", "rock");
paper.setAttribute("id", "paper");
scissors.setAttribute("id", "scissors");

function selectMove(choice) {
    if (choice == "Rock") {
        playerSelection = "Rock";
    } else if (choice == "Paper") {
        playerSelection = "Paper";
    } else {
        playerSelection = "Scissors";
    }
}

rock.addEventListener("click", playRound("Rock", getComputerChoice()));
paper.addEventListener("click", playRound("Paper", getComputerChoice()));
scissors.addEventListener("click", playRound("Scissors", getComputerChoice()));




