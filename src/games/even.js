import logicGames from '../index.js';
import randomNumber from '../mathOperation.js';

const isEven = (a) => (a % 2 === 0 ? 1 : 0);

const nameOfGames = 'Answer "yes" if the number is even, otherwise answer "no".';
const playGame = () => {
  const randomValue = randomNumber(1, 100);
  const gameQuestion = randomValue;
  return [isEven(randomValue) === 1 ? 'yes' : 'no', gameQuestion];
};
const gamesEven = () => logicGames(playGame, nameOfGames);

export default gamesEven;
