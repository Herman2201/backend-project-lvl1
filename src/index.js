import readlineSync from 'readline-sync';

const logicGames = (playGame, rulesGame) => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello ${userName}!\n${rulesGame}`);
  let userPoint = 0;
  while (userPoint < 3) {
    const [answerTest, questionTest] = playGame();
    const ansver = readlineSync.question(`Question: ${questionTest}\nYour answer: `);
    if (answerTest == ansver) {
      console.log('Correct!');
      userPoint += 1;
    } else {
      return console.log(`${ansver} is wrong answer ;(. Correct answer was ${answerTest}.\nLet's try again, ${userName}`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default logicGames;
