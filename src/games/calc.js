import logicGames from '../index.js';
import { randomNum } from '../mathOperation.js';

const ruleGame = `What is the result of the expression?`;
const playGame = () => {
  const operand1 = randomNum(1, 50);
  const operand2 = randomNum(1, 50);
  const operator = randomNum(1, 3);
  let result = 0;
  let question = '';
  switch (operator) {
    case 1:
      result = operand1 + operand2;
      question = (`${operand1} + ${operand2}`);
      break;

    case 2:
      result = operand1 - operand2;
      question = (`${operand1} - ${operand2}`);
      break;

    case 3:
      result = operand1 * operand2;
      question = (`${operand1} * ${operand2}`);
      break;
    default:
  }
  return [result, question];
};

const gameCalc = () => logicGames(playGame, ruleGame);
export default gameCalc;
