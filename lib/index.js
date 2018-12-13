const playerNameInputs = Array.from(document.querySelectorAll('.player-name-inputs'));
const domPlayerElems = document.querySelectorAll('.player-names');
const domCategories = document.querySelectorAll('.category-text');
const dailyDoubleWagerInput = document.querySelector('.wager-dd-text-input');
const wagerErrorMessage = document.querySelector('.dd-wager-error-message');
const answerResponseMessage = document.querySelector('.answer-message-text');
const overlay = document.querySelector('.overlay');
const clueBoxes = document.querySelectorAll('.clue-box');
const submitAnswerButton = document.querySelector('.submit-answer-button');
const playerAnswerInput = document.querySelector('.answer-text-input');
const playerScoreboards = document.querySelectorAll('.player-score');
const playerAvatars = document.querySelectorAll('.avatar');
const cluePopUp = document.querySelector('.clue-pop-up');
const winnerPopUp = document.querySelector('.winner-pop-up');
const finalRoundPopUp = document.querySelector('.final-round-pop-up');

let game = new Game();
let currentRound;
let players;
let currentPlayer;
let clue;
let dailyDouble;
let finalDailyDoubles;


document.querySelector('.restart-button').addEventListener('click', resetGame);
document.querySelector('.start-button').addEventListener('click', startGame);
document.querySelector('.submit-dd-wager-button').addEventListener('click', submitDailyDoubleWager);
document.querySelector('.submit-wagers-button').addEventListener('click', submitFinalWagers);
submitAnswerButton.addEventListener('click', submitAnswer);

function creatNewClue() {
  clue = new Clue(parseInt(event.target.dataset.id));
  clue.displayCurrentClue(currentRound, clue.currentIndex, cluePopUp);
}

function submitDailyDoubleWager() {
  dailyDouble = new DailyDouble();
  dailyDouble.validateWager(parseInt(dailyDoubleWagerInput.value), currentRound, game.playerTurn, wagerErrorMessage, dailyDoubleWagerInput);
}

function submitAnswer() {
  let checkAnswer = clue.validateAnswer(playerAnswerInput.value, clue.currentIndex, currentRound);
  let score;
  
  if (currentRound.roundNum !== 3) {
    if (clue.currentClue.dailyDouble) {
      score = dailyDouble.wager;
    } else {
      score = clue.currentClue.pointValue;
    }
    currentRound.addCalledIndex(clue.currentIndex);
    domUpdates.updateAnswerMessage(checkAnswer, answerResponseMessage);
    domUpdates.disableClue(clue.currentIndex);
    currentPlayer.changeScore(score, checkAnswer);
    domUpdates.changeScoreboard(playerScoreboards, currentPlayer);
    currentPlayer = game.changePlayerTurn(players);
    
    if (currentRound.clueCount === 16) {
      updateGameBoard();
    }

  } else {
    score = finalDailyDoubles[game.playerTurn].wager;
    currentPlayer.changeScore(score, checkAnswer);
    if (game.playerTurn === 2) {
      currentRound.displayWinner(players, cluePopUp, winnerPopUp);
    } else {
      currentPlayer = game.changePlayerTurn(players);
      domUpdates.displayFinalTurnName(answerResponseMessage, currentPlayer.name);
    }
  }
  domUpdates.highlightPlayerTurn(game.playerTurn);
  domUpdates.resetPlayerInput(playerAnswerInput);
}

function updateGameBoard() {
  game.changeRound();

  if (game.currentRound === 2) {
    setupRound2(); 
  } else {
    setupFinalRound();
  }
}

function setupFinalRound() {
  let round3 = new FinalRound(3);
  round3.setCategoryIds(game.categoryIds, data);
  round3.getClues(data);
  round3.getSingleClue();
  currentRound = round3;
  currentPlayer = game.resetPlayerTurn(players);
  domUpdates.displayFinalTurnName(answerResponseMessage, currentPlayer.name);

  domUpdates.addFinalCategory(currentRound.categoryNames[0]);
  domUpdates.changeDisplayedScreen(overlay);
  domUpdates.changeDisplayedScreen(document.querySelector('.final-round-pop-up'));
  domUpdates.addFinalWagerNames(document.querySelectorAll('.wager-player-names'), players);
  domUpdates.updateRoundText(document.querySelector('.round-text'), 'FINAL ROUND');
}

function submitFinalWagers() {
  let wagerInputs = Array.from(document.querySelectorAll('.wager-text-input'));
  let errorTextElements = Array.from(document.querySelectorAll('.final-errors-text'));

  let allValid = 0;
  finalDailyDoubles = wagerInputs.map((wager, index) => {
    let newObj = new DailyDouble();
    let isValid = currentRound.validateFinalWager(newObj, parseInt(wager.value), players[index], errorTextElements[index]);
    if (isValid) {
      allValid++
    }
    return newObj;
  });

  if (allValid === 3) {
    currentRound.displayFinalClue(cluePopUp, finalRoundPopUp, clueMessage);
    domUpdates.displayFinalTurnName(answerResponseMessage, currentPlayer.name);
  }
}

function setupRound2() {
  let round2 = new Round(2);
  round2.setCategoryIds(game.categoryIds, data);
  round2.getClues(data);
  round2.updatePointValues();
  round2.setDailyDouble();
  currentRound = round2;
  currentPlayer = game.resetPlayerTurn(players);

  domUpdates.updateRoundText(document.querySelector('.round-text'), 'ROUND 2');
  domUpdates.setCategoryNames(round2.categoryNames, domCategories);
  clueBoxes.forEach((clueBox) => {
    clueBox.addEventListener('click', creatNewClue);
    domUpdates.enableClues(clueBox);
    domUpdates.changeDomPointValues(clueBox, currentRound);
  });
}

function resetGame() {
  location.reload();
}

function startGame() {
  players = playerNameInputs.map(player => {
    let newPlayer = new Player(player.value.toUpperCase());
    return newPlayer;
  });
  players.forEach(player => {
    domUpdates.changeScoreboard(playerScoreboards, player);
  });
  
  game.chooseCategories(data.categories);
  domUpdates.highlightPlayerTurn(game.playerTurn);
  
  let round1 = new Round(1);
  round1.setCategoryIds(game.categoryIds, data);
  round1.getClues(data);
  round1.setDailyDouble();
  currentPlayer = game.resetPlayerTurn(players);

  domUpdates.setCategoryNames(round1.categoryNames, domCategories);

  currentRound = round1;

  clueBoxes.forEach((clueBox) => {
    clueBox.addEventListener('click', creatNewClue);
    domUpdates.enableClues(clueBox);
    domUpdates.changeDomPointValues(clueBox, currentRound);
  });

  domUpdates.updateRoundText(document.querySelector('.round-text'), 'ROUND 1');
  domUpdates.changeDisplayedScreen(document.querySelector('.start-pop-up'));
  domUpdates.changeDisplayedScreen(document.querySelector('.game-page'));
  domUpdates.displayPlayerNames(playerNameInputs, domPlayerElems);

  // setupRound2();
  // setupFinalRound();
}






