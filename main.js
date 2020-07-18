// HTML Elements
const statsDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const divBoxes = document.querySelectorAll('.boxes');



// global variables
const xLetter = '×';
const oLetter = '○';
// initialize variables
let gameLive = true;  
let playerXTurn = true;


// functions
const letterToSymbol = (letter) => letter === 'x' ? xLetter : oLetter; // ternary. If the letter is equal to 'x' then xletter. Otherwise get the oLetter

const winnerFntion = (letter) => {
  gameLive = false;
  if (letter === 'x') {
    statsDiv.innerHTML = `${letterToSymbol(letter)} has won!`;
  } else {
    statsDiv.innerHTML = `<span>${letterToSymbol(letter)} has won!</span>`;
  }
};

// check game status and boxes positions // create loop ...
const checkStatusOfGame = () => {
  const topLeft = divBoxes[0].classList[1]; // 1st index section of the cell or box
  const topMiddle = divBoxes[1].classList[1];
  const topRight = divBoxes[2].classList[1];
  const middleLeft = divBoxes[3].classList[1];
  const middleMiddle = divBoxes[4].classList[1];
  const middleRight = divBoxes[5].classList[1];
  const bottomLeft = divBoxes[6].classList[1];
  const bottomMiddle = divBoxes[7].classList[1];
  const bottomRight = divBoxes[8].classList[1];

  // if statements to check for possibe combinations (logic of the game)
  // switch cases can be used.... 
  if (topLeft && topLeft === topMiddle && topLeft === topRight) {
    winnerFntion(topLeft);
    divBoxes[0].classList.add('won');
    divBoxes[1].classList.add('won');
    divBoxes[2].classList.add('won');
  } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
    winnerFntion(middleLeft);
    divBoxes[3].classList.add('won');
    divBoxes[4].classList.add('won');
    divBoxes[5].classList.add('won');
  } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
    winnerFntion(bottomLeft);
    divBoxes[6].classList.add('won');
    divBoxes[7].classList.add('won');
    divBoxes[8].classList.add('won');
  } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    winnerFntion(topLeft);
    divBoxes[0].classList.add('won');
    divBoxes[3].classList.add('won');
    divBoxes[6].classList.add('won');
  } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
    winnerFntion(topMiddle);
    divBoxes[1].classList.add('won');
    divBoxes[4].classList.add('won');
    divBoxes[7].classList.add('won');
  } else if (topRight && topRight === middleRight && topRight === bottomRight) {
    winnerFntion(topRight);
    divBoxes[2].classList.add('won');
    divBoxes[5].classList.add('won');
    divBoxes[8].classList.add('won');
  } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
    winnerFntion(topLeft);
    divBoxes[0].classList.add('won');
    divBoxes[4].classList.add('won');
    divBoxes[8].classList.add('won');
  } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
    winnerFntion(topRight);
    divBoxes[2].classList.add('won');
    divBoxes[4].classList.add('won');
    divBoxes[6].classList.add('won');
  } else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
    gameLive = false;
    statsDiv.innerHTML = 'Game is tied!';
  } else {
    playerXTurn = !playerXTurn;
    if (playerXTurn) {
      statsDiv.innerHTML = `${xLetter} turn`;
    } else {
      statsDiv.innerHTML = `<span>${oLetter} turn</span>`;
    }
  }
};


// event Handlers

const eventHandlerReset = () => {
  playerXTurn = true;
  statsDiv.innerHTML = `${xLetter} turn`;
  for (const cellDiv of divBoxes) {
    cellDiv.classList.remove('x');
    cellDiv.classList.remove('o');
    cellDiv.classList.remove('won');
  }
  gameLive = true;
};

const eventHandlerCellClick = (e) => {
  const classList = e.target.classList;

  if (!gameLive || classList[1] === 'x' || classList[1] === 'o') {
    return;
  }

  if (playerXTurn) {
    classList.add('x');
    checkStatusOfGame();
  } else {
    classList.add('o');
    checkStatusOfGame();
  }
};


// event listeners
resetDiv.addEventListener('click', eventHandlerReset);
// loop
for (const cellDiv of divBoxes) {
  cellDiv.addEventListener('click', eventHandlerCellClick)
}


//add a sound.. I'm still working on this function

const audioVar = document.querySelector("audio");
console.log(audioVar)



function playMusic(audio) {
    music.pause();
    music = new Audio(audio);
    music.play();
}

audioVar.addEventListener("click", playMusic());





