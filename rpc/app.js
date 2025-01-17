const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const possibleChoices = document.querySelectorAll('.choice');
const resetButton = document.getElementById("reset");
let userChoice;
let computerChoice;
let result;
let playerScore = 0;
let computerScore = 0;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;

    generateComputerChoice();
    getResult();
    updateScore();
}));

function generateComputerChoice(){
    const randomNumber = Math.floor( Math.random() * possibleChoices.length) + 1;
    
    if(randomNumber === 1){
        computerChoice = 'rock'
    }
    if(randomNumber === 2){
        computerChoice = 'paper'
    }
    if(randomNumber === 3){
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
    if(computerChoice === userChoice){
        result = 'its a draw!'
    }

    if(computerChoice === 'rock' && userChoice === 'paper'){
        result = 'you win!'
        playerScore++;
    }

    if(computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'you lost!'
        computerScore++;
    }

    if(computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'you win!'
        playerScore++;
    }

    if(computerChoice === 'paper' && userChoice === 'rock'){
        result = 'you lost!'
        computerScore++;
    }

    if(computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'you win!'
        playerScore++;
    }

    if(computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'you lost!'
        computerScore++;
    }

    resultDisplay.innerHTML = result;
}

function updateScore(){
    playerScoreDisplay.innerHTML = playerScore;
    computerScoreDisplay.innerHTML = computerScore;
}

resetButton.addEventListener('click',()=>{
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.innerHTML = playerScore;
    computerScoreDisplay.innerHTML = computerScore;
    resultDisplay.innerHTML = '';
    userChoiceDisplay.innerHTML = '-';
    computerChoiceDisplay.innerHTML = '-';
});
