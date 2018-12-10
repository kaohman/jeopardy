const playerNameInputs = document.querySelectorAll('.player-name-inputs');
const domPlayerDivs = document.querySelectorAll('.player-names');
const domCategoryDivs = document.querySelectorAll('.category-text');
const ddWagerInput = document.querySelector('.wager-dd-text-input');
const wagerErrorText = document.querySelector('.dd-wager-error-message');
const answerInput = document.querySelector('.answer-text-input');
const answerResponseText = document.querySelector('.answer-message-text');

// check playerAnswer and answerInput in functions;
const submitAnswer = document.querySelector('.submit-answer-button');
//const playerAnswer = document.querySelector('.answer-text-input');
const playerScore = document.querySelectorAll('.player-1-score')

// store these in classes. having trouble accessing them here.
let currentClue;
let index;
let currentRoundObj = {};
let game = new Game();
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
// document.querySelector('.submit-wagers-button').addEventListener('click', submitFinalWagers);
// document.querySelector('.wager-text-input').forEach((wager) => {
//   wager.addEventListener('input', checkInputs);
// });

document.querySelector('.submit-answer-button').addEventListener('click', submitAnswer);
//change box vars to clueBox
document.querySelectorAll('.clue-box').forEach((clueBox) => {
  clueBox.addEventListener('click', displayClue);

// document.querySelector('.answer-text-input').addEventListener('input', checkInputs);

// document.querySelectorAll('.clue-box').forEach((box) => {
//   box.addEventListener('click', displayClue);
// });

function displayClue() {
  index = event.target.dataset.id;
  currentClue = currentRoundObj.clues[parseInt(event.target.dataset.id)];
  domUpdates.editClueHTML(currentClue, document.querySelector('.clue-text'));
  if (currentClue.dailyDouble) {
    domUpdates.changeDisplayedScreen(document.querySelector('.daily-double-pop-up'));
  } else {
    domUpdates.changeDisplayedScreen(document.querySelector('.clue-pop-up'));
  }
}

function submitDailyDoubleWager() {
  let dailyDouble = new DailyDouble();
  // update highest score on board!
  let validWager = dailyDouble.validateWager(ddWagerInput.value, 400, game.playerTurn);
  domUpdates.updateWagerMessage(validWager, dailyDouble.highRange);
}

function submitAnswer() {
  // currently works on round object - update to clue
  let checkAnswer = currentRoundObj.validateAnswer(answerInput.value, currentClue.categoryId);
  domUpdates.updateAnswerMessage(checkAnswer);
  domUpdates.disableClue(index);
}

function resetGame() {
  domUpdates.changeDisplayedScreen(document.querySelector('.start-pop-up'));
  domUpdates.changeDisplayedScreen(document.querySelector('.game-page'));
  document.querySelectorAll('.clue-box').forEach((clueBox) => {
    clueBox.addEventListener('click', displayClue);
    enableClue(clueBox);
  });
}

function startGame() {
  let player1 = new Player(playerNameInputs[0].value);
  let player2 = new Player(playerNameInputs[1].value);
  let player3 = new Player(playerNameInputs[2].value);
  
  game = new Game();
  game.chooseCategories(data.categories);

  let round1 = new Round(1);
  currentRoundObj = round1;
  round1.setCategoryIds(game.categoryIds);
  round1.getClues();
  round1.setDailyDouble();
  currentPlayer = player1;
  domUpdates.setCategoryNames(round1.categoryNames, domCategoryDivs);

  let round2 = new Round(2);
  round2.setCategoryIds(game.categoryIds);
  round2.getClues();
  round2.setDailyDouble();

  // set round 3 to sub class once that is created
  // let round3 = new FinalRound(3);
  // round3.setCategoryIds(game.categoryIds);
  // round3.getClues();
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






