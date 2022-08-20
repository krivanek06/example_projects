import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { createFormStateReducerWithUpdate, FormGroupState, updateGroup, validate } from 'ngrx-forms';
import { greaterThanOrEqualTo, minLength, required } from 'ngrx-forms/validation';
import { initialUserFormState, User, UserForm, UserFormConfig, UserFormState, USER_FEATURE_KEY } from '../models/user.model';
import { UserActions, UserActionTypes } from './user.actions';

const userAdapter: EntityAdapter<User> = createEntityAdapter<User>({
  sortComparer: (a: User, b: User) => b.id - a.id,
});

export const userFormGroupReducer = createFormStateReducerWithUpdate<UserFormState>(
  updateGroup<UserFormState>({
    user: updateGroup<UserForm>({
      name: validate(required),
      age: validate(required),
      gender: validate(required),
      additionalInfo: validate([minLength(4)]),
    }),
    config: updateGroup<UserFormConfig>({
      minAge: validate([required, greaterThanOrEqualTo(0)]),
    }),
  })
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

    default:
      return state;
  }
};

export function reducer(state: UserStoreState | undefined, action: UserActions) {
  return userReducer(state, action);
}

export const selectUserState = createFeatureSelector<UserStoreState>(USER_FEATURE_KEY);
export const { selectIds, selectEntities, selectAll, selectTotal } = userAdapter.getSelectors();

export const selectUserById = (userId: number) => createSelector(selectUserState, (userState) => userState.entities[userId]);
export const selectUserForm = createSelector(selectUserState, (userState) => userState.userForm);
export const selectUsersTotal = createSelector(selectUserState, selectTotal);
