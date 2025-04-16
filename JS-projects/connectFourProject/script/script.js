// const redPlayer = 'red';
// const yellowPlayer = 'yellow';
// const status = document.getElementById('status')
// const tiles = document.querySelectorAll('.tile')
// const cols = document.querySelectorAll('.col')
// let running = true;
// let currentPlayer = redPlayer
// const board = [
//     ['', '', '', '', '', ''],
//     ['', '', '', '', '', ''],
//     ['', '', '', '', '', ''],
//     ['', '', '', '', '', ''],
//     ['', '', '', '', '', ''],
//     ['', '', '', '', '', ''],
//     ['', '', '', '', '', ''],
// ];

// cols.forEach((col, colNum) => col.addEventListener('click', () => {
//     if (!running) {
//         return;
//     }

//     let rowNum = -1;

//     for (let row = 5; row >= 0; row--) {
//         if (board[row][colNum] === "") {
//             rowNum = row;

//             break;
//         }
//     }
//     if (rowNum === -1) {

//         status.innerHTML = 'This column is already full'
//         return;
//     }
//     board[rowNum][colNum] = currentPlayer;

//     const slotId = `slot${colNum * 6 + rowNum}`;
//     const slot = document.getElementById(slotId);
//     slot.style.backgroundColor = currentPlayer;
//     console.log(slotId,colNum);

//     changePlayer()
// }))

// function changePlayer() {
//     currentPlayer = currentPlayer == redPlayer ? yellowPlayer : redPlayer;
//     status.innerHTML = "It's " + currentPlayer + "'s turn";
// }
// cols.forEach((col) => col.addEventListener('click', () => {
//     console.log(col.id);

//     colNum = col.id.slice(-1)
//     let slotNum = colNum * 6 + 5

//     slotId = "slot" + slotNum
//     const slot = document.getElementById(slotId);
//     console.log(slotId)
//     checkSlot();
//     slot.style.background = currentPlayer;
//      if(slot=="red"||slot=="yellow"){
//         slotNum=slotNum-1;}
//         slotNum--
//         console.log(slotNum)
//     changePlayer()
//     updateBoard(colNum, col)
// }))

// function checkSlot() {
//     for (let i = 0; i < board.length; i++) {
//         for (let j = 0; j < board[i].length; j++) {
//             if (board[i][j] === "") {

//                 continue;
//             } else if (board[i][5] === "") {
//                 board[i][5] = currentPlayer;
//                 break;
//             } else if (j > 0) { board[i][j - 1] = currentPlayer; break; }
//         }
//     }
// }

// function changePlayer() {
//     if (currentPlayer === "red") {
//         currentPlayer = "yellow";
//     } else {
//         currentPlayer = "red";
//     }
// }
// function updateBoard(colNum, col) {
//     board[colNum][col.length - 1] = 'red';
//     // console.log(col.length);

//     // console.log(board);
// }

// function setGame() {

// }

const redPlayer = 'red';
const yellowPlayer = 'yellow';
const status = document.getElementById('status');
const resetBtn = document.getElementById("btn")
const tiles = document.querySelectorAll('.tile');
const cols = document.querySelectorAll('.col');
let running = true;
let currentPlayer = redPlayer;


const board = [
    ['', '', '', '', '', ''],  
    ['', '', '', '', '', ''],  
    ['', '', '', '', '', ''],  
    ['', '', '', '', '', ''],  
    ['', '', '', '', '', ''],  
    ['', '', '', '', '', ''],  
    ['', '', '', '', '', ''],  
];
alert(`Welcome to my Connect4 game! the rules are simple:
    Goal: Get four pieces in a row, column or diagonally.
    Gameplay: Players take turns dropping pieces.
    Winning: First to connect four wins.
    Tie: If the board fills without a winner, it's a draw. `)

status.innerHTML = `It's ${currentPlayer}'s turn`

cols.forEach((col, colNum) => {
    col.addEventListener('click', () => {
        if (!running) {
            return;
        }

        let rowNum = -1;


        for (let row = 5; row >= 0; row--) {
            if (board[colNum][row] === "") {
                rowNum = row;
                break;
            }
        }

        if (rowNum === -1) {
            status.innerHTML = 'This column is already full';
            return;
        }

        board[colNum][rowNum] = currentPlayer;

        const slotId = `slot${colNum * 6 + rowNum}`;
        const slot = document.getElementById(slotId);
        slot.style.backgroundColor = currentPlayer;  

        changePlayer();
    });
});

function changePlayer() {
    currentPlayer = currentPlayer === redPlayer ? yellowPlayer : redPlayer;
    status.innerHTML = `It's ${currentPlayer}'s turn`;
}

function checkForWin() {
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 4; col++) {
            if (board[col][row] && board[col][row] === board[col + 1][row] && board[col][row] === board[col + 2][row] && board[col][row] === board[col + 3][row]) {
                return true; 
            }
        }
    }


    for (let col = 0; col < 7; col++) {
        for (let row = 0; row < 3; row++) {
            if (board[col][row] && board[col][row] === board[col][row + 1] && board[col][row] === board[col][row + 2] && board[col][row] === board[col][row + 3]) {
                return true;
            }
        }
    }

    for (let col = 0; col < 4; col++) {
        for (let row = 0; row < 3; row++) {
            if (board[col][row] && board[col][row] === board[col + 1][row + 1] && board[col][row] === board[col + 2][row + 2] && board[col][row] === board[col + 3][row + 3]) {
                return true; 
            }
        }
    }


    for (let col = 3; col < 7; col++) {
        for (let row = 0; row < 3; row++) {
            if (board[col][row] && board[col][row] === board[col - 1][row + 1] && board[col][row] === board[col - 2][row + 2] && board[col][row] === board[col - 3][row + 3]) {
                return true;
            }
        }
        
    }

    return false;
    }
    function checkForTie() {
                for (let col = 0; col < 7; col++) {
        for (let row = 0; row < 6; row++) {
            if(board[col][row]==="")
                return false;
        }}
        return true;
    }



function changePlayer() {
    if (checkForWin()) {
        status.innerHTML = `${currentPlayer} wins!`;
        running = false;
        return;
    }
    if(checkForTie()){
        status.innerHTML = `It's a tie!`;
        running = false;
        return;
    }
    currentPlayer = currentPlayer === redPlayer ? yellowPlayer : redPlayer;
    status.innerHTML = `It's ${currentPlayer}'s turn`;

}

function resetGame() {

    tiles.forEach(tile => { tile.style.backgroundColor = '' })

    for (let col = 0; col < 7; col++) {
        for (let row = 0; row < 6; row++) { board[col][row] = '' }
    }

    running = true;
    currentPlayer = redPlayer
    status.innerHTML = `It's ${currentPlayer}'s turn`
}

resetBtn.addEventListener('click', resetGame)

