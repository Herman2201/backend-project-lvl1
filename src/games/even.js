import startPlaying from '../index.js';
import randomNumber from '../utils.js';

const nameOfGames = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (a) => a % 2 === 0;

const playGame = () => {
  const randomValue = randomNumber(1, 100);
  const gameQuestion = randomValue;
  const gameResult = isEven(randomValue) ? 'yes' : 'no';
  return [gameResult, gameQuestion];
};
const gamesEven = () => startPlaying(playGame, nameOfGames);

export default gamesEven;
