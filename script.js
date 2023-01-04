function getComputerChoice() {

    let number = getRandomNo(1, 3);

    switch (number) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function getRandomNo(min, max) {
    return Math.floor(Math.random() * 3) + 1;
}

function getPlayerChoice() {
    return prompt("Rock, Paper or Scissors?");
}

function getChoiceLogic(choice) {

    switch (choice) {
        case "rock":
            return 1;
        case "paper":
            return 2;
        case "scissors":
            return 3;
        default:
            return 0;
   }
}

function playRound(choice) {
    const computerChoiceLogic = getChoiceLogic(getComputerChoice());
    const playerChoiceLogic = getChoiceLogic(choice);
    return gameLogic(playerChoiceLogic, computerChoiceLogic);
}

// potentially convert choice strings to numbers here? can insert the
// strings directly into the win and loss strings
function gameLogic(player, com) {
    let choices = [player, com];
    choices = choices.join(",");

    if (player === com) {
        return ("Draw!")
    }
    else {
        switch (choices) {
            // player loses
            case "1,2":
                return("You Lose! Paper beats Rock");
            case "2,3":
                return("You Lose! Scissors beat Paper");
            case "3,1":
                return("You Lose! Rock beats Scissors");
            // player wins
            case "2,1":
                return("You Win! Paper beats Rock");
            case "3,2":
                return("You Win! Scissors beat Paper");
            case "1,3":
                return("You Win! Rock beats Scissors");
        }
    }
}

function game(choice) {
    let gameResult = playRound(choice);
    appendResult(gameResult);
    updateScore(gameResult);
}

const choiceButtons = document.querySelectorAll('button');
choiceButtons.forEach((button) => {button.addEventListener('click', selectOption);});

function selectOption(e) {
    console.log(e);
    let choice = e.currentTarget.className;
    game(choice);
}

function appendResult(gameResult) {
    const resultBlock = document.querySelector('.result')
    resultBlock.innerText = "Result:\n" + gameResult;
}

function updateScore(gameResult) {
    playerScore = document.querySelector('.playerScore');
    compScore = document.querySelector('.compScore');
    if(gameResult.includes("You Win!"))
    {
        playerScore.innerText = +playerScore.innerText + 1;
    }
    if(gameResult.includes("You Lose!"))
    {
        compScore.innerText = +compScore.innerText + 1;
    }
    checkWinner(playerScore, compScore);
}

function checkWinner(playerScore, compScore) {
    if(playerScore.innerText === '5')
    {
        const winner = document.querySelector('.winner');
        winner.innerText = 'The Player Wins!';
    }
    if(compScore.innerText === '5')
    {
        const winner = document.querySelector('.winner');
        winner.innerText = "The Computer Wins!";
    }
}