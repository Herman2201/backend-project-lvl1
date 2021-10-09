import logicGames from '../index.js';
import randomNumber from '../utils.js';

const nameOfGames = 'What number is missing in the progression?';

const hidingElement = (Arr, numberExclusion) => {
  Arr[numberExclusion] = '..';
  return `${Arr.join(' ')}`;
};

const generationRandomArr = (length, step, first) => {
  let current = [];
  for (let i = 0; i < length; i += 1) {
    current.push(first + (step * i));
  }
  return current;
};
const playOfGame = () => {
  const first = randomNumber(3, 50);
  const step = randomNumber(1, 8);
  const length = randomNumber(5, 10);
  const numberExclusion = randomNumber(0, length - 1);
  const randomArr = generationRandomArr(length, step, first);
  const gameResult = randomArr[numberExclusion].toString();
  const gameQuestion = hidingElement(randomArr, numberExclusion);
  return [gameResult, gameQuestion];
};

const gameProgression = () => logicGames(playOfGame, nameOfGames);
export default gameProgression;
