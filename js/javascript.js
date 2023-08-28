const option = ["rock", "paper", "scissors"];


function getComputerChoice() {
    const choice = option[Math.floor(Math.random() * option.length)];
    return choice;
}

function getPlayerChoise(){

    let validatedInPut = false;
    while (validatedInPut == false) {
        const choice = prompt ("Rock Paper Scissors");
        if (choice == null){
            continue;
        }
        const choiceInLower = choice.toLocaleLowerCase();
        if (option.includes(choiceInLower)){
            validatedInPut = true;
            return choiceInLower;
        }
    }
}




function gameRound(computerSelection, playerSelection) {

    if (computerSelection === playerSelection) {
        return "tie";
    } else if (
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "rock" && computerSelection == "scissors")
    ) {
        return "player";
    } else {
        return "computer";
    }
}

function game() {
    let score = 0
    console.log("Welcome");
    

    for (i = 0; i < 5; i++){
        const playerSelection = getPlayerChoise();
        const computerSelection = getComputerChoice();
        console.log(gameRound(computerSelection, playerSelection));
        if (gameRound(computerSelection,playerSelection) == "player") {
            score++;
        }
             
    }
    if (score >= 3) {
        console.log("You Win");
    } else {
        console.log("You Lose!");
    }    
    console.log("Game over!");

       
    

}
game();