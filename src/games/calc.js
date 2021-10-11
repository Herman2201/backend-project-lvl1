import startPlaying from '../index.js';
import randomNumber from '../utils.js';

const nameOfGames = 'What is the result of the expression?';

const rundomArithmeticExample = (randomOperator, rumdomOperand1, rumdomOperand2) => {
  switch (randomOperator) {
    case '+':
      return rumdomOperand1 + rumdomOperand2;

    case '-':
      return rumdomOperand1 - rumdomOperand2;

    case '*':
      return rumdomOperand1 * rumdomOperand2;

    default:
      throw new Error(`This operator ${randomOperator} is not supported`);
  }
};

const playOfGame = () => {
  const rumdomOperand1 = randomNumber(1, 50);
  const rumdomOperand2 = randomNumber(1, 50);
  const arrMathOperators = ['+', '-', '*'];
  const randomOperator = arrMathOperators[randomNumber(0, arrMathOperators.length - 1)];
  const gameResult = rundomArithmeticExample(randomOperator, rumdomOperand1, rumdomOperand2);
  const gameQuation = `${rumdomOperand1} ${randomOperator} ${rumdomOperand2}`;
  return [String(gameResult), gameQuation];
};
const gameCalc = () => startPlaying(playOfGame, nameOfGames);
export default gameCalc;
