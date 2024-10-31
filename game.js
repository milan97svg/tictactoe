// first step, need to attach event (submit) listener to the form to get user data
const form = document.querySelector('#myForm')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // initialize user form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    document.querySelector(".modal-wrapper").setAttribute('hidden', true)
    initializeGame(data);
})



// initialize variables
const initializeVariables = (data) => {
    data.board = [0,1,2,3,4,5,6,7,8]
    data.player1 = "X";
    data.player2 = "O";
    data.round = 0;
    data.currentPlayer = "X";
    data.gameOver = false;
}



// atttach event listeners to each gamebox
const addEventListenerToGameBoard = (data) => {
    document.querySelectorAll('.box').forEach(box => {
        box.addEventListener('click', (event) => {
            playMove(event.target,data)
        })
    })
}



// initialize the game
const initializeGame = (data) => {
    // initialize game variable
    adjustDom('displayTurn', `${data.player1Name}'s turn`)
    initializeVariables(data);

    // add event listeners to the gameboard
    addEventListenerToGameBoard(data);
}

const playMove = (box,data) => {
    // is game over? if game over, dont do anything
    if(data.gameOver || data.round > 8) {
        return;
    }
    // check if game box has a letter in it, if so, dont do anythings
    if(data.board[box.id] === "X" || data.board[box.id] === "O") {
        return;
    }

    // adjust the DOM for player move, and then check win conditions
    data.board[box.id] = data.currentPlayer
    box.textContent = data.currentPlayer
    box.classList.add(data.currentPlayer === "X" ? "player1" : "player2")

    // increase the round #
    data.round++;
    console.log(box,data)   

    // check end conditions
    if(endConditions(data)) {
        return;
    }

    // change current player
    // change the dom, and change data.player
    changePlayer(data);
}

// define wincondtions
const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


// defining endConditions
const endConditions = (data) => {
    // 3 potential options,
    // winner
    // tie
    // game not over yet
    if(checkWinner(data)) {
        // adjust the dom to reflect win
        let winnerName = 
            data.currentPlayer === "X" ? data.player1Name : data.player2Name;
        adjustDom('displayTurn', winnerName + ' has won the game');
        return true;
    } else if (data.round === 9) {
        adjustDom('displayTurn', "It's a Tie!");
        data.gameOver = true;
        // adjust the dom to reflect tie
        return true;
    }
    return false;
}

const checkWinner = (data) => {
    let result = false;
    winningConditions.forEach(condition => {
        if(data.board[condition[0]] === data.board[condition[1]] &&
            data.board[condition[1]] === data.board[condition[2]]) {
            data.gameOver = true;
            result = true;
        }
    })
    return result;
}

const adjustDom = (className, textContent) => {
    const elem = document.querySelector(`.${className}`);
    elem.textContent = textContent;
}

const changePlayer = (data) => {
    data.currentPlayer = data.currentPlayer === "X" ? "O" : "X";
    // adjust the dom
    let displayTurnText = data.currentPlayer === "X" ? data.player1Name : data.player2Name
    adjustDom('displayTurn', `${displayTurnText}'s turn`)
}

