class Clue {
  constructor(answer) {
    this.answer = '';
    this.currentClue = {};
  }

  validateAnswer(answer, index, round) {
    round.clueCount++
    console.log(answer.toUpperCase());
    console.log(round.clues[index].answer.toUpperCase());
    if (round.roundNum === 3) {
      return (answer.toUpperCase() === round.clues.answer.toUpperCase());
    }
    return (answer.toUpperCase() === round.clues[index].answer.toUpperCase());
  }
}


if (typeof module !== 'undefined') {
  module.exports = Clue;
}