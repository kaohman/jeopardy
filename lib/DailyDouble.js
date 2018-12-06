class DailyDouble {
  constructor(id, wager) {
    this.id = id;
    this.wager = wager;
  }

  validateWager(wager, boardValue, player) {
    if (boardValue < player.score) {
      let highRange = player.score;
    } else {
      let highRange = boardValue;
    }

    if (wager >= 5 && wager <= highRange) {
      this.wager = wager;
      return true;
    }
  }
}



if (typeof module !== 'undefined') {
  module.exports = DailyDouble;
}

