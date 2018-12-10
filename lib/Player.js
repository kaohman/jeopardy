class Player {
  constructor(name, score) {
    this.name = name;
    this.score = 0;
  }
  
  increaseScore(score){
    this.score += score;
    domUpdates.changeScoreboard(this.score);
  } 
 
  decreaseScore(score) {
    this.score -= score;
    domUpdates.changeScoreboard(this.score);
  }

}

if (typeof module !== 'undefined') {
  module.exports = Player;
}