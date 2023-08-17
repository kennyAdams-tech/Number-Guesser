/* 
GAME FUNCTION:
- player must guess a number between a min and max
- player gets a certain amount of guesses
- notify player guesses remaining
- notify the player of the correct answer if looses
- let player choose to play again
*/

// game values
let min = 1,
    max = 10,
    winningNum = getRandomNun(min, max),
    guessesLeft = 3;

//UI ELEMENTS    
const game = document.querySelector('#game'),
      minNum = document.querySelector('#min-num'),
      maxNum = document.querySelector('#max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message');

// assign minNum and maxNum
minNum.textContent = min;
maxNum.textContent = max;

// play again
game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload()
    }
})

// add event listener to guessBtn
guessBtn.addEventListener('click', function () {
    let guess = parseFloat(guessInput.value)

    if (isNaN(guess) || guess < min || guess > max) {
        // set message
        setMessage(`Please enter a value between ${min} and ${max}`, 'red')
    }

    // validate
       // check if won
    if (guess === winningNum) {
        // Game Over - won
        gameOver(true, `${winningNum} is correct, YOU WIN!`)

    } else {
        guessesLeft -= 1

        if (guessesLeft === 0) {
            // Game Over - lost
        gameOver(false, `Game Over. The correct Number was ${winningNum}.`)
            
        } else {
             // Game Continues - Play Again
             guessInput.style.borderColor = 'red'
             guessInput.value = ''
             message.style.color = 'red'
             setMessage(`${guess} is not correct. You have ${guessesLeft} guesses left`)
        }
    }

    console.log(guess)
})

// get random number
function getRandomNun(min, max) {
    return Math.floor(Math.random()*(max-min)+min);
}

// GAME OVER
function gameOver(won, msg) {
      let color;
      won === true ? color = 'green' : color = 'red'

        guessInput.disabled = true;
        guessInput.style.borderColor = color
        message.style.color = color
        // set message
        setMessage(msg)
        // play again
        guessBtn.textContent = 'play again'
        guessBtn.className += 'play-again' 

}

 // set message
 function setMessage(msg, color) {
    message.textContent = msg
    message.style.color = color
 }








