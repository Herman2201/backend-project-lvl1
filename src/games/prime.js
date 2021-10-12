import startPlaying from '../index.js';
import randomNumber from '../utils.js';

const nameOfGames = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const squareRoot = Math.sqrt(number);
  for (let i = 2; i <= squareRoot; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const playOfGame = () => {
  const number = randomNumber(2, 3571);
  const gameQuestion = `${number}`;
  const gameResult = isPrime(number) ? 'yes' : 'no';
  return [gameResult, gameQuestion];
};

const gamePrime = () => startPlaying(playOfGame, nameOfGames);
export default gamePrime;
