// HTML Elements
const statsDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const divOfCells = document.querySelectorAll('.gamecell');



// global variables
const xLetter = '×';
const oLetter = '○';

let gameLive = true;
let xTurn = true;


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

// check game status
const checkStatusOfGame = () => {
  const topLeft = divOfCells[0].classList[1];
  const topMiddle = divOfCells[1].classList[1];
  const topRight = divOfCells[2].classList[1];
  const middleLeft = divOfCells[3].classList[1];
  const middleMiddle = divOfCells[4].classList[1];
  const middleRight = divOfCells[5].classList[1];
  const bottomLeft = divOfCells[6].classList[1];
  const bottomMiddle = divOfCells[7].classList[1];
  const bottomRight = divOfCells[8].classList[1];

  // if statements to check for possibe combinations (logic of the game)
  if (topLeft && topLeft === topMiddle && topLeft === topRight) {
    winnerFntion(topLeft);
    divOfCells[0].classList.add('won');
    divOfCells[1].classList.add('won');
    divOfCells[2].classList.add('won');
  } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
    winnerFntion(middleLeft);
    divOfCells[3].classList.add('won');
    divOfCells[4].classList.add('won');
    divOfCells[5].classList.add('won');
  } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
    winnerFntion(bottomLeft);
    divOfCells[6].classList.add('won');
    divOfCells[7].classList.add('won');
    divOfCells[8].classList.add('won');
  } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    winnerFntion(topLeft);
    divOfCells[0].classList.add('won');
    divOfCells[3].classList.add('won');
    divOfCells[6].classList.add('won');
  } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
    winnerFntion(topMiddle);
    divOfCells[1].classList.add('won');
    divOfCells[4].classList.add('won');
    divOfCells[7].classList.add('won');
  } else if (topRight && topRight === middleRight && topRight === bottomRight) {
    winnerFntion(topRight);
    divOfCells[2].classList.add('won');
    divOfCells[5].classList.add('won');
    divOfCells[8].classList.add('won');
  } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
    winnerFntion(topLeft);
    divOfCells[0].classList.add('won');
    divOfCells[4].classList.add('won');
    divOfCells[8].classList.add('won');
  } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
    winnerFntion(topRight);
    divOfCells[2].classList.add('won');
    divOfCells[4].classList.add('won');
    divOfCells[6].classList.add('won');
  } else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
    gameLive = false;
    statsDiv.innerHTML = 'Game is tied!';
  } else {
    xTurn = !xTurn;
    if (xTurn) {
      statsDiv.innerHTML = `${xLetter} turn`;
    } else {
      statsDiv.innerHTML = `<span>${oLetter} turn</span>`;
    }
  }
};


// event Handlers

const eventHandlerReset = () => {
  xTurn = true;
  statsDiv.innerHTML = `${xLetter} turn`;
  for (const cellDiv of divOfCells) {
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

  if (xTurn) {
    classList.add('x');
    checkStatusOfGame();
  } else {
    classList.add('o');
    checkStatusOfGame();
  }
};


// event listeners
resetDiv.addEventListener('click', eventHandlerReset);

for (const cellDiv of divOfCells) {
  cellDiv.addEventListener('click', eventHandlerCellClick)
}


//add a sound

const audioVar = document.querySelector("audio");
console.log(audioVar)
/*
function firstFunction(e) {

audioVar.pause(e);

}

*/


function playMusic(audio) {
    music.pause();
    music = new Audio(audio);
    music.play();
}

audioVar.addEventListener("click", playMusic());





