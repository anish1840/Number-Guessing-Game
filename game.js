// let randomNumber=parseInt(Math.random()*100+1)

// const submite=document.querySelector('#subt');
// const userinput=document.querySelector('#guessField');
// const gusseslot=document.querySelector('.guesses');
// const remaining=document.querySelector('.lastResult');
// const lowOrHi=document.querySelector('.lowOrHi');
// const startover=document.querySelector('.resultParas');

// const p=document.createElement('p')


// let prevGuess=[];
// let numGuess=1;

// let playGame=true;
// if(playGame){
//   submite.addEventListener('click',function(e){
//     e.preventDefault();
//     const guess=parseInt(userinput.value)
//     vaildateGuess(guess)
//   })
// }

// function vaildateGuess(guess){
//     if(isNaN(guess)){
//         alert(`please enter a vaild no `)
//     }else if(guess<1){
//         alert(`please enter a no more than 1 `)
//     }else if(guess>=100){
//         alert(`please enter a no less than 100`)
//     }else{
//         prevGuess.push(guess)
//         if(numGuess>=10){
//            displayGuess(guess)
//            displayMassage(`game is over ,random number was ${randomNumber}`)
//            endGame();
//         }else{
//             displayGuess(guess)
//             checkGuess(guess)
//         }
//     }
// }
// function checkGuess(guess){
//     if(guess === randomNumber){
//         displayMassage(`You can guess right no`)
//         endGame();
//     }else if(guess<randomNumber){
//         displayMassage(`number is Too low`)
//     }else if(guess>randomNumber){
//         displayMassage(`number is Too high`)
//     }
// }
// function displayGuess(guess){
//     userinput.value= '';
//     gusseslot.innerHTML += `${guess}  `;
//     numGuess++;
//     remaining.innerHTML=`${11-numGuess}`
// }
// function displayMassage(massage){
//     lowOrHi.innerHTML=`<h2>${massage}</h2>`
// }
// function endGame(){
//     userinput.value= '';
//     userinput.setAttribute('disable','')
//     p.classList.add('button')
//     p.innerHTM = `<h12 id="newGame">Start new Game</h2>`;
//     startover.appendChild(p);
//     playGame=false;
//     newGame();
// }
// function newGame(){
//     const newGameButton=document.querySelector('#newGame')
//     newGameButton.addEventListener('click',function(e){
//        randomNumber=parseInt(Math.random()*100+1);
//        prevGuess=[];
//        numGuess=1;
//        gusseslot.innerHTML= '';
//        remaining.innerHTML=`${11-numGuess}`;
//        userinput.removeChild(p);

//        playGame=true;
//     })
// }

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`🎉 You guessed it right!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOO LOW`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOO HIGH`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', ''); // Fixed typo 'disable'
  p.classList.add('button');
  p.innerHTML = `<span id="newGame">Start New Game</span>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `10`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    displayMessage('');
    playGame = true;
  });
}
