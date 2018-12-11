class Game {
  constructor() {
    this.currentRound = 1;
    this.playerTurn = 0;
    this.categoryIds = [];
    this.players = []
  }

  chooseCategories(categoriesObject) {
    this.categoryIds = Object.values(categoriesObject).sort((a, b) => 0.5 - Math.random());
  }

  changeRound() {
    this.currentRound++;
  }

  changePlayerTurn(players) {
    this.playerTurn++;
    if (this.playerTurn === players.length) {
      this.playerTurn = 0;
    } 
    return players[this.playerTurn];
  }
}

if (typeof module !== 'undefined') {
  module.exports = Game;
}