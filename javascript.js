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
    document.getElementById("player-choice").innerText = playerSelection.toUpperCase();
    document.getElementById("computer-choice").innerText = computerSelection.toUpperCase();
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === "rock"){
        if(computerSelection === "scissors")
            pScore++;// Rock beats scissors
        else if (computerSelection === "paper")
            cScore++;// Paper beats rock
    }
    if(playerSelection === "scissors"){
        if(computerSelection === "paper")
            pScore++;// Scissors beats paper
        else if(computerSelection=== "rock")
            cScore++;// Rock beats scissors
    }
    if(playerSelection === "paper"){
        if(computerSelection === "rock")
            pScore++;// Paper beats rock
        else if(computerSelection === "scissors")
            cScore++;// Scissors beats paper
    }
    updateScores();//call update after scores are changed
}

function updateScores(){ //updates the scores of both the player and the computer
    
    document.getElementById("player-score").innerText = "Player score: " + pScore;  
    document.getElementById("computer-score").innerText = "Computer score: " + cScore;
}


 
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');


rockBtn.addEventListener('click', () => playRound("rock", computerPlay())) //rock button calls playround function
paperBtn.addEventListener('click', () => playRound("paper", computerPlay())) //paper button calls playround function
scissorsBtn.addEventListener('click', () => playRound("scissors", computerPlay())) //scissor button calls playround function
