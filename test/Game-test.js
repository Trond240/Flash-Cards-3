const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {

  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('should have keep track of the current round', function() {
    expect(game.currentRound).to.equal(null);
  });

  it('should start your game', function() {
    expect(game.currentRound).to.equal(null);
    game.startGame();
    expect(game.currentRound).to.be.an.instanceOf(Round);
  });
});
