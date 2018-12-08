class DailyDouble {
  constructor() {
    this.wager;
    this.highRange;
  }

  validateWager(wager, boardValue, player) {
    if (boardValue < player.score) {
      this.highRange = player.score;
    } else {
      this.highRange = boardValue;
    }

    if (wager >= 5 && wager <= this.highRange) {
      this.wager = wager;
      return true;
    }
  }
}



if (typeof module !== 'undefined') {
  module.exports = DailyDouble;
}

