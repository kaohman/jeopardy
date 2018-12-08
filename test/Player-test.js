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
  player = new Player(player1);
});

it('should return true', function() {
  expect(true).to.equal(true);
});

it('should increase the players score', function() {

  player.increaseScore(100);
  expect(player.increaseScore).to.equal(100);
});

it('should decrease the players score', function() {

  player.decreaseScore(100);
  expect(player.decreaseScore).to.equal(100);
});