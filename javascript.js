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
    return 0;
}
function disableBtn(){
    document.getElementById("rockBtn").disabled = true;
    document.getElementById("paperBtn").disabled = true;
    document.getElementById("scissorsBtn").disabled = true;
    replayBtn.disabled = false;

    return 0;

}


function showReplay(){


    replayBtn.textContent = "play again?";
    replayBtn.classList.add('replayBtn');
    document.body.appendChild(replayBtn);

}

function reset(){
    document.getElementById("rockBtn").disabled = false;
    document.getElementById("paperBtn").disabled = false;
    document.getElementById("scissorsBtn").disabled = false;
    document.getElementById("vs").innerText = "VS";
    pScore = 0, cScore = 0;
    updateScores();
    document.getElementById("header").innerHTML = "A new game has started!";
    replayBtn.disabled = true;

}

function announceWinner(){
    if(pScore === 5){
        document.getElementById("header").innerText = "WINNER WINNER WINNER";
        disableBtn();
        document.getElementById("vs").innerText = "You have won! Congratulations - would you like to play again?";
        document.getElementById("player-choice").innerText = "";
        document.getElementById("computer-choice").innerText = "";
        showReplay();

    }
    if(cScore === 5){
        document.getElementById("header").innerText = "You have lost...";
        disableBtn();
        document.getElementById("vs").innerText = "You have lost against the mighty computers... Would you like to try again?";
        document.getElementById("player-choice").innerText = "";
        document.getElementById("computer-choice").innerText = "";
     showReplay();
        
    }
    return 0;
}

function updateScores(){ //updates the scores of both the player and the computer
    
    document.getElementById("player-score").innerText = "Player score: " + pScore;  
    document.getElementById("computer-score").innerText = "Computer score: " + cScore;
    if(pScore === 5 || cScore === 5)
        announceWinner();
    
}


 
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
let replayBtn = document.createElement("button");


rockBtn.addEventListener('click', () => playRound("rock", computerPlay())) //rock button calls playround function
paperBtn.addEventListener('click', () => playRound("paper", computerPlay())) //paper button calls playround function
scissorsBtn.addEventListener('click', () => playRound("scissors", computerPlay())) //scissor button calls playround function


replayBtn.addEventListener('click', () => reset());