import logicGames from '../index.js';
import { isPrime } from '../isStupidity.js';
import { randomNum } from '../mathOperation.js';

const ruleGames = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const playGame = () => {
  const ranNum = randomNum(2, 3571);
  let result = '';
  const question = `${ranNum}`;
  if (isPrime(ranNum) === 1) {
    result = 'yes';
    return [result, question];
  }
  result = 'no';
  return [result, question];
};

const gamePrime = () => logicGames(playGame, ruleGames);
export default gamePrime;
