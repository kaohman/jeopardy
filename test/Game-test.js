const chai = require('chai');
const expect = chai.expect;
const Game = require('../lib/Game.js');
const spies = require('chai-spies');
chai.use(spies);

global.domUpdates = require('../lib/domUpdates.js');
chai.spy.on(global.domUpdates, [], () => true);

describe('Game', function() {
  var game;
  beforeEach(function() {
    game = new Game();
  });

  it('should store the current round, which should start at round 1', function() {
    expect(game.currentRound).to.equal(1);
  });

  it('should store the current players turn, which should start at player 1', function() {
    expect(game.playerTurn).to.equal(1);
  });

  it('should store an array of category IDs, which should start as an empty array', function() {
    expect(game.categoryIds).to.deep.equal([]);
  });

  it('should be able to choose categories by taking an object and turning it into an array of the same category IDs', function() {
    let categoryIdsObj = { a: 1, b: 2, c:3, d: 4, e: 5};
    game.chooseCategories(categoryIdsObj);
    expect(game.categoryIds.length).to.equal(5);
  });

  it('should randomly sort that array', function() {
    let categoryIdsObj = { a: 1, b: 2, c:3, d: 4, e: 5};
    let categoryIdsArray = [1, 2, 3, 4, 5];
    game.chooseCategories(categoryIdsObj);
    expect(game.categoryIds).to.not.deep.equal(categoryIdsArray);
  });

  it('should be able to increase the round', function() {
    game.changeRound();
    expect(game.currentRound).to.equal(2);
  });

  it('should be able to change the player turn', function() {
    game.changePlayerTurn();
    expect(game.playerTurn).to.equal(2);
  });

  it('should only allow 3 players to have turns', function() {
    game.changePlayerTurn();
    game.changePlayerTurn();
    game.changePlayerTurn();
    expect(game.playerTurn).to.equal(1);
  });
});

