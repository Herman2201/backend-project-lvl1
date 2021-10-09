import logicGames from '../index.js';
import randomNumber from '../utils.js';

const nameOfGames = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (calculatedValue) => {
  const squareNumber = Math.sqrt(calculatedValue);
  for (let i = 2; i <= squareNumber; i += 1) {
    if (calculatedValue % i === 0) {
      return false;
    }
  }
  return true;
};

const playOfGame = () => {
  const randomValue = randomNumber(2, 3571);
  const gameQuestion = `${randomValue}`;
  const gameResult = isPrime(randomValue) === true ? 'yes' : 'no';
  return [gameResult, gameQuestion];
};

const gamePrime = () => logicGames(playOfGame, nameOfGames);
export default gamePrime;
