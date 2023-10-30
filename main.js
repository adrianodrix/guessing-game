// constants
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const inputNumber = document.querySelector("#inputNumber")
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

//variables
let attempts = 0
let randomNumber = Math.round(Math.random() * 10)
console.log('randomNumber', randomNumber)

// listeners
btnTry.addEventListener('click', handleTry)
btnReset.addEventListener('click', handlePlayAgain)
document.addEventListener('keydown', handleEnter)

// functtions
function handleTry(e) {
    console.log(arguments.callee.name)

    e.preventDefault()
   
    ++attempts

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()

        screen2
            .querySelector('h2')
            .innerHTML = `🥳 Got it right in ${attempts} ${attempts > 1 ? 'tries' : 'attempt'}`
    } else {
        btnTry.innerHTML = `Try (${attempts})`
        inputNumber.select()
    }
}

function handlePlayAgain(e) {
    console.log(arguments.callee.name)
    e.preventDefault()

    attempts = 0
    randomNumber = Math.round(Math.random() * 10)
    console.log('new randomNumber', randomNumber)

    btnTry.innerHTML = `Try`
    inputNumber.value = ''

    toggleScreen()
    inputNumber.focus()   
}

function handleEnter(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handlePlayAgain(e)
    }
}

function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}
