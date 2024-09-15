function getComputerChoice() {
    let random = Math.random();
    if (random < 1 / 3) {
        return "Rock"
    } else if (random < 2 / 3) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function getHumanChoice() {
    let user = prompt("Choose rock, paper, or scissors!")
    if (user.toLowerCase() === "rock") {
        return "Rock"
    } else if (user.toLowerCase() === "paper") {
        return "Paper"
    } else if (user.toLowerCase() === "scissors") {
        return "Scissors"
    } else {
        return "That wasn't a valid response. Type in 'rock', 'paper' or 'scissors'."
    }
}

let humanScore = 0;

let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === "Rock" && computerChoice === "Paper") ||
     (humanChoice === "Paper" && computerChoice === "Scissors") ||
     humanChoice === "Scissors" && computerChoice === "Rock") {
        computerScore++
        return `${computerChoice} beats ${humanChoice}. You lose this round.\n ———Score Card——— \n Human: ${humanScore} Computer: ${computerScore}`
    } else if ((humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore++
       return `${humanChoice} beats ${computerChoice}. You win this round.\n ———Score Card——— \n Human: ${humanScore} Computer: ${computerScore}`
    } else if ((humanChoice === "Rock" && computerChoice === "Rock") ||
    (humanChoice === "Paper" && computerChoice === "Paper") ||
    humanChoice === "Scissors" && computerChoice === "Scissors") {
       return `We both chose ${humanChoice}. It's a tie!\n ———Score Card——— \n Human: ${humanScore} Computer: ${computerScore}`
    } else {
        return "Sorry! I'm experiencing an error. Try playing again soon!"
    }
}

function playGame() {
    let round
    for (let round = 0; round < 5; round++) {
        console.log(playRound(getHumanChoice(), getComputerChoice()))
    }
}

console.log(playGame())
