const arrayRPS = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');

rockButton.addEventListener("click", clickFunction);
paperButton.addEventListener("click", clickFunction);
scissorsButton.addEventListener("click", clickFunction);

function clickFunction(e) {
    const computerSelection = getComputerChoice(arrayRPS);
    const playerSelectionId = e.target.id;
    const playerSelection = playerSelectionId.slice(0, -6);
    document.getElementById('roundresult').innerHTML = playRound(playerSelection, computerSelection);
    document.getElementById('score').innerHTML = `Score: ${playerScore} - ${computerScore}`
    if (playerScore === 5) {
        document.getElementById('endscore').innerHTML = `Game over: You won with ${playerScore} - ${computerScore}`
        disableButtons()
        document.getElementById('startover').style = "display: block;";
    } else if (computerScore === 5) {
        document.getElementById('endscore').innerHTML = `Game over: You lose with ${playerScore} - ${computerScore}`
        disableButtons()
        document.getElementById('startover').style = "display: block;";
    }
}

function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

function getComputerChoice() {
    const computerChoice = arrayRPS[Math.floor(Math.random() * arrayRPS.length)];
    return computerChoice;
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "This round is a tie!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        ++playerScore;
        return "You won this round! Paper covers rock!";
    } else if (playerSelection  === "rock" && computerSelection === "scissors") {
        ++playerScore;
        return "You won this round! Rocks crushes scissors!"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        ++playerScore;
        return "You won this round! Scissors cut paper!"
    } else {
        ++computerScore;
        computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
        return `You lost this round! ${computerSelection} beats ${playerSelection}!`;
    }
}


