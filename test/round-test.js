const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/round');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let round;
  let deck;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

describe ('default properties', () => {

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should be an instance of Round', function() {
    round.returnCurrentCard();
    expect(round.returnCurrentCard()).to.deep.equal(card1);  });
  });

  it('should store incorrect guesses', function() {
    round.takeTurn('pug');
    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

 describe ('round methods', () => {

  it('should increment turns by 1', function() {
    round.takeTurn('pug');
    expect(round.turns).to.equal(1);
  });

  it('should be push incorrect answer into an array', function() {
    round.takeTurn('pug');
    round.takeTurn('g');
    round.takeTurn('Fitzgerald');
    expect(round.incorrectGuesses.length).to.equal(2);
  });

  it('should be able to calculate the percentage of answers correct', function() {
    round.takeTurn('pug');
    round.takeTurn('gallbladde');
    round.takeTurn('Fitzgerald');
    expect(round.calculatePercentCorrect()).to.equal(33);
  });

  it('should show the percentage correct once the round ends', function() {
  round.takeTurn('pug');
  round.takeTurn('gallbladder');
  round.takeTurn('Fitzgerald');
  round.endRound();
  expect(round.endRound()).to.equal(`** Round over! ** You answered 67% of the questions correctly!`);
});
});
});
