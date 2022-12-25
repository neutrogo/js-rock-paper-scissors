function getComputerChoice() {

    number = getRandomNo(1, 3);

    switch (number) {
        case 1:
            console.log("Rock");
            break;
        case 2:
            console.log("Paper");
            break;
        case 3:
            console.log("Scissors");
            break;
    }
}

function getRandomNo(min, max) {
    return Math.floor(Math.random() * 3) + 1;
}
