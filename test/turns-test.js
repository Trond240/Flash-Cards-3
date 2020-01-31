const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let card1;
  let card2;
  let turn1;
  let turn2;

beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    turn1 = new Turn('pug', card1);
    turn2 = new Turn('gallbladder', card2);
});

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  })

  it('should be an instance of a player Turn', function() {
    expect(turn1).to.be.an.instanceof(Turn);
  });

describe('Turn methods', function() {

  it('should return the player guess', function() {
    turn1.returnGuess();
    expect(turn1.returnGuess()).to.equal('pug');
  })

  it('should return the player card', function() {
    turn1.returnCard();
    expect(turn1.returnCard()).to.deep.equal(card1);
  })

  it('should return the player card2', function() {
    turn2.returnCard();
    expect(turn2.returnCard()).to.deep.equal(card2);
  })

  it('should evaluate if the player guess is incorrect', function() {
    turn1.evaluateGuess();
    expect(turn1.evaluateGuess()).to.equal(false);
  })

  it('should evaluate if the player guess is correct', function() {
    turn2.evaluateGuess();
    expect(turn2.evaluateGuess()).to.equal(true);
  })

  it('should give feedback after guess that returns incorrect false', function() {
    expect(turn1.giveFeedBack()).to.equal('correct');
  })

  it('should give feedback after guess that returns correct true', function() {
    expect(turn2.giveFeedBack()).to.equal('incorrect');
  })
});
});
