


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

function playRound (humanChoice, computerChoice) { 
    if (humanChoice == computerChoice) { 
        console.log("It's a tie!");
    } else if (humanChoice != computerChoice) {
        console.log("WHat am I DOING");
        humanScore += humanScore;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);