class Clue {
  constructor(currentIndex) {
    this.answer = '';
    this.currentClue = {};
    this.currentIndex = currentIndex;
  }

  validateAnswer(answer, index, round) {
    round.clueCount++
    if (round.roundNum === 3) {
      return (answer.toUpperCase() === round.clues.answer.toUpperCase());
    }
    return (answer.toUpperCase() === round.clues[index].answer.toUpperCase());
  }

  displayCurrentClue(currentRoundObj, index) {
    this.currentClue = currentRoundObj.clues[index];
    domUpdates.editClueHTML(this.currentClue, document.querySelector('.clue-text'));
    if (this.currentClue.dailyDouble) {
      domUpdates.changeDisplayedScreen(overlayDiv);
      domUpdates.changeDisplayedScreen(document.querySelector('.daily-double-pop-up'));
    } else {
      domUpdates.changeDisplayedScreen(overlayDiv);
      domUpdates.changeDisplayedScreen(document.querySelector('.clue-pop-up'));
    }
  }
}


if (typeof module !== 'undefined') {
  module.exports = Clue;
}