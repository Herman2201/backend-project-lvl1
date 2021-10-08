import logicGames from '../index.js';
import randomNumber from '../mathOperation.js';

const nameOfGames = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (calculatedValue) => {
  const squareNumber = Math.sqrt(calculatedValue);
  for (let i = 2; i <= squareNumber; i += 1) {
    if (calculatedValue % i === 0) {
      return 0;
    }
  }
  return 1;
};

const playOfGame = () => {
  const randomValue = randomNumber(2, 3571);
  const gameQuestion = `${randomValue}`;
  return [isPrime(randomValue) === 1 ? 'yes' : 'no', gameQuestion];
};

const gamePrime = () => logicGames(playOfGame, nameOfGames);
export default gamePrime;
