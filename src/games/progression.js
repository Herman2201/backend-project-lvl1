import logicGames from '../index.js';
import randomNumber from '../mathOperation.js';

const nameOfGames = 'What number is missing in the progression?';

const generationRandomArr = (sizeArr, lengthProgression, randomValue) => {
  const generationArr = [];
  let increasingValue = randomValue;
  for (let i = 0; i < sizeArr; i += 1) {
    generationArr[i] = increasingValue;
    increasingValue += lengthProgression;
  }
  return generationArr;
};
const playOfGame = () => {
  const randomValue = randomNumber(3, 50);
  const lengthProgression = randomNumber(1, 8);
  const sizeArr = randomNumber(5, 10);
  const numberExclusion = randomNumber(0, sizeArr - 1);
  const randomArr = generationRandomArr(sizeArr, lengthProgression, randomValue);
  const gameResult = randomArr[numberExclusion];
  randomArr[numberExclusion] = '..';
  const gameQuestion = `${randomArr.join(' ')}`;
  return [String(gameResult), gameQuestion];
};

const gameProgression = () => logicGames(playOfGame, nameOfGames);
export default gameProgression;
