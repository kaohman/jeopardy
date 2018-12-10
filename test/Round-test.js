const chai = require('chai');
const expect = chai.expect;
const Round = require('../lib/Round.js');
const Game = require('../lib/Game.js');
const spies = require('chai-spies');
chai.use(spies);

global.domUpdates = require('../lib/domUpdates.js');
chai.spy.on(global.domUpdates, ['displayClue', 'validateAnswer', 'getCategoryNames'], () => true);

describe ('Round', function() {
  var round;
  beforeEach(function() {
  round = new Round(1);
  });

  it('should have a round number', function() {
    expect(round.roundNum).to.equal(1);
  });

  it('should store category IDs for the round, which should start as an empty array', function() {
    expect(round.categoryIds).to.deep.equal([]);
  });

  it('should store category names for the round, which should start as an empty array', function() {
    expect(round.categoryNames).to.deep.equal([]);
  });

  it('should store clues for the round, which should start as an empty array', function() {
    expect(round.clues).to.deep.equal([]);
  });

  it('should store point values for the round', function() {
    expect(round.pointValues).to.deep.equal([100, 200, 300, 400]);
  });

  it('should set 4 category IDs for the round from the given Game category IDs', function() {
    let game = new Game();
    let categoryIdsObj = { a: 1, b: 2, c:3, d: 4, e: 5};
    game.chooseCategories(categoryIdsObj);
    round.setCategoryIds(game.categoryIds);
    expect(round.categoryIds.length).to.equal(4);
  });

  it('should set category names for display on DOM', function() {
    let game = new Game();
    let categoryIdsObj = { a: 1, b: 2, c:3, d: 4, e: 5};
    game.chooseCategories(categoryIdsObj);
    round.setCategoryIds(game.categoryIds);
    expect(round.categoryNames.length).to.equal(4);
  });

  it('should get 16 clues based on category IDs', function() {
    let game = new Game();
    let categoryIdsObj = { a: 1, b: 2, c:3, d: 4, e: 5};
    game.chooseCategories(categoryIdsObj);
    round.setCategoryIds(game.categoryIds);
    round.getClues();
    expect(round.clues.length).to.equal(16);
  });

  it('should set some clues as Daily Doubles', function() {
    let round = new Round(2);
    let game = new Game();
    let categoryIdsObj = { a: 1, b: 2, c:3, d: 4, e: 5};
    game.chooseCategories(categoryIdsObj);
    round.setCategoryIds(game.categoryIds);
    round.getClues();
    round.setDailyDouble();
    let result = round.clues.filter(clue => round.clues[clue].dailyDouble).length;
    expect(result).to.equal(2);
  });

});