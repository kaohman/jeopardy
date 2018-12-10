class Clue {
  constructor(answer) {
    this.answer = '';
    this.currentClue = {};
  }

  // validateAnswer(playerAnswer, round, player) {
  //   if (playerAnswer.value.toUpperCase() === currentClue.answer.toUpperCase()) {
  //     currentPlayer.increaseScore(currentClue.pointValue);
  //   } else {
  //     currentPlayer.decreaseScore(currentClue.pointValue);
  //   }
  //   //if correct change innerText to Correct & invoke player.increaseScore & change players
  //   //if incorrect, change innerText to Incorrect & change players
  // }

  validateAnswer(answer, index, round) {
    round.clueCount++
    console.log(answer.toUpperCase());
    console.log(round.clues[index].answer.toUpperCase());
    return (answer.toUpperCase() === round.clues[index].answer.toUpperCase());
  }
}


if (typeof module !== 'undefined') {
  module.exports = Clue;
}