function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * 2) + 1];
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (playerSelection == computerSelection) {
        return "Tie game!";
    } else if (playerSelection == "Rock") {
        if (computerSelection == "Paper") {
            return "You lose! Paper beats rock! :(";
        } else {
            return "You win! Rock beats scissors! :D";
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            return "You win! Paper beats rock! :D";
        } else {
            return "You lose! Scissors beats paper! :(";
        }
    } else {
        if (computerSelection == "Rock") {
            return "You lose! Rock beats scissors! :(";
        } else {
            return "You win! Scissors beats paper! :D";
        }
    }
}