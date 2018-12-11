class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }
  
  changeScore(score, checkAnswer){
    console.log(this.score)
    if (checkAnswer === true) {
      this.score += score;
    } else {
      this.score -= score;
    }
    domUpdates.changeScoreboard(this.score);
  } 
}

if (typeof module !== 'undefined') {
  module.exports = Player;
}