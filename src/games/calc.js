import logicGames from '../index.js';
import randomNumber from '../mathOperation.js';

const nameOfGames = 'What is the result of the expression?';

const rundomArithmeticExample = (randomOperator, rumdomOperand1, rumdomOperand2) => {
  let arithmeticResult = 0;
  switch (randomOperator) {
    case '+':
      arithmeticResult = rumdomOperand1 + rumdomOperand2;
      break;

    case '-':
      arithmeticResult = rumdomOperand1 - rumdomOperand2;
      break;

    case '*':
      arithmeticResult = rumdomOperand1 * rumdomOperand2;
      break;
    default:
  }
  return String(arithmeticResult);
};

const playOfGame = () => {
  const rumdomOperand1 = randomNumber(1, 50);
  const rumdomOperand2 = randomNumber(1, 50);
  const arrMathOperators = ['+', '-', '*'];
  const randomOperator = arrMathOperators[randomNumber(0, 2)];
  const gameResult = rundomArithmeticExample(randomOperator, rumdomOperand1, rumdomOperand2);
  const gameQuation = `${rumdomOperand1} ${randomOperator} ${rumdomOperand2}`;
  return [gameResult, gameQuation];
};
const gameCalc = () => logicGames(playOfGame, nameOfGames);
export default gameCalc;
