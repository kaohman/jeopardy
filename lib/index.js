const playerNameInputs = Array.from(document.querySelectorAll('.player-name-inputs'));
const domPlayerDivs = document.querySelectorAll('.player-names');
const domCategoryDivs = document.querySelectorAll('.category-text');
const ddWagerInput = document.querySelector('.wager-dd-text-input');
const wagerErrorText = document.querySelector('.dd-wager-error-message');
const answerResponseText = document.querySelector('.answer-message-text');
const overlayDiv = document.querySelector('.overlay');
const clueBoxes = document.querySelectorAll('.clue-box');
const submitAnswerButton = document.querySelector('.submit-answer-button');
const playerAnswerInput = document.querySelector('.answer-text-input');
const playerScore = document.querySelectorAll('.player-1-score');

let game = new Game();
let currentRoundObj;
let currentPlayer;
let clue;
let dailyDouble;
let players;
let finalDailyDoubleObjs;

document.querySelector('.restart-button').addEventListener('click', resetGame);
document.querySelector('.start-button').addEventListener('click', startGame);
document.querySelector('.submit-dd-wager-button').addEventListener('click', submitDailyDoubleWager);
document.querySelector('.submit-wagers-button').addEventListener('click', submitFinalWagers);
submitAnswerButton.addEventListener('click', submitAnswer);

function displayClue() {
  clue = new Clue(parseInt(event.target.dataset.id));
  clue.currentClue = currentRoundObj.clues[clue.currentIndex];
  clue.displayCurrentClue(currentRoundObj, clue.currentIndex);
}

function submitDailyDoubleWager() {
  dailyDouble = new DailyDouble();
  dailyDouble.validateWager(parseInt(ddWagerInput.value), currentRoundObj, game.playerTurn, wagerErrorText);
}

function submitAnswer() {
  let checkAnswer = clue.validateAnswer(playerAnswerInput.value, clue.currentIndex, currentRoundObj);
  let score;
  
  if (currentRoundObj.roundNum !== 3) {
    if (clue.currentClue.dailyDouble) {
      score = dailyDouble.wager;
    } else {
      score = clue.currentClue.pointValue;
    }
    currentRoundObj.addCalledIndex(clue.currentIndex);
    domUpdates.updateAnswerMessage(checkAnswer);
    domUpdates.disableClue(clue.currentIndex);
    game.changePlayerTurn();

    if (currentRoundObj.clueCount === 16) {
      updateGameBoard();
    }
  } else {
    score = finalDailyDoubleObjs[game.playerTurn-1].wager;
    if (game.playerTurn === 3) {
      currentRoundObj.displayWinner(players);
    } else {
      game.changePlayerTurn();
    }
  }

  currentPlayer.changeScore(score, checkAnswer);
  domUpdates.resetPlayerInput(playerAnswerInput);
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
  let round3 = new FinalRound(3);
  round3.setCategoryIds(game.categoryIds);
  round3.getClues();
  round3.getSingleClue();
  currentRoundObj = round3;

  domUpdates.addFinalCategory(currentRoundObj.categoryNames[0]);
  domUpdates.changeDisplayedScreen(document.querySelector('.final-round-pop-up'));
  domUpdates.addFinalWagerNames(document.querySelectorAll('.wager-player-names'), players);
  domUpdates.changeDisplayedScreen(overlayDiv);
  domUpdates.updateRoundText(document.querySelector('.round-text'), 'FINAL ROUND');
}

function submitFinalWagers() {
  let wagerInputs = Array.from(document.querySelectorAll('.wager-text-input'));
  let errorTextElements = Array.from(document.querySelectorAll('.final-errors-text'));

  let allValid = 0;
  finalDailyDoubleObjs = wagerInputs.map((wager, index) => {
    let newObj = new DailyDouble();
    let isValid = currentRoundObj.validateFinalWager(newObj, parseInt(wager.value), players[index], errorTextElements[index]);
    if (isValid) {
      allValid++
    }
    return newObj;
  });

  if (allValid === 3) {
    currentRoundObj.displayFinalClue();
  }
}

function setupRound2() {
  let round2 = new Round(2);
  round2.setCategoryIds(game.categoryIds);
  round2.getClues();
  round2.updatePointValues();
  round2.setDailyDouble();
  currentRoundObj = round2;

  domUpdates.updateRoundText(document.querySelector('.round-text'), 'ROUND 2');
  domUpdates.setCategoryNames(round2.categoryNames, domCategoryDivs);
  clueBoxes.forEach((clueBox) => {
    clueBox.addEventListener('click', displayClue);
    domUpdates.enableClues(clueBox);
    domUpdates.changeDomPointValues(clueBox, currentRoundObj);
  });
}

function resetGame() {
  domUpdates.changeDisplayedScreen(document.querySelector('.start-pop-up'));
  domUpdates.changeDisplayedScreen(document.querySelector('.game-page'));
}

function startGame() {
  let player1 = new Player(playerNameInputs[0].value);
  let player2 = new Player(playerNameInputs[1].value);
  let player3 = new Player(playerNameInputs[2].value);
  players = [player1, player2, player3];

  //might want to store/access players in an array everywhere
  players = playerNameInputs.map(player => {
    let newPlayer = new Player(player.value.toUpperCase());
    return newPlayer;
  });
  
  game = new Game();
  game.chooseCategories(data.categories);

  let round1 = new Round(1);
  round1.setCategoryIds(game.categoryIds);
  round1.getClues();
  round1.setDailyDouble();
  currentPlayer = player1;
  domUpdates.setCategoryNames(round1.categoryNames, domCategoryDivs);

  currentRoundObj = round1;

  clueBoxes.forEach((clueBox) => {
    clueBox.addEventListener('click', displayClue);
    domUpdates.enableClues(clueBox);
    domUpdates.changeDomPointValues(clueBox, currentRoundObj);
  });

  domUpdates.updateRoundText(document.querySelector('.round-text'), 'ROUND 1');
  domUpdates.changeDisplayedScreen(document.querySelector('.start-pop-up'));
  domUpdates.changeDisplayedScreen(document.querySelector('.game-page'));
  domUpdates.displayPlayerNames(playerNameInputs, domPlayerDivs);

  // setupFinalRound();
}






