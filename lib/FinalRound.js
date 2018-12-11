class FinalRound extends Round {
  constructor(roundNum) {
    super(roundNum);
    this.validWagers = 0;
  }

  getSingleClue() {
    this.clues = this.clues[3];
    this.clues.dailyDouble = true;
  }

  displayFinalClue() {
    clue = new Clue();
    clue.currentClue = this.clues;
    domUpdates.editClueHTML(clue.currentClue, document.querySelector('.clue-text'));
    domUpdates.changeDisplayedScreen(document.querySelector('.final-round-pop-up'));
    domUpdates.changeDisplayedScreen(document.querySelector('.clue-pop-up'));
  }

  validateFinalWager(dailyDouble, wager, player, element) {
    if (player.score < 5) {
      var highRange = 100;
    } else {
      var highRange = player.score;
    }

    if (wager >= 5 && wager <= highRange) {
      dailyDouble.wager = wager;
      domUpdates.hideMessage(element);
      this.validWagers++
    } else {
      domUpdates.displayMessage(element);
      domUpdates.updateWagerMessage(false, highRange, element);
    }
  }

}

if (typeof module !== 'undefined') {
  module.exports = FinalRound;
}