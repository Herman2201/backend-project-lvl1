import readlineSync from 'readline-sync';

const attemptsToWin = 3;

const startToPlaying = (playOfGame, rulesGame) => {
  console.log('Welcome to the Brain Games!');
  const findOutTheName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${findOutTheName}!`);
  console.log(`${rulesGame}`);
  for (
    let attemptCounter = 0;
    attemptCounter < attemptsToWin;
    attemptCounter += 1
  ) {
    const [answerTest, questionTest] = playOfGame();
    console.log(`Question: ${questionTest}`);
    const answer = readlineSync.question('Your answer: ');
    if (answerTest !== answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${answerTest}.`);
      console.log(`Let's try again, ${findOutTheName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${findOutTheName}!`);
};

export default startToPlaying;
