import logicGames from '../index.js';
import { randomNum } from '../mathOperation.js';

const ruleGames = 'Find the greatest common divisor of given numbers.';
const playGame = () => {
  let operand1 = randomNum(1, 50);
  let operand2 = randomNum(1, 50);
  let result = 0;
  const quation = `${operand1} ${operand2}`;
  while (operand1 !== operand2) {
    if (operand1 > operand2) {
      operand1 -= operand2;
    } else {
      operand2 -= operand1;
    }
  }
  result = operand1;
  result = String(result);
  return [result, quation];
};

const gamesGcd = () => logicGames(playGame, ruleGames);

export default gamesGcd;
