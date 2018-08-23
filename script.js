//Modulo calculation
let playerSelection;
let computerSelection;

//Score
let round = 1;
let humanScore = 0;
let computerScore = 0;

//Modulo for negative integers
const mod = (playerSelection, computerSelection, n) => ((playerSelection - computerSelection) % n + n) % n;

//Select clickable images of rock, paper, scissors
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');


//Onclick events for images
rock.addEventListener('click', () => {
  playerSelection = 0;
  game();
});

paper.addEventListener('click', () => {
  playerSelection = 1;
  game();
});

scissors.addEventListener('click', () => {
  playerSelection = 2;
  game();
});


//Play a round
function playRound(playerSelection, computerSelection, n) {
    round++;
    document.getElementById("round-count").textContent = round;

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

/*Play 5 rounds and see who won */
function game () {
    if (humanScore === 5) {
        alert("Human Won!");    
        round = 1;
        document.getElementById("round-count").textContent = round;
        computerScore = 0;
        humanScore = 0;
        document.getElementById("computer-score").textContent = computerScore;
        document.getElementById("human-score").textContent = humanScore;
    }
    else if (computerScore === 5) {
        alert("Computer Won!")
        round = 1;
        document.getElementById("round-count").textContent = round;
        computerScore = 0;
        humanScore = 0;
        document.getElementById("computer-score").textContent = computerScore;
        document.getElementById("human-score").textContent = humanScore;
    }
    else {
      playRound(playerSelection, computerSelection, 3);
    }
}