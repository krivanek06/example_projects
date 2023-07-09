const getDeepValue = <T, TFirstKey extends keyof T, TSecond extends keyof T[TFirstKey]>(
  obj: T,
  firstKey: TFirstKey,
  secondKey: TSecond,
) => {
  return obj[firstKey][secondKey];
};

const obj = {
  foo: {
    a: 1,
    b: 'bbbb',
  },
  bar: {
    c: 'cccc',
    d: 4,
  },
};

const value = getDeepValue(obj, 'foo', 'a');

const returnWhatIsPassedIn = (value: number | string | {} | any[]) => {
  return value;
};
const aaa = returnWhatIsPassedIn('aaa');

// -----------------
// -----------------
// -----------------

const deepEqual = <T>(a: T extends any[] ? 'Do not pass array' : T, b: T): boolean => {
  return a === b;
};

const testString = 'dummy';
const testArray = ['aaa', 'eeee']; // pointer to memory space

//console.log(deepEqual(testString, testString));
// console.log(deepEqual(testArray, testArray));

// ------------------
// WHAT is 'in'

const func = (value: unknown) => {
  if (typeof value === 'object' && 'aa' in value) {
    console.log('aa was in value');
  } else {
    console.log('nothing');
  }
};

// func('aaaaaaa');
// func({ name: 'eeee' });
// func({ aa: 'test1' });

// ----------------------
// In vs hasOwnProperty()
function TestObj() {
  this.name = 'Dragon';
}
TestObj.prototype = { gender: 'male' }; // inheritance

// console.log('-------------');
// const o = new TestObj();
// console.log(o.hasOwnProperty('name')); // true
// console.log('name' in o); // true

// console.log(o.hasOwnProperty('gender')); // false
// console.log('gender' in o); // true
