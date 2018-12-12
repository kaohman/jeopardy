const chai = require('chai');
const expect = chai.expect;
const Player = require('../lib/Player.js');
const spies = require('chai-spies');
chai.use(spies);

global.domUpdates = require('../lib/domUpdates.js');
chai.spy.on(global.domUpdates, ['changeScoreboard'], () => true);

describe ('Player', function() {
  var player;
  beforeEach(function() {
    player = new Player();
  });

  it('should have a name', function() {
    let player = new Player('Joe')
    expect(player.name).to.equal('Joe');
  });

  it('should start with a score of 0', function() {
    expect(player.score).to.equal(0);
  });

  it('should increase the players score if correct', function() {
    player.changeScore(100, true);
    expect(player.score).to.equal(100);
  });

  it('should decrease the players score if incorrect', function() {
    player.changeScore(100, false);
    expect(player.score).to.equal(-100);
  });
});