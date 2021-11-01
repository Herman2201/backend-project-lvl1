import readlineSync from 'readline-sync';

const findOutTheName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
export default findOutTheName;
