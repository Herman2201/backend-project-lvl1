import readlineSync from 'readline-sync';

const logicGames = (playOfGame, rulesGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${rulesGame}`);
  for (let attemptCounter = 0; attemptCounter < 3; attemptCounter += 1) {
    const [answerTest, questionTest] = playOfGame();
    console.log(`Question: ${questionTest}`);
    const answer = readlineSync.question('Your answer: ');
    if (answerTest === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${answerTest}.`);
      console.log(`Let's try again, ${userName}!`);
      return 0;
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return 0;
};

export default logicGames;
