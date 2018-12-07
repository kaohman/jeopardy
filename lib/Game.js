class Game {
  constructor() {
    // this.currentRound = currentRound;
    this.playerTurn = 1;
    this.currentClue;
    this.categoryIds = [];
  }

  chooseCategories(categoriesObject) {
    this.categoryIds = Object.values(categoriesObject).sort((a, b) => 0.5 - Math.random());
  }

  changeRound() {
    this.currentRound++;
  }

  changePlayerTurn() {
    this.playerTurn++;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Game;
}