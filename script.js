//Modulo calculation
let playerSelection;
let computerSelection;

//Modulo for negative integers
const mod = (playerSelection, computerSelection, n) => ((playerSelection - computerSelection) % n + n) % n;

//Select clickable images of rock, paper, scissors
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');


//Onclick events for images
rock.addEventListener('click', () => {
  playerSelection = 0;
  playRound(playerSelection, computerSelection, 3);
});

paper.addEventListener('click', () => {
  playerSelection = 1;
  playRound(playerSelection, computerSelection, 3);
});

scissors.addEventListener('click', () => {
  playerSelection = 2;
  playRound(playerSelection, computerSelection, 3);
});


//Play a round
function playRound(playerSelection, computerSelection, n) {
    let round = 1;
    round++;
    document.getElementById("round-count").textContent = round;
  
    let humanScore = 0;
    let computerScore = 0;

    computerSelection = Math.floor(Math.random() * 3);
    
    if (mod(playerSelection, computerSelection, 3) === 0) {
        alert("It's a tie! Try again.");
    }
    else if (mod(playerSelection, computerSelection, 3) === 1) {
        alert("Human won this one!");
        humanScore++;
        document.getElementById("human-score").textContent = humanScore;
    }
    else if (mod(playerSelection, computerSelection, 3) === 2) {
        alert("Computer won this one!");
        computerScore++;
        document.getElementById("computer-score").textContent = computerScore;
    }
    else {
        alert("Problem in playRound");
    }
}

/* Play 5 rounds and see who won
function game () {
    
}*/
