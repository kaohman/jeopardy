const chai = require('chai');
const expect = chai.expect;
const Player = require('../Game.js');
const spies = require('chai-spies');
chai.use(spies);

global.domUpdates = require('../domUpdates.js');
chai.spy.on(global.domUpdates, [], () => true);

describe ('Game', function() {
  var game;
  beforeEach(function() {
  game = new Game();
});

it('should return true', function() {
  expect(true).to.equal(true);
});

