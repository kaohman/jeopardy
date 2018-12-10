const playerNameInputs = document.querySelectorAll('.player-name-inputs');
const domPlayerDivs = document.querySelectorAll('.player-names');
const submitAnswer = document.querySelector('.submit-answer-button');
const playerAnswer = document.querySelector('.answer-text-input');
const playerScore = document.querySelectorAll('.player-1-score')

let currentClue;
let currentRoundObj = {};
let clue;
let currentPlayer;
let round;
// document.querySelector('.restart-button').addEventListener('click', resetGame);
// const playerAnswer = document.querySelector('.answer-text-input').addEventListener('input', checkInputs);
const domCategoryDivs = document.querySelectorAll('.category-text');
document.querySelector('.restart-button').addEventListener('click', resetGame);
document.querySelector('.start-button').addEventListener('click', startGame);
// document.querySelector('.player-name-inputs').forEach((playerName) => {
//   playerName.on('input', checkInputs);
// });
// document.querySelector('.submit-dd-wager-button').addEventListener('click', submitDailyDoubleWager);
// document.querySelector('.wager-dd-text-input').addEventListener('input', checkInputs);
// document.querySelector('.submit-wagers-button').addEventListener('click', submitFinalWagers);
// document.querySelector('.wager-text-input').forEach((wager) => {
//   wager.addEventListener('input', checkInputs);
// });
// document.querySelector('.submit-answer-button').addEventListener('click', submitAnswer);
// document.querySelector('.answer-text-input').addEventListener('input', checkInputs);

document.querySelectorAll('.clue-box').forEach((box) => {
  box.addEventListener('click', displayClue);
});

function displayClue() {
  currentClue = currentRoundObj.clues[parseInt(event.target.dataset.id)];
  // check if daily double
  domUpdates.editClueHTML(currentClue, document.querySelector('.clue-text'));
  domUpdates.changeDisplayedScreen(document.querySelector('.clue-pop-up'));
}

function resetGame() {
  console.log('click');
  domUpdates.changeDisplayedScreen(document.querySelector('.start-pop-up'));
  domUpdates.changeDisplayedScreen(document.querySelector('.game-page'));
}

function startGame() {
  let player1 = new Player(playerNameInputs[0].value);
  let player2 = new Player(playerNameInputs[1].value);
  let player3 = new Player(playerNameInputs[2].value);

  let game = new Game();
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






