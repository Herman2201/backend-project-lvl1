import logicGames from '../index.js';
import { isEven } from '../isStupidity.js';
import { randomNum } from '../mathOperation.js';

const ruleGames = `Answer 'yes' if the number is even, otherwise answer 'no'.`;
const playGame = () => {
  let result = '';
  const randNum = randomNum(1, 100);
  const question = randNum;
  if (isEven(randNum) === 1) {
    result = 'yes';
    return [result, question];
  }
  result = 'no';
  return [result, question];
};

const gamesEven = () => logicGames(playGame, ruleGames);

export default gamesEven;
