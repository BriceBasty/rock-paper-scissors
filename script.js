//To see the live version click Preview --> Preview file index.html on index.html

//Modulo calculation
let playerSelection = document.querySelector('#image-pick-item'); // = window.prompt("Choose between Rock, Paper and Scissors").toLowerCase();
let computerSelection;

//Modulo for negative integers
const mod = (playerSelection, computerSelection, n) => ((playerSelection - computerSelection) % n + n) % n;

//Select clickable images of rock, paper, scissors
var rock = document.querySelector('#rock');
var paper = document.querySelector('#paper');
var scissors = document.querySelector('#scissors');

//Score and round
let round = 1;
var humanScore = 0;
var computerScore = 0;

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

/* Play 5 rounds and see who won
function game () {
    
}*/


/*Console logs
console.log(mod(playerSelection, computerSelection, 3)+'\n');

console.log(playerSelection);
console.log(computerSelection+'\n');

console.log(playRound(playerSelection, computerSelection, 3));*/