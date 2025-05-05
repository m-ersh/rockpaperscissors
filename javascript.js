
let humanScore = 0; 
let computerScore = 0;

var rock = document.createElement("button");
rock.textContent = "Rock";

var paper = document.createElement("button");
paper.textContent = "Paper";

var scis = document.createElement("button");
scis.textContent = "Scissors";

document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(scis);

rock.addEventListener('click', handle);
paper.addEventListener('click', handle);
scis.addEventListener('click', handle);

const results =  document.createElement("div");
results.classList.add("div");
results.textContent = "Score: ";
document.body.appendChild(results);

// Function that takes the button's text content and compares it to the computer's choice
function handle (event) {
    let humanChoice = event.target.textContent;
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
};

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

    results.innerHTML = "Human: " + humanScore + "<br>Computer: " + computerScore;
    
    // Checks if someone has won
    if (humanScore >= 5) {
        alert("You win!");
        return;
    } else if (computerScore >= 5) {
        alert("Computer wins. Sorry.");
    }   return;
}

// TO DO: 
// Change console.logs to DOM and have each round's selections update on screen.