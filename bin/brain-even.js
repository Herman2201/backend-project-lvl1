#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from '../src/cli.js';

console.log(`Answer 'yes' if the number is even, otherwise answer 'no'.`);
const evenNumber = (a) => a % 2 === 0 ? 1 : 0;
const mathRandom = () => Math.floor((Math.random() * 100) + 1);
const even = () => {
  for (let i = 0; i < 3; i += 1) {
    const a = mathRandom();
    console.log(`Question: ${a}`);
    const ansver = readlineSync.question('Your answer: ');
    if (evenNumber(a) === 1) {
      if (ansver === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`${ansver} is wrong answer ;(. Correct answer was 'yes'.`);
        return console.log(`Let's try again, ${name}`);
      }
    }
    if (evenNumber(a) === 0) {
      if (ansver === 'no') {
        console.log('Correct!');
      } else {
        console.log(`${ansver} is wrong answer ;(. Correct answer was 'no'.`);
        return console.log(`Let's try again, ${name}`);
      }
    }
  }
  console.log(`Congratulations, ${name}`);
  return 0;
};
even();
