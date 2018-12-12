class FinalRound extends Round {
  constructor(roundNum) {
    super(roundNum);
    this.validWagers = 0;
  }

  getSingleClue() {
    this.clues = this.clues[3];
    this.clues.dailyDouble = true;
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
      return true
    } else {
      domUpdates.displayMessage(element);
      domUpdates.updateWagerMessage(false, highRange, element);
      return false
    }
  }

  displayFinalClue() {
    clue = new Clue();
    clue.currentClue = this.clues;
    domUpdates.editClueHTML(clue.currentClue, document.querySelector('.clue-text'));

    domUpdates.changeDisplayedScreen(document.querySelector('.final-round-pop-up'));
    domUpdates.changeDisplayedScreen(document.querySelector('.clue-pop-up'));
  }

  displayWinner(players) {
    let winners = players.sort((a, b) => b.score - a.score).filter(player => {
      return player.score === players[0].score
    });

    let winnerNames = '';
    if (winners.length === 1) {
      winnerNames = `${winners[0].name} WINS! WITH A SCORE OF ${winners[0].score}!!!`;
    } else if (winners.length === 2) {
      winnerNames = `${winners[0].name} & ${winners[1].name} WIN! WITH A SCORE OF ${winners[0].score}!!!`;
    } else {
      winnerNames = `YOU GET A CAR! YOU GET A CAR! EVERYONE GETS A CAR! WITH A SCORE OF ${winners[0].score}!!!`;
    }
    
    domUpdates.displayWinnerName(winnerNames);
    domUpdates.changeDisplayedScreen(document.querySelector('.winner-pop-up'));
    domUpdates.changeDisplayedScreen(document.querySelector('.clue-pop-up'));
  }

}

if (typeof module !== 'undefined') {
  module.exports = FinalRound;
}