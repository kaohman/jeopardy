class Game {
  constructor() {
    this.currentRound = 1;
    this.playerTurn = 1;
    this.categories = [];
  }

  chooseCategories(categoriesObject) {
    this.categories = Object.values(categoriesObject).sort((a, b) => 0.5 - Math.random());
  }

  changeRound() {
    this.currentRound++;
  }

  changePlayerTurn() {
    this.playerTurn++;
  }
}