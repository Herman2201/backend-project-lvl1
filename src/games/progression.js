import logicGames from '../index.js';
import { randomNum } from '../mathOperation.js';

const ruleGame = 'What number is missing in the progression?';
const playGame = () => {
  let numRand = randomNum(3, 50);
  const lengthProgression = randomNum(1, 8);
  const sizeArr = randomNum(5, 10);
  const numExclusion = randomNum(0, sizeArr - 1);
  let result = 0;
  const arr = [];
  for (let i = 0; i < sizeArr; i += 1) {
    arr[i] = numRand;
    numRand += lengthProgression;
  }
  result = arr[numExclusion];
  arr[numExclusion] = '..';
  const question = `${arr.join(' ')}`;
  result = String(result);
  return [result, question];
};

const gameProgression = () => logicGames(playGame, ruleGame);
export default gameProgression;
