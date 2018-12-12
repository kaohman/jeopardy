const chai = require('chai');
const expect = chai.expect;
const data = require('../lib/data-set.js');
const Clue = require('../lib/Clue.js');
const Round = require('../lib/Round.js')
const Game = require('../lib/Game.js');
const spies = require('chai-spies');
chai.use(spies);

global.domUpdates = require('../lib/domUpdates.js');
chai.spy.on(global.domUpdates, ['changeDisplayedScreen'], () => true);

describe ('Clue', function() {
  let game;
  let round;
  let clue;
  beforeEach(function() {
  round = new Round(1);
  clue = new Clue();
  });

  it('should assign currentClue and answer', function() {
      expect(clue.currentClue).to.exist;
      expect(clue.answer).to.exist;
    });

  it('should validate a players answer', function() {
    game = new Game();
    game.chooseCategories(data.categories);
    round.setCategoryIds(game.categoryIds, data);
    round.getClues(data);
    clue.validateAnswer('', 1, round);
    expect(clue.answer).to.equal('');
  });

  it('should display the current clue', function() {
    game = new Game();
    game.chooseCategories(data.categories);
    round.setCategoryIds(game.categoryIds, data);
    round.getClues(data);
    clue.displayCurrentClue(round, 1);
    expect(domUpdates.changeDisplayedScreen).to.have.been.called(2)
  });
});
