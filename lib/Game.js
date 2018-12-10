class Game {
  constructor() {
    this.currentRound = 1;
    this.playerTurn = 1;
    this.categoryIds = [];
  }

  chooseCategories(categoriesObject) {
    this.categoryIds = Object.values(categoriesObject).sort((a, b) => 0.5 - Math.random());
  }

  changeRound() {
    this.currentRound++;
  }

  changePlayerTurn() {
    if (this.playerTurn === 3) {
      this.playerTurn = 1;
    } else {
      this.playerTurn++;
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = Game;
}