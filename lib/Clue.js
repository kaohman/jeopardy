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

  displayCurrentClue(currentRound, index, cluePopUp) {
    this.currentClue = currentRound.clues[index];
    domUpdates.editClueHTML(this.currentClue, document.querySelector('.clue-text'));
    if (this.currentClue.dailyDouble) {
      domUpdates.changeDisplayedScreen(overlay);
      domUpdates.changeDisplayedScreen(document.querySelector('.daily-double-pop-up'));
    } else {
      domUpdates.changeDisplayedScreen(overlay);
      domUpdates.changeDisplayedScreen(cluePopUp);
    }
  }
}


if (typeof module !== 'undefined') {
  module.exports = Clue;
}