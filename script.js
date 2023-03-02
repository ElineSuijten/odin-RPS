    // Array to store RPS options
    const arrayRPS = ["rock", "paper", "scissors"];

    // Variable for player and computer score
    let playerScore = 0;
    let computerScore = 0;


    // Function to return 'Rock', 'Paper', or 'Scissors' from the computer
    function getComputerChoice() {
        const computerChoice = arrayRPS[Math.floor(Math.random() * arrayRPS.length)];
        return computerChoice;
    }

    /* Function to play five rounds and reports the winner
    function game() {
      for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice(arrayRPS);
        const playerSelection = prompt("Choose 'rock', 'paper', or 'scissors'").toLowerCase();
        console.log(playRound(playerSelection, computerSelection)); */
        

        // Function to play a single round of RPS
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
    /*
    }
    if (playerScore > computerScore) {
      return "You are the winner!!"
    }
    else if (playerScore < computerScore) {
      return "You lost to the computer! Game over!"
    }
    else {
      return "It's a tie with the computer!"
    }
  }
  */
  console.log(game());
