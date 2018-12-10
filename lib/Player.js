class Player {
  constructor(name, score) {
    this.name = name;
    this.score = 0;
  }
  
  increaseScore(score){
    this.score += score;
    domUpdates.changeScoreboard(score);
  } 
 
  decreaseScore(score) {
    this.score -= score;
    domUpdates.changeScoreboard(score);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Player;
}