import { faker } from '@faker-js/faker';
import { box, Boxed, createFormGroupState } from 'ngrx-forms';

export interface UserForm {
  name: string;
  age: number;
  gender: UserGender;
  additionalInfo: Boxed<string[]>;
}

export interface User extends UserForm {
  id: number;
  isSelected?: boolean | null;
}

export type UserGender = 'male' | 'female';

export interface UserFormConfig {
  minAge: number;
}

export interface UserFormState {
  user: UserForm;
  config: UserFormConfig;
}

export const USER_FEATURE_KEY = 'user_feature';
export const USER_FORM_ID = 'user_form_id';

export const initialUserFormState = createFormGroupState<UserFormState>(USER_FORM_ID, {
  user: {
    name: '',
    gender: 'male',
    age: 0,
    additionalInfo: box([]),
  },
  config: {
    minAge: 18,
  },
});

export function minAge(minAge: number) {
  return (value: number) => {
    return value >= minAge ? null : { minAge: true };
  };
}

export const createManyUsers = (): User[] => {
  const repeat = (n: number) => [...Array(n).keys()];

  return repeat(10).map((index) => {
    return {
      id: index,
      additionalInfo: box([]),
      age: Number(faker.random.numeric(2)),
      gender: 'male',
      name: faker.name.fullName(),
      isSelected: false,
    };
  });
};
