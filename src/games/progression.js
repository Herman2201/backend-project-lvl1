import startToPlaying from '../index.js';
import gerenerateNumber from '../utils.js';

const nameOfGames = 'What number is missing in the progression?';

const hideSequenceElement = (sequence, hide) => {
  const copy = Array.from(sequence);
  copy[hide] = '..';
  return `${copy.join(' ')}`;
};

const generateProgression = (length, step, first) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(first + step * i);
  }
  return progression;
};
const playOfGame = () => {
  const firstValue = gerenerateNumber(3, 50);
  const step = gerenerateNumber(1, 8);
  const length = gerenerateNumber(5, 10);
  const numberExclusion = gerenerateNumber(0, length - 1);
  const randomArr = generateProgression(length, step, firstValue);
  const gameResult = randomArr[numberExclusion].toString();
  const gameQuestion = hideSequenceElement(randomArr, numberExclusion);
  return [gameResult, gameQuestion];
};

const playProgression = () => startToPlaying(playOfGame, nameOfGames);
export default playProgression;
