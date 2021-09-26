import readlineSync from 'readline-sync';
import name from './cli.js';
/*                                FUNCTION RANDOM AND EVEN NUMBER AND SQRT                        */
const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isEven = (a) => a % 2 === 0 ? 1 : 0;
const mathNumber = (num) => Math.floor(Math.sqrt(num));
const isPrime = (num) => {
  const c = mathNumber(num);
  for (let i = 2; i <= c; i += 1) {
    if (num % i === 0) {
      return 0;
    }
  }
  return 1;
};

/*                                        BRAIN--CALC                                             */
const calc = () => {
  for (let i = 0; i < 3; i += 1) {
    const operand1 = randomNum(1, 50);
    const operand2 = randomNum(1, 50);
    const operator = randomNum(1, 3);
    let result = 0;
    switch (operator) {
      case 1:
        result = operand1 + operand2;
        console.log(`Question: ${operand1} + ${operand2}`);
        break;

      case 2:
        result = operand1 - operand2;
        console.log(`Question: ${operand1} - ${operand2}`);
        break;

      case 3:
        result = operand1 * operand2;
        console.log(`Question: ${operand1} * ${operand2}`);
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

/*                                        BRAIN--EVEN                                             */

const even = () => {
  for (let i = 0; i < 3; i += 1) {
    const ranNum = randomNum(1, 100);
    console.log(`Question: ${ranNum}`);
    const ansver = readlineSync.question('Your answer: ');
    if (isEven(ranNum) === 1) {
      if (ansver === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`${ansver} is wrong answer ;(. Correct answer was 'yes'.`);
        return console.log(`Let's try again, ${name}`);
      }
    }
    if (isEven(ranNum) === 0) {
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

/*                                        BRAIN--GCD                                              */
const gcd = () => {
  for (let i = 0; i < 3; i += 1) {
    let operand1 = randomNum(1, 50);
    let operand2 = randomNum(1, 50);
    let result = 0;
    console.log(`Question: ${operand1} ${operand2}`);
    const ansver = readlineSync.question('Your answer: ');
    while (operand1 !== operand2) {
      if (operand1 > operand2) {
        operand1 -= operand2;
      } else {
        operand2 -= operand1;
      }
    }
    result = operand1;
    if (ansver == result) {
      console.log('Correct!');
    } else {
      console.log(`${ansver} is wrong answer ;(. Correct answer was ${result}.`);
      return console.log(`Let's try again, ${name}`);
    }
  }
  console.log(`Congratulations, ${name}`);
  return 0;
};

/*                                     BRAIN--PROGRESSION                                         */
const progression = () => {
  for (let k = 1; k <= 3; k += 1) {
    let numRand = randomNum(3, 50);
    const lengthProgression = randomNum(1, 8);
    const sizeArr = randomNum(5, 10);
    const numExclusion = randomNum(0, sizeArr - 1);
    let result = 0;
    const arr = [];
    for (let i = 0; i < sizeArr; i += 1) {
      arr[i] = numRand;
      numRand += lengthProgression;
    }
    result = arr[numExclusion];
    arr[numExclusion] = '..';
    console.log(`Question: ${arr.join(' ')}`);
    const ansver = readlineSync.question('Your answer: ');
    if (ansver == result) {
      console.log('Correct!');
    } else {
      console.log(`${ansver} is wrong answer ;(. Correct answer was ${result}.`);
      return console.log(`Let's try again, ${name}`);
    }
  }
  console.log(`Congratulations, ${name}`);
  return 0;
};

const prime = () => {
  for (let k = 1; k <= 3; k += 1) {
    const ranNum = randomNum(2, 3571);
    console.log(`Question: ${ranNum}`);
    const ansver = readlineSync.question('Your answer: ');
    if (isPrime(ranNum) === 1) {
      if (ansver === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`${ansver} is wrong answer ;(. Correct answer was 'yes'.`);
        return console.log(`Let's try again, ${name}`);
      }
    }
    if (isPrime(ranNum) === 0) {
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

export {
  calc, even, gcd, progression, prime,
};
