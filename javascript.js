
function computerPlay(){
    let i = (Math.floor(Math.random() * 3 + 1 ));
    let s = "test";
    console.log(i)
    switch(i){
        case 1:
            s = "rock";
            break;
        case 2:
            s = "paper";
            break;
        case 3:
            s = "scissors";
            break;
    }
    console.log(s);
    return(s);
}

function playerPlay(){
    let selection = prompt("choose rock, paper scissors!");
    return(selection.toLowerCase());
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === "rock"){
        if(computerSelection === "rock")    
            return("Game is a draw!");
        else if(computerSelection === "scissors")
            return("You win! Rock beats scissors");
        else
            return("You lose! Paper beats rock!");
    }
    if(playerSelection === "scissors"){
        if(computerSelection === "scissors")    
            return("Game is a draw!");
        else if(computerSelection === "paper")
            return("You win! Scissors beats paper!");
        else
            return("You lose! Rock beats scissors!");
    }
    if(playerSelection === "paper"){
        if(computerSelection === "paper")    
            return("Game is a draw!");
        else if(computerSelection === "rock")
            return("You win! Paper beats rock!");
        else
            return("You lose! Scissors beats paper!");
    }
    
        
}

const playerSelection = "rock";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));