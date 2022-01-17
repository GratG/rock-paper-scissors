
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
            return("You win!");// Rock beats scissors
        else
            return("You lose!");// Paper beats rock
    }
    if(playerSelection === "scissors"){
        if(computerSelection === "scissors")    
            return("Game is a draw!");
        else if(computerSelection === "paper")
            return("You win!");// Scissors beats paper
        else
            return("You lose!");// Rock beats scissors
    }
    if(playerSelection === "paper"){
        if(computerSelection === "paper")    
            return("Game is a draw!");
        else if(computerSelection === "rock")
            return("You win!");// Paper beats rock
        else
            return("You lose!");// Scissors beats paper
    }
    
        
}

function game(){
    console.log("Game will begin now: ");
    let pScore = 0; //declaring player scores
    let cScore = 0; //delaring computer score

    for(let i = 0; i != 5; i++){ //game iterates a total of 5 times
        const computerSelection = computerPlay();
        
        let playerSelection = prompt("choose rock, paper scissors!");
        if (playRound(playerSelection,computerSelection) === "Game is a draw!")
            console.log("Match is a draw! no winner!");
        else if (playRound(playerSelection,computerSelection) === "You win!"){
            pScore++ ;
            console.log("You win the match! You now have " + String(pScore) + " points.");
        }
        else if (playRound(playerSelection,computerSelection) === "You lose!"){
            cScore++;
            console.log("You lost the match! The computer now has " + String(cScore) + " points.");
        }
        console.log("Player score: " + String(pScore) + ". Computer score: " + String(cScore))
    }

    if(pScore > cScore) // returns whether you won, lost or the game was a draw.
        return(console.log("Congratulations you are the winner!"));
    else if (pScore < cScore)
        return(console.log("The winner of this game is the computer! Better luck next time!"));
    else
        return(console.log("This game ended in a draw! Well played!"));

}
//const playerSelection = "rock";
//const computerSelection = computerPlay();

//console.log(playRound(playerSelection, computerSelection));

game();
