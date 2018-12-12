const chai = require('chai');
const expect = chai.expect;
const data = require('../lib/data-set.js');
const Round = require('../lib/Round.js');
const Game = require('../lib/Game.js');

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

  it('should store called indices in the property indicesCalled', function() {
    round.addCalledIndex(1);
    round.addCalledIndex(2);
    round.addCalledIndex(3);
    expect(round.indicesCalled).to.deep.equal([1, 2, 3]);
  });
});

describe ('Round with Game', function() {
  var round;
  var game;
  beforeEach(function() {
  round = new Round(1);
  game = new Game();
  game.chooseCategories(data.categories);
  round.setCategoryIds(game.categoryIds, data);
  });

  it('should set 4 category IDs for the round from the given Game category IDs', function() {
    expect(round.categoryIds.length).to.equal(4);
  });

  it('should set category names for display on DOM', function() {
    expect(round.categoryNames.length).to.equal(4);
  });

  it('should get 16 clues based on category IDs', function() {
    round.getClues(data);
    expect(round.clues.length).to.equal(16);
  });

  it('should update point values for Round 2', function() {
    round.roundNum = 2;
    round.getClues(data);
    round.updatePointValues();
    expect(round.clues[0].pointValue).to.equal(200);
    expect(round.clues[1].pointValue).to.equal(400);
    expect(round.clues[2].pointValue).to.equal(600);
    expect(round.clues[3].pointValue).to.equal(800);
  });

  it('should set some clues as Daily Doubles', function() {
    round = new Round(2);
    round.setCategoryIds(game.categoryIds, data);
    round.getClues(data);
    round.setDailyDouble();
    let result = round.clues.filter(clue => clue.dailyDouble).length;
    expect(result).to.equal(2);
  });

});



