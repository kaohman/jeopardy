class Round {
  constructor(roundNum) {
    this.roundNum = roundNum;
    this.dailyDoubleClue = [];
    this.categoryIds = [];
    this.categoryNames = [];
    this.clues = [];
  }

  displayClue(categoryId, pointValue) {
    return this.clues.find(clue => {
      return (clue.pointValue === pointValue) && (clue.categoryId === categoryId);
    }).question;
  }

  validateAnswer(answer, index) {
    return (answer.toUpperCase() === this.clues[index].answer.toUpperCase());
  }

  getCategoryNames() {
    this.categoryNames = this.categoryIds.map(categoryId => {
      let name = Object.keys(data.categories).find(categoryName => {
        return data.categories[categoryName] === categoryId;
      });
      let displayName = name.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) { 
        return str.toUpperCase(); 
      });
      return displayName;
    });
  }

}


if (typeof module !== 'undefined') {
  module.exports = Round;
}
