class Clue {
  constructor(answer) {
    this.answer = ''
  }

  validateAnswer(playerAnswer) {
    if (playerAnswer.value.toUpperCase() === currentClue.answer.toUpperCase()) {
      currentPlayer.increaseScore(currentClue.pointValue);
    } else {
      currentPlayer.decreaseScore(currentClue.pointValue);
    }
    //if correct change innerText to Correct & invoke player.increaseScore & change players
    //if incorrect, change innerText to Incorrect & change players
  }
}


if (typeof module !== 'undefined') {
  module.exports = Clue;
}