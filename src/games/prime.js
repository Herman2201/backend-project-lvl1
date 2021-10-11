import startPlaying from '../index.js';
import randomNumber from '../utils.js';

const nameOfGames = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (calculatedValue) => {
  const squareRoot = Math.sqrt(calculatedValue);
  for (let i = 2; i <= squareRoot; i += 1) {
    if (calculatedValue % i === 0) {
      return false;
    }
  }
  return true;
};

const playOfGame = () => {
  const randomValue = randomNumber(2, 3571);
  const gameQuestion = `${randomValue}`;
  const gameResult = isPrime(randomValue) ? 'yes' : 'no';
  return [gameResult, gameQuestion];
};

const gamePrime = () => startPlaying(playOfGame, nameOfGames);
export default gamePrime;
