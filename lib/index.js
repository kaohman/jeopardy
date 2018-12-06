const playerNameInputs = document.querySelectorAll('.player-name-inputs');
const domPlayerDivs = document.querySelectorAll('.player-names');


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
// $('.clue-box').forEach((box) => {
//   box.on('click', displayClue);
// });




function startGame() {
  let player1 = new Player(playerNameInputs[0].value);
  let player2 = new Player(playerNameInputs[1].value);
  let player3 = new Player(playerNameInputs[2].value);
  // let game = new Game;
  domUpdates.changeDisplayedScreen(document.querySelector('.start-pop-up'));
  domUpdates.changeDisplayedScreen(document.querySelector('.game-page'));
  domUpdates.displayPlayerNames(playerNameInputs, domPlayerDivs);
  //make instance of the round

  //call some methods
  //on the DOM = toggle
  //set player name values to name cards
  

}






