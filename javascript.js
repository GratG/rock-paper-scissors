let pScore = 0; //declaring player scores
let cScore = 0; //delaring computer score

function computerPlay(){
    let i = (Math.floor(Math.random() * 3 + 1 ));
    let s = "";
    
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
    console.log("computer: " + s)
    return(s);
}

function playRound(playerSelection, computerSelection){
    console.log(pScore)
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === "rock"){
        if(computerSelection === "rock")    
            return("Game is a draw!");
        else if(computerSelection === "scissors")
            return(pScore++);// Rock beats scissors
        else
            return(cScore++);// Paper beats rock
    }
    if(playerSelection === "scissors"){
        if(computerSelection === "scissors")    
            return("Game is a draw!");
        else if(computerSelection === "paper")
            return(pScore++);// Scissors beats paper
        else
            return(cScore++);// Rock beats scissors
    }
    if(playerSelection === "paper"){
        if(computerSelection === "paper")    
            return("Game is a draw!");
        else if(computerSelection === "rock")
            return(pScore++);// Paper beats rock
        else
            return(cScore++);// Scissors beats paper
    }
}


 
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');


rockBtn.addEventListener('click', () => playRound("rock", computerPlay())) //rock button calls playround function
paperBtn.addEventListener('click', () => playRound("paper", computerPlay())) //paper button calls playround function
scissorsBtn.addEventListener('click', () => playRound("scissors", computerPlay())) //scissor button calls playround function


