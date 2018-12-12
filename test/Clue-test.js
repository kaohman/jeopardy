const chai = require('chai');
const expect = chai.expect;
const Clue = require('../lib/Clue.js');
const spies = require('chai-spies');
chai.use(spies);

global.Round = require('../lib/Round.js')
global.domUpdates = require('../lib/domUpdates.js');
chai.spy.on(global.domUpdates, ['changeDisplayedScreen'], () => true);

describe ('Clue', function() {
  let round;
  let clue;
  beforeEach(function() {
  round = new Round();
  clue = new Clue();
  });

  it('should validate a players answer', function() {
    clue.validateAnswer('Monopoly');
    expect(clue.answer).to.equal('Monopoly');
  });

  it('should display the current clue', function() {
    clue.displayCurrentClue();
    expect(domUpdates.changeDisplayedScreen).to.have.been.called(1)
  });

  // it('should display the clue for the daily double', function() {
  //   clue.displayCurrentClue();
  //   expect(domUpdates.changeDisplayedScreen).to.have.been.called(1)

  // });
});
