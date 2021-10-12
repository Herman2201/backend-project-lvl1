import startPlaying from '../index.js';
import randomNumber from '../utils.js';

const nameOfGames = 'What number is missing in the progression?';

const sequence = (arr, hide) => {
  const copy = Array.from(arr);
  copy[hide] = '..';
  return `${copy.join(' ')}`;
};

const generation = (length, step, first) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(first + (step * i));
  }
  return progression;
};
const playOfGame = () => {
  const firstValue = randomNumber(3, 50);
  const step = randomNumber(1, 8);
  const length = randomNumber(5, 10);
  const numberExclusion = randomNumber(0, length - 1);
  const randomArr = generation(length, step, firstValue);
  const gameResult = randomArr[numberExclusion].toString();
  const gameQuestion = sequence(randomArr, numberExclusion);
  return [gameResult, gameQuestion];
};

const gameProgression = () => startPlaying(playOfGame, nameOfGames);
export default gameProgression;
