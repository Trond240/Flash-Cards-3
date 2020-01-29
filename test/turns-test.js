const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  let turn;
  let card1;
  let card2;
  let card3;
  let card4;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    card2 = new Card(4, 'What is Johns\'s favorite animal', ['Turkey', 'german shepard', 'capybara'], 'capybara');
    turn = new Turn('pug', card1);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  })

  it('should be an instance of a player Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

describe('Turn methods', function() {

  it.skip('should return the player guess', function() {
    turn.returnGuess();
    expect(turn.returnGuess()).to.equal('pug');
  })

  it.skip('should return the player card', function() {
    turn.returnCard();
    expect(turn.returnCard()).to.deep.equal(card);
  })

  it.skip('should evaluate if the player guess matches the correct answer', function() {
    turn.evaluateGuess();
    expect(turn.evaluateGuess()).to.equal(false);
  })

  it.skip('should give feedback after guess that returns correct or incorrect on true or false', function() {
    expect(turn.giveFeedBack()).to.equal('Incorrect');
  })
});
});
