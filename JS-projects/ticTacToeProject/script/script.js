const cells = document.querySelectorAll('.cell');
let gameStatus = document.querySelector('#statusText');
const restartBtn = document.querySelector('#restartBtn');
const winCond= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];
let boardOptions=['','','','','','','','',''];
let currentPlayer ='X';
let running=false;

startGame();
alert("Welcome to Tic Tac Toe! Click on any cell to start the game. The first player to get 3 in a row, column or diagonally wins! Click on the restart button to play again.");
function startGame(){
cells.forEach(cell=> cell.addEventListener('click', cellClick));
restartBtn.addEventListener('click', restartGame);
gameStatus.textContent = `${currentPlayer}'s turn to play!`;
running=true;
}

function cellClick() {
    const cellIndex=this.getAttribute('cellIndex');
    if(boardOptions[cellIndex] != ""|| !running){
        return;
    }
    updateCell(this,cellIndex);
    checkWinner();
}

function updateCell(cell,index){
boardOptions[index]=currentPlayer;
cell.textContent=currentPlayer;


}

function playerTurn(){
    currentPlayer=(currentPlayer=="X") ? "O" : "X" ;
    gameStatus.textContent = `${currentPlayer}'s turn to play!`;
}


function checkWinner(){
let gameWon = false;

for (let i=0 ; i < winCond.length; i++ ){
    const cond=winCond[i];
    const cellA = boardOptions[cond[0]];
    const cellB = boardOptions[cond[1]];
    const cellC = boardOptions[cond[2]];
    
    if(cellA=="" || cellB==""||cellC==""){
        continue;
    }
    if (cellA==cellB && cellB==cellC){

        gameWon=true;
        break;
    }
}
if (gameWon) {
    gameStatus.textContent = `${currentPlayer} has won!`;
    gameStatus.style.color = 'green';
    running = false;
}
else if(!boardOptions.includes("")){
        gameStatus.textContent = `It's a draw! Try again!`;
        gameStatus.style.color = 'red';
        running =false;
    }
    else {
        playerTurn();
    }
}

function restartGame() {
    currentPlayer = 'X';
    boardOptions = ['', '', '', '', '', '', '', '', ''];
    gameStatus.textContent = `${currentPlayer}'s turn to play!`;
    cells.forEach(cell=>cell.textContent="")
    gameStatus.style.color='black';
    running=true;
}
