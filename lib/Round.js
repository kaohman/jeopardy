class Round {
  constructor(roundNum) {
    this.roundNum = roundNum;
    this.categoryIds = [];
    this.categoryNames = [];
    this.clues = [];
    this.pointValues = [100, 200, 300, 400];
  }

  setCategoryIds(gameCategories) {
    if (this.roundNum === 1) {
      this.categoryIds = gameCategories.slice(0, 4);
    } else if (this.roundNum === 2) {
      this.categoryIds = gameCategories.slice(5, 9);
    } else {
      this.categoryIds = gameCategories.slice(9);
    }
    this.getCategoryNames();
  }

  getCategoryNames() {
    this.categoryNames = this.categoryIds.map(categoryId => {
      let name = Object.keys(data.categories).find(categoryName => {
        return data.categories[categoryName] === categoryId;
      });
      let displayName;
      if (name === 'cableTV') {
        displayName = name.replace(/([A-Z])/, ' $1');
      } else {
        displayName = name.replace(/([A-Z])/g, ' $1');
      }

      displayName = displayName.replace(/^./, function (str) { 
        return str.toUpperCase(); 
      });
      return displayName;
    });
  }

  getClues() {
    this.clues = this.categoryIds.reduce((acc, categoryId) => {
      let sortedClues = data.clues.filter(clue => {
        return clue.categoryId === categoryId;
      }).sort((a, b) => 0.5 - Math.random());
      this.pointValues.forEach(value => {
        let chosenClues = sortedClues.find(clue => {
          return clue.pointValue === value;
        });
        acc = acc.concat(chosenClues);
      });
      return acc;
    },[]);

    if (this.roundNum === 3) {
      this.clues = this.clues[3];
      this.clues.dailyDouble = true;
    }
  }

  setDailyDouble() {
    let randomIndex = Math.floor(Math.random() * this.clues.length);
    this.clues[randomIndex].dailyDouble = true;

    if (this.roundNum === 2) {
      let randomIndex2;
      do {
        randomIndex2 = Math.floor(Math.random() * this.clues.length);
      } while (randomIndex2 === randomIndex);
      this.clues[randomIndex2].dailyDouble = true;
    }
    console.log(`round${this.roundNum}: ${randomIndex}`);
  }

  displayClue(categoryId, pointValue) {
    return this.clues.find(clue => {
      return (clue.pointValue === pointValue) && (clue.categoryId === categoryId);
    }).question;
  }

  validateAnswer(answer, index) {
    return (answer.toUpperCase() === this.clues[index].answer.toUpperCase());
  }
}


if (typeof module !== 'undefined') {
  module.exports = Round;
}
