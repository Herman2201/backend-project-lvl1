import logicGames from '../index.js';
import randomNumber from '../utils.js';

const nameOfGames = 'Find the greatest common divisor of given numbers.';

const greatestMultiple = (randomOperand1, randomOperand2) => {
  let replacementOperand1 = randomOperand1;
  let replacementOperand2 = randomOperand2;
  while (replacementOperand1 !== replacementOperand2) {
    if (replacementOperand1 > replacementOperand2) {
      replacementOperand1 -= replacementOperand2;
    } else {
      replacementOperand2 -= replacementOperand1;
    }
  }
  return String(replacementOperand1);
};

const playOfGame = () => {
  const randomOperand1 = randomNumber(1, 50);
  const randomOperand2 = randomNumber(1, 50);
  const gameQuation = `${randomOperand1} ${randomOperand2}`;
  const gameResult = greatestMultiple(randomOperand1, randomOperand2);
  return [gameResult, gameQuation];
};

const gamesGcd = () => logicGames(playOfGame, nameOfGames);

export default gamesGcd;
