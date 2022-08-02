// Variables
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

// Callback function & Events
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) == randomNumber) {
    screen1.classList.add('hide')
    screen2.classList.remove('hide')

    if (xAttempts == 1) {
      document.querySelector(
        '.screen2 h2'
      ).innerText = `You guessed the number in ${xAttempts} attempt.`
    } else {
      document.querySelector(
        '.screen2 h2'
      ).innerText = `You guessed the number in ${xAttempts} attempts.`
    }
  }

  inputNumber.value = ''

  xAttempts++
}

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function () {
  screen1.classList.remove('hide')
  screen2.classList.add('hide')
  xAttempts = 1
})
