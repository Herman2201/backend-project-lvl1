import startPlaying from '../index.js';
import randomNumber from '../utils.js';

const nameOfGames = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (a) => a % 2 === 0;

const playGame = () => {
  const number = randomNumber(1, 100);
  const gameQuestion = number;
  const gameResult = isEven(number) ? 'yes' : 'no';
  return [gameResult, gameQuestion];
};
const gamesEven = () => startPlaying(playGame, nameOfGames);

export default gamesEven;
