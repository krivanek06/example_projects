/*
  when to use types ?

  - Primitives
  type Nullish = null | undefined;
  type Fruit = 'apple' | 'pear' | 'orange';
  type Num = number | bigint;

  - Tuple
  type row = [colOne: number, colTwo: string];
*/

// -----------------
// -----------------
// -----------------
// EXAMPLE 1.

type Animal = {
  __typename: 'Animal';
  name: string;
};

type Human = {
  __typename: 'Human';
  firstName: string;
  lastName: string;
};

type GetRequiredInformation<T> = T extends Animal ? { age: number } & Animal : never;
type GetRequiredInformation2<T> = T extends Animal ? { age: number } : T extends Human ? { gender: number } : never;

const makeAnimalRequired = (): GetRequiredInformation<Animal> => {
  return {
    __typename: 'Animal',
    name: 'Lion',
    age: 4,
  };
};
const animalTest = makeAnimalRequired();

// -----------------
// -----------------
// -----------------
// EXAMPLE 2.

const computeAnimal = (animal: Animal): string => 'Animal hard computation';
const computeHuman = (human: Human): string => 'Human hard computation';
const isAnimalType = (animal: Animal | Human): animal is Animal => animal.__typename === 'Animal';

const decideOnOne = (entity: Animal | Human): string => {
  // Property 'name' is missing in type 'Human' but required in type 'Animal'.
  if (isAnimalType(entity)) {
    return computeAnimal(entity);
  }
  //return 'placeholder';
};

// -----------------
// -----------------
// -----------------
// EXAMPLE 3.

type Route = {
  origin: {
    city: string;
    state: string;
    departureFree: number;
  };
  destination: {
    city: string;
    state: string;
    arrivalFee: number;
  };
};

type Origin = Route['origin'];
type Destination = Route['destination'];

// --------------------
// --------------------
// --------------------

// weird stuff -> secure your job
const p1: Partial<Human> = {
  firstName: 'Palo',
};
const p2: Partial<Animal> = {
  __typename: 'Animal',
  name: 'Lion',
};

const p3: Human = {
  ...p1,
  ...p2,
} as Human;

console.log(p3.firstName);
console.log(p3['name']);
