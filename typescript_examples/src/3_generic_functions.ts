/*
  when to use types ?

  - Primitives
  type Nullish = null | undefined;
  type Fruit = 'apple' | 'pear' | 'orange';
  type Num = number | bigint;

  - Tuple
  type row = [colOne: number, colTwo: string];
*/

type Animal = {
  name: string;
};

type Human = {
  firstName: string;
  lastName: string;
};

type GetRequiredInformation<T> = T extends Animal ? { age: number } | Animal : T extends Human ? { id: number } | Human : never;

const makeAnimal = (animal: Animal): GetRequiredInformation<Animal> => {
  return {
    age: 123,
    name: '123',
  };
};

// type Test = {
//   name: string
// }

// const makeOther = (animal: Animal): GetRequiredInformation<Test> => {
//   return {};
// };
