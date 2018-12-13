class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }
  
  changeScore(score, checkAnswer) {
    if (checkAnswer === true) {
      this.score += score;
    } else {
      this.score -= score;
    }
  } 
}

if (typeof module !== 'undefined') {
  module.exports = Player;
}