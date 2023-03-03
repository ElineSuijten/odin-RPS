const arrayRPS = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');

const compButton = document.getElementById('compButton');

rockButton.addEventListener("click", clickFunction);
paperButton.addEventListener("click", clickFunction);
scissorsButton.addEventListener("click", clickFunction);

function clickFunction(e) {
    const computerSelection = getComputerChoice(arrayRPS);
    const playerSelectionId = e.target.id;
    const playerSelection = playerSelectionId.slice(0, -6);
    document.getElementById('roundresult').innerHTML = playRound(playerSelection, computerSelection);
    document.getElementById('score').innerHTML = `Score: ${playerScore} - ${computerScore}`
    changeColorButton();
    if (computerSelection === 'rock') {
        document.getElementById('compButton').style = "background-image: url('rock.png'); background-size: 80%;"
    } else if (computerSelection === 'paper') {
        document.getElementById('compButton').style = "background-image: url('paper.png'); background-size: 85%;"
    } else {
        document.getElementById('compButton').style = "background-image: url('scissors.png'); background-size: 90%;"
    }
   endGame();
}

function changeColorButton () {
    document.getElementById('compButton').classList.toggle("button3");
}

function endGame () {
    if (playerScore === 5) {
        document.getElementById('endscore').innerHTML = `Game over: You won!!`
        disableButtons()
    } else if (computerScore === 5) {
        document.getElementById('endscore').innerHTML = `Game over: You've lost!`
        disableButtons()
    }
}

function disableButtons() {
    rockButton.disabled = true;
    document.getElementById('rockButton').style = "pointer-events: none; background-color: grey;"
    paperButton.disabled = true;
    document.getElementById('paperButton').style = "pointer-events: none; background-color: grey;"
    scissorsButton.disabled = true;
    document.getElementById('scissorsButton').style = "pointer-events: none; background-color: grey;"
    document.getElementById('compButton').style = "background-color: grey;"
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


