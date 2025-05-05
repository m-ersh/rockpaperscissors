
let humanScore = 0; 
let computerScore = 0;
let roundCount = 0;

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
results.classList.add("results");
document.body.appendChild(results);

const rounds = document.createElement("div");
rounds.classList.add("rounds");
document.body.appendChild(rounds);

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
    return computerChoice;
};

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
    } roundCount ++;

    results.innerHTML = "Human: " + humanScore + "<br>Computer: " + computerScore + "<br>";
    
    const roundLog = document.createElement("div");
    roundLog.classList.add("round-log");
    roundLog.innerHTML = `
        Round ${roundCount} <br>
        Human: ${humanSelection} <br>
        Computer: ${computerSelection} <br><br>
        `;
    rounds.appendChild(roundLog);

    // Checks if someone has won
    if (humanScore >= 5) {
        alert("You win!");
        return;
    } else if (computerScore >= 5) {
        alert("Computer wins. Sorry.");
    }   return; 
};

