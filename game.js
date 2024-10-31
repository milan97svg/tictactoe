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
    console.log(data)
})