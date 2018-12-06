class Player {
  constructor(name, score) {
    this.name = name;
    this.score = 0;
  }
  
  increaseScore(){} 
 
  
  decreaseScore() {}

}

if (typeof module !== 'undefined') {
  module.exports = Player;
}