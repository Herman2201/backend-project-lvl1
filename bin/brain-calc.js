#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from '../src/cli.js';

console.log(`What is the result of the expression?`);
const randomSwitch = () => Math.floor(Math.random() * 3 + 1);
const mathRandom = () => Math.floor((Math.random() * 50) + 1);
const calc = () => {
  for (let i = 0; i < 3; i += 1) {
    const num1 = mathRandom();
    const num2 = mathRandom();
    const operator = randomSwitch();
    let result = 0;
    switch (operator) {
      case 1:
        result = num1 + num2;
        console.log(`Question: ${num1} + ${num2}`);
        break;

      case 2:
        result = num1 - num2;
        console.log(`Question: ${num1} - ${num2}`);
        break;

      case 3:
        result = num1 * num2;
        console.log(`Question: ${num1} * ${num2}`);
        break;
      default:
    }
    const ansver = readlineSync.question('Your answer: ');
    if (result == ansver) {
      console.log('wow, you cool!');
    } else {
      console.log(`${ansver} is wrong answer ;(. Correct answer was ${result}.`);
      return console.log(`Let's try again, ${name}`);
    }
  }
  console.log(`Congratulations, ${name}`);
  return 0;
};
calc();
