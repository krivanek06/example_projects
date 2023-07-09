import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  AbstractControlState,
  createFormStateReducerWithUpdate,
  FormGroupState,
  updateGroup,
  validate,
  ValidationFn,
} from 'ngrx-forms';
import { greaterThanOrEqualTo, minLength, required } from 'ngrx-forms/validation';
import {
  initialUserFormState,
  User,
  USER_FEATURE_KEY,
  UserForm,
  UserFormConfig,
  UserFormState,
} from '../models/user.model';
import { minAgeValidation, noChris } from '../models/user.validation';
import { UserActions, UserActionTypes } from './user.actions';

const userAdapter: EntityAdapter<User> = createEntityAdapter<User>({
  sortComparer: (a: User, b: User) => b.id - a.id,
});

export const userFormGroupReducer = createFormStateReducerWithUpdate<UserFormState>(
  updateGroup<UserFormState>(
    {
      user: updateGroup<UserForm>(
        {
          name: validate([required, minLength(4), noChris]),
          age: validate(required),
          gender: validate(required),
          additionalInfo: validate([]),
        },
        {}
      ),
      config: updateGroup<UserFormConfig>({
        minAge: validate([required, greaterThanOrEqualTo(0)]),
      }),
      // userFriends: updateArray(
      //   updateGroup<UserFormFriend>({
      //     fistname: validate(required),
      //     lastname: validate(required),
      //   })
      // ),
    },
    {
      // validate user's age more than config.age
      user: (user: FormGroupState<UserForm>, rootForm: FormGroupState<UserFormState>) =>
        updateGroup<UserForm>({
          age: (age: AbstractControlState<number>) => {
            const minAgeValue = (rootForm.controls.config as FormGroupState<UserFormConfig>).controls.minAge.value;
            return validate<number>(age, minAgeValidation(minAgeValue) as ValidationFn<number>);
          },
        })(user),
    }
  )
);

export interface UserStoreState extends EntityState<User> {
  userForm: FormGroupState<UserFormState>;
}

const initialState: UserStoreState = userAdapter.getInitialState({
  userForm: initialUserFormState,
});

const userReducer = (state: UserStoreState = initialState, action: UserActions): UserStoreState => {
  const userForm = userFormGroupReducer(state.userForm, action);
  if (userForm !== state.userForm) {
    state = { ...state, userForm };
  }

  switch (action.type) {
    case UserActionTypes.CREATE_USER_SUCCESS: {
      return userAdapter.addOne(action.payload.user, state);
    }
    case UserActionTypes.ADD_MANY_USERS_SUCCESS: {
      return userAdapter.addMany(action.payload.users, state);
    }
    case UserActionTypes.SELECT_USER: {
      return userAdapter.mapOne(
        {
          id: action.payload.userId,
          map: (user) => {
            return { ...user, isSelected: !user.isSelected };
          },
        },
        state
      );
    }
    // case UserActionTypes.ADD_USER_FRIEND_CONTROL: {
    //   return {...state, userForm: {
    //     ...state.userForm,
    //     controls: {
    //       ...state.userForm.controls,
    //       userFriends: updateGroup<UserFormFriend>({
    //         group: group => {

    //           return group;
    //         }
    //       })
    //     }
    //   }}
    // }
    default:
      return state;
  }
};

export function userReducerUsed(state: UserStoreState | undefined, action: UserActions) {
  return userReducer(state, action);
}

export const selectUserState = createFeatureSelector<UserStoreState>(USER_FEATURE_KEY);
export const { selectIds, selectEntities, selectAll, selectTotal } = userAdapter.getSelectors();

export const selectUserById = (userId: number) =>
  createSelector(selectUserState, (userState) => userState.entities[userId]);
export const selectUserForm = createSelector(selectUserState, (userState) => userState.userForm);
export const selectUserFormCreate = createSelector(selectUserForm, (userForm) => userForm.controls.user);
export const selectUserFormFriends = createSelector(selectUserForm, (userForm) => userForm.controls.userFriends);
export const selectUserFormConfig = createSelector(selectUserForm, (userForm) => userForm.controls.config);
export const selectUsersTotal = createSelector(selectUserState, selectTotal);
export const selectUsersAll = createSelector(selectUserState, selectAll);
