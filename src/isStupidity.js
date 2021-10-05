import { sqrtMath } from './mathOperation.js';

const isEven = (a) => a % 2 === 0 ? 1 : 0;
const isPrime = (num) => {
  const c = sqrtMath(num);
  for (let i = 2; i <= c; i += 1) {
    if (num % i === 0) {
      return 0;
    }
  }
  return 1;
};
export {
  isEven,
  isPrime,
};
