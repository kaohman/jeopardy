class DailyDouble {
  constructor() {
    this.wager = 0;
    this.highRange = 0;
  }

  findHighRange(round, player) {
    let boardValue = round.clues.reduce((values, clue, index) => {
      if (!round.indicesCalled.includes(index)) {
        values.push(clue.pointValue);
      }
      return values;
    }, []).sort((a, b) => b - a)[0];

    if (boardValue < player.score) {
      this.highRange = player.score;
    } else {
      this.highRange = boardValue;
    }
  }

  validateWager(wager, round, player, element, dailyDoubleWagerInput) {
    this.findHighRange(round, player);

    if (wager >= 5 && wager <= this.highRange) {
      this.wager = wager;
      domUpdates.updateWagerMessage(true, this.highRange, element);
    } else {
      domUpdates.updateWagerMessage(false, this.highRange, element);
    }
    domUpdates.resetPlayerInput(dailyDoubleWagerInput);
  }
}



if (typeof module !== 'undefined') {
  module.exports = DailyDouble;
}

