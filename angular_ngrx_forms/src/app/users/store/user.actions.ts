import { Action } from '@ngrx/store';
import { User, UserForm } from '../models/user.model';

export enum UserActionTypes {
  CREATE_USER = '[User] create user',
  CREATE_USER_SUCCESS = '[User] create user success',
  CREATE_USER_FAILURE = '[User] create user failure',
  SELECT_USER = '[User] select user',
  ADD_MANY_USERS = '[User] add many users',
  ADD_MANY_USERS_SUCCESS = '[User] add many user success',
}
export class CreateUser implements Action {
  readonly type = UserActionTypes.CREATE_USER;
  constructor(public payload: { userForm: UserForm }) {}
}

export class CreateUserSuccess implements Action {
  readonly type = UserActionTypes.CREATE_USER_SUCCESS;
  constructor(public payload: { user: User }) {}
}

export class CreateUserFailure implements Action {
  readonly type = UserActionTypes.CREATE_USER_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class AddManyUsers implements Action {
  readonly type = UserActionTypes.ADD_MANY_USERS;
  constructor(public payload: { users: User[] }) {}
}

export class AddManyUsersSuccess implements Action {
  readonly type = UserActionTypes.ADD_MANY_USERS_SUCCESS;
  constructor(public payload: { users: User[] }) {}
}

export class SelectUser implements Action {
  readonly type = UserActionTypes.SELECT_USER;
  constructor(public payload: { userId: number }) {}
}

export type UserActions = CreateUser | CreateUserSuccess | AddManyUsersSuccess | AddManyUsers | SelectUser;
