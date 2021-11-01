import startToPlaying from '../index.js';
import gerenerateNumber from '../utils.js';

const nameOfGames = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (a) => a % 2 === 0;

const playGame = () => {
  const number = gerenerateNumber(1, 100);
  const gameQuestion = number;
  const gameResult = isEven(number) ? 'yes' : 'no';
  return [gameResult, gameQuestion];
};
const playEven = () => startToPlaying(playGame, nameOfGames);

export default playEven;
