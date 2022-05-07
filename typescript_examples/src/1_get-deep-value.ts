const getDeepValue = (obj: any, firstKey: any, secondKey: any) => {
  return obj[firstKey][secondKey];
};

const getDeepValue2 = <T, TFirstKey extends keyof T, TSecondKey extends keyof T[TFirstKey]>(
  obj: T,
  firstKey: TFirstKey,
  secondKey: TSecondKey,
) => {
  return obj[firstKey][secondKey];
};

const obj = {
  foo: {
    a: 1,
    b: 'bbbb',
  },
  bar: {
    c: 'asdf',
    d: 4,
  },
};

const value = getDeepValue2(obj, 'foo', 'a');

// const returnWhatIsPassedIn = (value: number | string | {} | any[]) => {
//   return value;
// }
