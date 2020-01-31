const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Card = require('../src/Card');


class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[this.turns];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    // !turn.evaluateGuess() ? this.incorrectGuesses.push(this.returnCurrentCard().id) : console.log(this.returnCurrentCard().id);
    if(!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.returnCurrentCard().id);
    }
    this.turns ++;
    return turn.giveFeedBack();
  }

  calculatePercentCorrect() {
    const incorrect = this.incorrectGuesses.length;
    const correct = this.turns - incorrect;
    return Math.round(correct / this.turns * 100);
  }


  endRound() {

    let message = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
    console.log(message);
    return message;
    // process.exit();
  }
}

module.exports = Round;
