


humanScore = 0; 
computerScore = 0;




function getComputerChoice() { 
    const result = Math.floor(Math.random() * 3);
    let computerChoice;

    if (result === 0) {
        computerChoice = "Rock";
    } else if (result === 1) { 
        computerChoice = "Paper";
    } else if (result === 2) {
        computerChoice = "Scissors";
    }

    console.log("Computer: " + computerChoice);
    return computerChoice;
}

function getHumanChoice() { 
    user = prompt("Rock, Paper, or Scissors?: ");
    let humanChoice = user.charAt(0).toUpperCase() + user.slice(1).toLowerCase();

    console.log("User: " + humanChoice);
    return humanChoice;
}

function playRound (humanSelection, computerSelection) {
    if (humanSelection == computerSelection) { 
        console.log("It's a tie!");
    } else if (humanSelection == "Rock" && computerSelection == "Paper") {
        computerScore += 1;
    } else if (humanSelection == "Rock" && computerSelection == "Scissors") {
        humanScore += 1;
    } else if (humanSelection == "Paper" && computerSelection == "Rock") {
        humanScore += 1;
    } else if (humanSelection == "Paper" && computerSelection == "Scissors") {
        computerScore += 1;
    } else if (humanSelection == "Scissors" && computerSelection == "Paper") {
        humanScore += 1;
    } else if (humanSelection == "Scissors" && computerSelection == "Rock") {
        computerScore += 1;
        }
    }

for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
    console.log("FINAL SCORE\nHuman: " + humanScore, "\nComputer: " + computerScore);
    
    if (humanScore > computerScore) {
        console.log("Congratulations! You win!");
    } else if (humanScore == computerScore) {
        console.log("It's a tie!");
    } else {
        console.log("Sorry. Try again?");
    }