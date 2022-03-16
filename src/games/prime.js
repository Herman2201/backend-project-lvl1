import startToPlaying from '../index.js';
import gerenerateNumber from '../utils.js';

const nameOfGames = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const squareRoot = Math.sqrt(number);
  for (let i = 2; i <= squareRoot; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

function playOfGame() {
  const number = gerenerateNumber(-266, 3571);
  const gameQuestion = `${number}`;
  const gameResult = isPrime(number) ? 'yes' : 'no';
  return [gameResult, gameQuestion];
}

const playPrime = () => startToPlaying(playOfGame(), nameOfGames);
export default playPrime;
