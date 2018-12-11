const chai = require('chai');
const expect = chai.expect;
const Player = require('../Clue.js');
const spies = require('chai-spies');
chai.use(spies);

global.domUpdates = require('../domUpdates.js');
chai.spy.on(global.domUpdates, ['validateAnswer'], () => true);

describe ('Clue', function() {
  var player;
  beforeEach(function() {
  clue = new Clue();
});

it('should return true', function() {
  
  expect(true).to.equal(true);
});

it('should check that the player guess matches the clue answer', function() {

  clue.validateAnswer();
  expect(currentClue.answer).to.equal(true);
});

