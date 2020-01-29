const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
  let deck;
  let card1;
  let card2;
  let card3;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
  });

  it('should instantiate a new deck', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of a deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });

 describe('Deck Methods', function() {

  it('should have a card count', function() {
    deck.countCards();
    expect(deck.countCards()).to.equal(3);
  })
});
});
