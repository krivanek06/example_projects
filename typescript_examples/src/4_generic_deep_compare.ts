//  extends any[] ? 'Do not pass array' : T

const deepEqual = <T>(a: T, b: T): boolean => {
  // if (Array.isArray(a) || Array.isArray(b)) {
  //   throw new Error('Cannot pass array');
  // }
  return a === b;
};

const test1 = 'dummy';
const test2 = ['aaa', 'eeee'];

console.log(deepEqual(test1, test1));
console.log(deepEqual(test2, test2));
console.log(deepEqual(['aa'], ['aa']));

// WHAT is 'in'

// const func = (value: unknown) => {
//   if (value && typeof value === 'object' && 'aa' in value) {
//     console.log('aa was in value');
//   } else {
//     console.log('nothing');
//   }
// };

// func('aaaaaaa');
// func({ name: 'eeee' });
// func({ aa: 'test1' });
