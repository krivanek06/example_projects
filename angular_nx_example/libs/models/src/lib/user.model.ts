export interface User {
  id?: number | string;
  displayName: string;
}

export const userTest1: User = {
  displayName: 'Firstname1 Lastname1',
};

export const userTest2: User = {
  displayName: 'Firstname2 Lastname2',
};

export const userTest3: User = {
  displayName: 'Firstname3 Lastname3',
};

export const allTestUsers = [userTest1, userTest2, userTest3];

console.log('asdsd');
