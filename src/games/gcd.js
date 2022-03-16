import startToPlaying from '../index.js';
import gerenerateNumber from '../utils.js';

const nameOfGames = 'Find the greatest common divisor of given numbers.';

const greatestMultiple = (number1, number2) => {
  let min = Math.min(number1, number2);
  let max = Math.max(number1, number2);
  while (min !== max) {
    const difference = max - min;
    [min, max] = [
      Math.min(difference, min),
      Math.max(difference, min),
    ];
  }
  return max;
};

const playOfGame = () => {
  const number1 = gerenerateNumber(1, 50);
  const number2 = gerenerateNumber(1, 50);
  const gameQuation = `${number1} ${number2}`;
  const gameResult = greatestMultiple(number1, number2);
  return [String(gameResult), gameQuation];
};

const playGcd = () => startToPlaying(playOfGame(), nameOfGames);

export default playGcd;
