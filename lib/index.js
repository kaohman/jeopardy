const playerNameInputs = document.querySelectorAll('.player-name-inputs');
const domPlayerDivs = document.querySelectorAll('.player-names');


// document.querySelector('.restart-button').addEventListener('click', resetGame);
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
// document.querySelector('.clue-box').forEach((box) => {
//   box.addEventListener('click', displayClue);
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
  //set player name values to name cards
  

}






