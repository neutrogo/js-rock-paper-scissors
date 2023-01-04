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
    gameLogic(playerChoiceLogic, computerChoiceLogic);
}

// potentially convert choice strings to numbers here? can insert the
// strings directly into the win and loss strings
function gameLogic(player, com) {
    let choices = [player, com];
    choices = choices.join(",");

    // if the player input is invalid
    if(player === 0) {
        console.log("Invalid Input, please enter 'Rock', 'Paper', or 'Scissors'")
    }
    else if (player === com) {
        console.log("Draw!")
    }
    else {
        switch (choices) {
            // player loses
            case "1,2":
                console.log("You Lose! Paper beats Rock");
                break;
            case "2,3":
                console.log("You Lose! Scissors beat Paper");
                break;
            case "3,1":
                console.log("You Lose! Rock beats Scissors");
                break;
            // player wins
            case "2,1":
                console.log("You Win! Paper beats Rock");
                break;
            case "3,2":
                console.log("You Win! Scissors beat Paper");
                break;
            case "1,3":
                console.log("You Win! Rock beats Scissors");
                break;
        }
    }
}

function game(choice) {
    
        playRound(choice);
}

const choiceButtons = document.querySelectorAll('button');
//choiceButtons.addEventListener('click', selectOption);
choiceButtons.forEach((button) => {button.addEventListener('click', selectOption);});

function selectOption(e) {
    console.log(e);
    let choice = e.currentTarget.className;
    game(choice);
}

