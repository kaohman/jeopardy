const playerNameInputs = document.querySelectorAll('.player-name-inputs');
const domPlayerDivs = document.querySelectorAll('.player-names');
const domCategoryDivs = document.querySelectorAll('.categories');
let currentClue;
let currentRoundObj = {};

// $('.restart-button').on('click', resetGame);
document.querySelector('.start-button').addEventListener('click', startGame);
// $('.player-name-inputs').forEach((playerName) => {
//   playerName.on('input', checkInputs);
// });
// $('.submit-dd-wager-button').on('click', submitDailyDoubleWager);
// $('.wager-dd-text-input').on('input', checkInputs);
// $('.submit-wagers-button').on('click', submitFinalWagers);
// $('.wager-text-input').forEach((wager) => {
//   wager.on('input', checkInputs);
// });
// $('.submit-answer-button').on('click', submitAnswer);
// $('.answer-text-input').on('input', checkInputs);
document.querySelectorAll('.clue-box').forEach((box) => {
  box.addEventListener('click', displayClue);
});

function displayClue() {
  currentClue = currentRoundObj.clues[parseInt(event.target.dataset.id)];
  // check if daily double
  domUpdates.editClueHTML(currentClue, document.querySelector('.clue-text'));
  domUpdates.changeDisplayedScreen(document.querySelector('.clue-pop-up'));
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






