class FinalRound extends Round {
  constructor(roundNum) {
    super(roundNum);
  }

  getSingleClue() {
    this.clues = this.clues[3];
    this.clues.dailyDouble = true;
  }

  validateFinalWagers() {
    
  }

}

if (typeof module !== 'undefined') {
  module.exports = FinalRound;
}