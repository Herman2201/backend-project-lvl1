import startPlaying from '../index.js';
import randomNumber from '../utils.js';

const nameOfGames = 'Find the greatest common divisor of given numbers.';

const greatestMultiple = (number1, number2) => {
  let min = Math.min(number1, number2);
  let max = Math.max(number1, number2);
  while (min !== max) {
    const difference = max - min;
    [min, max] = [
      Math.min(difference, min),
      Math.max(difference, min)
    ];
  }
  return String(max);
};

const playOfGame = () => {
  const number1 = randomNumber(1, 50);
  const number2 = randomNumber(1, 50);
  const gameQuation = `${number1} ${number2}`;
  const gameResult = greatestMultiple(number1, number2);
  return [gameResult, gameQuation];
};

const gamesGcd = () => startPlaying(playOfGame, nameOfGames);

export default gamesGcd;
