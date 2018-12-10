const playerNameInputs = document.querySelectorAll('.player-name-inputs');
const domPlayerDivs = document.querySelectorAll('.player-names');
const domCategoryDivs = document.querySelectorAll('.category-text');
const ddWagerInput = document.querySelector('.wager-dd-text-input');
const wagerErrorText = document.querySelector('.dd-wager-error-message');
const answerInput = document.querySelector('.answer-text-input');
const answerResponseText = document.querySelector('.answer-message-text');
const overlayDiv = document.querySelector('.overlay');
const clueBoxes = document.querySelectorAll('.clue-box');

// check playerAnswer and answerInput in functions;
const submitAnswer = document.querySelector('.submit-answer-button');
//const playerAnswer = document.querySelector('.answer-text-input');
const playerScore = document.querySelectorAll('.player-1-score')

// store these in classes. having trouble accessing them here.
let currentClue; //round.clues - actual clue from that array
let index; //index of current clue in round.clues array
let currentRoundObj = {};
let game = new Game();

let round1;
let round2;
let round3;
let clue;
let currentPlayer;
let round;

// document.querySelector('.restart-button').addEventListener('click', resetGame);
// const playerAnswer = document.querySelector('.answer-text-input').addEventListener('input', checkInputs);
document.querySelector('.restart-button').addEventListener('click', resetGame);
document.querySelector('.start-button').addEventListener('click', startGame);
// document.querySelector('.player-name-inputs').forEach((playerName) => {
//   playerName.on('input', checkInputs);
// });
document.querySelector('.submit-dd-wager-button').addEventListener('click', submitDailyDoubleWager);
document.querySelector('.submit-wagers-button').addEventListener('click', submitFinalWagers);
// document.querySelector('.wager-text-input').forEach((wager) => {
//   wager.addEventListener('input', checkInputs);
// });

document.querySelector('.submit-answer-button').addEventListener('click', submitAnswer);

clueBoxes.forEach((clueBox) => {
  clueBox.addEventListener('click', displayClue);
});

// document.querySelector('.answer-text-input').addEventListener('input', checkInputs);

// document.querySelectorAll('.clue-box').forEach((box) => {
//   box.addEventListener('click', displayClue);
// });

function displayClue() {
  index = parseInt(event.target.dataset.id);
  currentClue = currentRoundObj.clues[parseInt(event.target.dataset.id)];
  domUpdates.editClueHTML(currentClue, document.querySelector('.clue-text'));
  if (currentClue.dailyDouble) {
    domUpdates.changeDisplayedScreen(overlayDiv);
    domUpdates.changeDisplayedScreen(document.querySelector('.daily-double-pop-up'));
  } else {
    domUpdates.changeDisplayedScreen(overlayDiv);
    domUpdates.changeDisplayedScreen(document.querySelector('.clue-pop-up'));
  }
}

function submitDailyDoubleWager() {
  let dailyDouble = new DailyDouble();
  // update highest score on board!
  let validWager = dailyDouble.validateWager(ddWagerInput.value, currentRoundObj, game.playerTurn);
  domUpdates.resetPlayerInput(ddWagerInput);
  domUpdates.updateWagerMessage(validWager, dailyDouble.highRange);
}

function submitAnswer() {
  // have it display the answer?
  // currently works on round object - update to clue
  let checkAnswer = currentRoundObj.validateAnswer(answerInput.value, index);
  currentRoundObj.addCalledIndex(index);
  domUpdates.updateAnswerMessage(checkAnswer);
  domUpdates.disableClue(index);
  domUpdates.resetPlayerInput(answerInput);
  game.changePlayerTurn();

  if (currentRoundObj.clueCount === 16) {
    updateGameBoard();
  }
}

function updateGameBoard() {
  game.changeRound();
  game.playerTurn = 1;

  if (game.currentRound === 2) {
    setupRound2(); 
  } else {
    setupFinalRound();
  }
}

function setupFinalRound() {
  currentRoundObj = round3;
  domUpdates.changeDisplayedScreen(document.querySelector('.final-round-pop-up'));
  domUpdates.changeDisplayedScreen(overlayDiv);
  domUpdates.updateRoundText(document.querySelector('.round-text'), 'FINAL ROUND');

}

function submitFinalWagers() {

}

function setupRound2() {
  currentRoundObj = round2;
  domUpdates.updateRoundText(document.querySelector('.round-text'), 'ROUND 2');
  domUpdates.setCategoryNames(round2.categoryNames, domCategoryDivs);
  clueBoxes.forEach((clueBox) => {
    clueBox.addEventListener('click', displayClue);
    domUpdates.enableClues(clueBox);
    clueBox.innerText = clueBox.innerText * 2;
  });
}

function resetGame() {
  domUpdates.changeDisplayedScreen(document.querySelector('.start-pop-up'));
  domUpdates.changeDisplayedScreen(document.querySelector('.game-page'));
  clueBoxes.forEach((clueBox) => {
    clueBox.addEventListener('click', displayClue);
    domUpdates.enableClues(clueBox);
  });
}

function startGame() {
  let player1 = new Player(playerNameInputs[0].value);
  let player2 = new Player(playerNameInputs[1].value);
  let player3 = new Player(playerNameInputs[2].value);
  
  game = new Game();
  game.chooseCategories(data.categories);

  round1 = new Round(1);
  round1.setCategoryIds(game.categoryIds);
  round1.getClues();
  round1.setDailyDouble();
  currentPlayer = player1;
  domUpdates.setCategoryNames(round1.categoryNames, domCategoryDivs);

  round2 = new Round(2);
  round2.setCategoryIds(game.categoryIds);
  round2.getClues();
  round2.updatePointValues();
  round2.setDailyDouble();

  let round3 = new FinalRound(3);
  round3.setCategoryIds(game.categoryIds);
  round3.getClues();
  round3.getSingleClue();

  currentRoundObj = round1;

  domUpdates.changeDisplayedScreen(document.querySelector('.start-pop-up'));
  domUpdates.changeDisplayedScreen(document.querySelector('.game-page'));
  domUpdates.displayPlayerNames(playerNameInputs, domPlayerDivs);
}

function displayClue() {
  clue = new Clue();
  currentClue = currentRoundObj.clues[parseInt(event.target.dataset.id)];
  // check if daily double
  domUpdates.editClueHTML(currentClue, document.querySelector('.clue-text'));
  domUpdates.changeDisplayedScreen(document.querySelector('.clue-pop-up'));
  submitAnswer.addEventListener('click', (clue.validateAnswer.bind(null, playerAnswer)));
}






