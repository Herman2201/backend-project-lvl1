import startToPlaying from '../index.js';
import gerenerateNumber from '../utils.js';

const nameOfGames = 'What is the result of the expression?';

const createAnExample = (operator, number1, number2) => {
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
  const operand1 = gerenerateNumber(1, 50);
  const operand2 = gerenerateNumber(1, 50);
  const arrOperators = ['+', '-', '*'];
  const operator = arrOperators[gerenerateNumber(0, arrOperators.length - 1)];
  const gameResult = createAnExample(operator, operand1, operand2);
  const gameQuation = `${operand1} ${operator} ${operand2}`;
  return [String(gameResult), gameQuation];
};
const playCalc = () => startToPlaying(playOfGame, nameOfGames);
export default playCalc;
