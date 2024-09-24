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
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.getElementById("scissors");
const results = document.getElementById("results");
const scores = document.querySelector("#scores")
const dialog = document.querySelector("dialog")
const trial = document.querySelector("body + button")


rock.addEventListener("click", () => playRound("Rock", getComputerChoice()))
paper.addEventListener("click", () => playRound("Paper", getComputerChoice()))
scissors.addEventListener("click", () => playRound("Scissors", getComputerChoice()))

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === "Rock" && computerChoice === "Paper") ||
     (humanChoice === "Paper" && computerChoice === "Scissors") ||
     humanChoice === "Scissors" && computerChoice === "Rock") {
        computerScore++
        results.textContent = `${computerChoice} beats ${humanChoice}. You lose this round.`
        scores.textContent = `Human: ${humanScore} Computer: ${computerScore}`
    } else if ((humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore++
        results.textContent = `${humanChoice} beats ${computerChoice}. You win this round.`
        scores.textContent = `Human: ${humanScore} Computer: ${computerScore}`
    } else if ((humanChoice === "Rock" && computerChoice === "Rock") ||
    (humanChoice === "Paper" && computerChoice === "Paper") ||
    humanChoice === "Scissors" && computerChoice === "Scissors") {
       results.textContent = `We both chose ${humanChoice}. It's a tie!`
       scores.textContent = `Human: ${humanScore} Computer: ${computerScore}`
    } else {
        results.textContent = "Sorry! I'm experiencing an error. Try playing again soon!"
    }

    if (computerScore >= 5 || humanScore >= 5) {
        window.alert("Game over! Let's play again!")
        scores.textContent = ""
        results.textContent = ""
        humanScore = 0;
        computerScore = 0;
        return
    }
}
