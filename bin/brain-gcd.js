#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from '../src/cli.js';

console.log(`Find the greatest common divisor of given numbers.`);
const mathRandom = () => Math.floor((Math.random() * 50) + 1);
const even = () => {
  for (let i = 0; i < 3; i += 1) {
    let a = mathRandom();
    let b = mathRandom();
    let gcd = 0;
    console.log(`Question: ${a} ${b}`);
    const ansver = readlineSync.question('Your answer: ');
    while (a !== b) {
      if (a > b) {
        a -= b;
      } else {
        b -= a;
      }
    }
    gcd = a;
    if (ansver == gcd) {
      console.log('Correct!');
    } else {
      console.log(`${ansver} is wrong answer ;(. Correct answer was ${gcd}.`);
      return console.log(`Let's try again, ${name}`);
    }
  }
  console.log(`Congratulations, ${name}`);
  return 0;
};
even();
