import readlineSync from 'readline-sync';

const logicGames = (playGame, rulesGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log(rulesGame);
  let userPoint = 0;
  while (userPoint < 3) {
    const [answerTest, questionTest] = playGame();
    console.log(`Question: ${questionTest}`);
    const ansver = readlineSync.question('Your answer: ');
    if (answerTest == ansver) {
      console.log('Correct!');
      userPoint += 1;
    } else {
      console.log(`${ansver} is wrong answer ;(. Correct answer was ${answerTest}.`);
      return console.log(`Let's try again, ${userName}`);
    }
  }
  console.log(`Congratulations, ${userName}`);
  return 0;
};

export default logicGames;
