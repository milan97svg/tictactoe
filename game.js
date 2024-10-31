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



// atttach event listeners to each gamebox
const addEventListenerToGameBoard = (data) => {
    document.querySelectorAll('.box').forEach(box => {
        box.addEventListener('click', (event) => {
            playMove(event.target,data)
        })
    })
}




// initialize the game
const initializeVariables = (data) => {
    data.board = [0,1,2,3,4,5,6,7,8]
    data.player1 = "X";
    data.player2 = "O";
    data.round = 0;
    data.currentPlayer = "X";
    data.gameOver = false;
}

const initializeGame = (data) => {
    // initialize game variable
    initializeVariables(data);

    // add event listeners to the gameboard
    addEventListenerToGameBoard(data);
}



// need to determine current player

// after each move, check win conditions and if not met, set other player as active

// set win conditions for the game

const playMove = (box,data) => {
    // is game over? if game over, dont do anything
    if(data.gameOver) {
        return
    }
    // check if game box has a letter in it

    console.log(box,data)   
}



