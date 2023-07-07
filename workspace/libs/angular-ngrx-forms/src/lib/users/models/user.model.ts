import { faker } from '@faker-js/faker';
import { box, Boxed, createFormArrayState, createFormGroupState, FormArrayState } from 'ngrx-forms';

export interface UserForm {
  name: string;
  age: number;
  gender: UserGender;
  phone: string;
  additionalInfo: Boxed<string[]>;
}

export interface UserFormFriend {
  fistname: string;
  lastname: string;
}

export interface User {
  id: number;
  name: string;
  age: number;
  gender: UserGender;
  isSelected?: boolean | null;
  additionalInfo: string[];
}

export type UserGender = 'male' | 'female';

export interface UserFormConfig {
  minAge: number;
}

export interface UserFormState {
  user: UserForm;
  userFriends: FormArrayState<UserFormFriend>;
  config: UserFormConfig;
}

export const USER_FEATURE_KEY = 'user_feature';
export const USER_FORM_ID = 'user_form_id';
export const USER_FORM_FRIEND_ID = 'user_form_friend_id';

export const initialUserFormState = createFormGroupState<UserFormState>(USER_FORM_ID, {
  user: {
    name: '',
    gender: 'male',
    age: 0,
    phone: '',
    additionalInfo: box([]),
  },
  userFriends: createFormArrayState<UserFormFriend>(USER_FORM_FRIEND_ID, []),
  config: {
    minAge: 18,
  },
});

export const createManyUsers = (): User[] => {
  const repeat = (n: number) => [...Array(n).keys()];

  return repeat(10).map((index) => {
    return {
      id: index,
      additionalInfo: [],
      age: Number(faker.random.numeric(2)),
      gender: 'male',
      name: faker.name.fullName(),
      isSelected: false,
    };
  });
};
