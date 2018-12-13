const chai = require('chai');
const expect = chai.expect;
const data = require('../lib/data-set.js');
const DailyDouble = require('../lib/DailyDouble.js');
const Clue = require('../lib/Clue.js');
const Round = require('../lib/Round.js')
const Game = require('../lib/Game.js');
const spies = require('chai-spies');
chai.use(spies);

global.domUpdates = require('../lib/domUpdates.js');
chai.spy.on(global.domUpdates, [ 'updateWagerMessage', 'resetPlayerInput' ], () => true);

describe ('DailyDouble', function() {
  let game;
  let round;
  let clue;
  let dailyDouble;
  beforeEach(function() {
  round = new Round(1);
  clue = new Clue();                                                                                                       
  dailyDouble = new DailyDouble();                                                 
  });

  it('should have a wager and highRange', function() {
    expect(dailyDouble.wager).to.exist;
    expect(dailyDouble.highRange).to.exist;
  });

  it('should find the range the player can wager', function() {
    game = new Game();
    game.chooseCategories(data.categories);
    round.setCategoryIds(game.categoryIds, data);
    round.getClues(data);
    dailyDouble.findHighRange(round, 1);
    expect(dailyDouble.highRange).to.equal(400);
  });

  it('should validate a players wager', function() {
    game = new Game();
    game.chooseCategories(data.categories);
    round.setCategoryIds(game.categoryIds, data);
    round.getClues(data);
    dailyDouble.validateWager(50, round, 1);
    expect(dailyDouble.wager).to.equal(50);
  });

});