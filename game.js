// first step, need to attach event (submit) listener to the form to get user data

// atttach event listeners to each gamebox

// initialize the game

// set win conditions for the game

// need to determine current player

// after each move, check win conditions and if not met, set other player as active

const form = document.querySelector('#myForm')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // initialize user form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    document.querySelector(".modal-wrapper").setAttribute('hidden', true)
    initializeGame(data);
})

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

    console.log(data);
    // add event listeners to the gameboard
}