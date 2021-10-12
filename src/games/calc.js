import startPlaying from '../index.js';
import randomNumber from '../utils.js';

const nameOfGames = 'What is the result of the expression?';

const arithmeticExample = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;

    case '-':
      return number1 - number2;

    case '*':
      return number1 * number2;

    default:
      throw new Error(`This operator ${operator} is not supported`);
  }
};

const playOfGame = () => {
  const operand1 = randomNumber(1, 50);
  const operand2 = randomNumber(1, 50);
  const arrMathOperators = ['+', '-', '*'];
  const operator = arrMathOperators[randomNumber(0, arrMathOperators.length - 1)];
  const gameResult = arithmeticExample(operator, operand1, operand2);
  const gameQuation = `${operand1} ${operator} ${operand2}`;
  return [String(gameResult), gameQuation];
};
const gameCalc = () => startPlaying(playOfGame, nameOfGames);
export default gameCalc;
