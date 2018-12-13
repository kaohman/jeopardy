const chai = require('chai');
const expect = chai.expect;
global.data = require('../lib/data-set.js');
global.Clue = require('../lib/Clue.js');
global.Game = require('../lib/Game.js');
global.DailyDouble = require('../lib/DailyDouble.js');
global.Player = require('../lib/Player.js');
global.Round = require('../lib/Round.js');
const FinalRound = require('../lib/FinalRound.js');
const spies = require('chai-spies');
chai.use(spies);

global.domUpdates = require('../lib/domUpdates.js');
chai.spy.on(global.domUpdates, ['displayMessage', 'hideMessage', 'updateWagerMessage', 'changeDisplayedScreen', 'editClueHTML'], () => true);

describe ('FinalRound', function() {
  var round;
  beforeEach(function() {
  round = new FinalRound(3);
  game = new Game();
  game.chooseCategories(data.categories);
  round.setCategoryIds(game.categoryIds, data);
  });

  it('should have a round number', function() {
    expect(round.roundNum).to.equal(3);
  });

  it('should have an initial valid wager of 0', function() {
    expect(round.validWagers).to.equal(0);
  });

  it('should be able to store a single clue', function() {
    round.getClues(data);
    round.getSingleClue();
    expect(typeof round.clues).to.equal('object');
  });

  it('should validate given wagers', function() {
    let dailyDouble = new DailyDouble();
    dailyDouble.wager = 50;
    let player = new Player();
    player.score = 100;
    let element = '';

    let result = round.validateFinalWager(dailyDouble, dailyDouble.wager, player, element)
    expect(result).to.equal(true);
    expect(domUpdates.hideMessage).to.have.been.called(1);
  });

  it('should not validate invalid wagers', function() {
    let dailyDouble = new DailyDouble();
    dailyDouble.wager = 2000;
    let player = new Player();
    player.score = 100;
    let element = '';

    let result = round.validateFinalWager(dailyDouble, dailyDouble.wager, player, element)
    expect(result).to.equal(false);
    expect(domUpdates.displayMessage).to.have.been.called(1);
    expect(domUpdates.updateWagerMessage).to.have.been.called(1);
  });

  it('should display the final clue', function() {
    round.getClues(data);
    round.getSingleClue();
    round.displayFinalClue('', '', '');



  });

});


