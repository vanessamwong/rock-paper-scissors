let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * 2)];
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

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