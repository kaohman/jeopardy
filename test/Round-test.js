const chai = require('chai');
const expect = chai.expect;
const Player = require('../Round.js');
const spies = require('chai-spies');
chai.use(spies);

global.domUpdates = require('../domUpdates.js');
chai.spy.on(global.domUpdates, ['displayClue', 'validateAnswer', 'getCategoryNames'] () => true);

describe ('Round', function() {
  var round;
  beforeEach(function() {
  round = new Round();
});

it('should return true', function() {
  expect(true).to.equal(true);
});