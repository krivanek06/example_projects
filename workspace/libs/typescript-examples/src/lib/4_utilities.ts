/*
  Partial, Omit

  https://www.typescriptlang.org/docs/handbook/utility-types.html
*/

interface Car {
  velocity: number;
  year: number;
  name: string;
}

// PARTIAL
const createPartialCar = (): Partial<Car> => {
  return {
    name: 'BWM',
  };
};
const carPartial = createPartialCar();
// -------------------

// REQUIRE
// const carRequired1: Required<Car>  = {...carPartial};
// const carRequired2: Car  = {...carPartial};
// -------------------

// READ ONLY
const carReadOnly: Partial<Readonly<Car>> = { ...carPartial };
// carReadOnly.name = 'Tesla';
// -------------------

// Record
type CarType = 'Tesla' | 'Audi' | 'Citroen';
const carsRecord1: { [key in CarType]: Partial<Car> } = {
  Tesla: {
    name: 'Audi 1',
  },
  Audi: {
    name: 'Audi 1',
  },
  Citroen: {
    name: 'Citroen 1',
  },
};

const carsRecord2: Record<CarType, Partial<Car>> = {
  Tesla: {
    name: 'Audi 1',
  },
  Audi: {
    name: 'Audi 1',
  },
  Citroen: {
    name: 'Citroen 1',
  },
};

// -------------------
/*
  Car {
    velocity: number;
    year: number;
    name: string;
  }
*/
// Pick & Omit
type CarPick = Pick<Car, 'name'>;
type CarOmit = Omit<Car, 'name'>;

// Exclude & Extract
type Test1 = 'a' | 'b' | 'c';
type Test2 = 'a' | 'd' | 'e';

type TestExclude = Exclude<Test1, Test2>;
type TestExtract = Extract<Test1, Test2>;

// --------------
// Unknown

// const vector1: any = 1;
// const vector2: unknown = 2;

// const sum1 = vector1 + 222;
// const sum2 = vector2 + 222;
