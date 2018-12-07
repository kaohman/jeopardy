class Player {
  constructor(name, score) {
    this.name = name;
    this.score = 0;
  }
  
  increaseScore(score){
    this.score += score;
    domUpdates.changeScoreboard();
  } 
 
  decreaseScore(score) {
    this.score -= score;
    domUpdates.changeScoreboard();
  }

}

if (typeof module !== 'undefined') {
  module.exports = Player;
}