import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User, UserForm } from '../models/user.model';
import { AddManyUsers, CreateUser, SelectUser } from './user.actions';
import {
  selectUserById,
  selectUserForm,
  selectUserFormConfig,
  selectUserFormCreate,
  selectUserState,
  selectUsersTotal,
} from './user.reducers';

@Injectable({
  providedIn: 'root',
})
export class UserStoreFacadeService {
  readonly selectUserState$ = this.store.select(selectUserState);
  readonly selectUserForm$ = this.store.select(selectUserForm);
  readonly selectUserFormCreate$ = this.store.select(selectUserFormCreate);
  readonly selectUserFormConfig$ = this.store.select(selectUserFormConfig);
  readonly selectUsersTotal$ = this.store.select(selectUsersTotal);
  readonly selectUserById$ = (userId: number) => this.store.select(selectUserById(userId));

  constructor(private readonly store: Store) {}

  selectUserAction(userId: number): void {
    this.store.dispatch(new SelectUser({ userId }));
  }

  createUserAction(userForm: UserForm): void {
    this.store.dispatch(new CreateUser({ userForm }));
  }

  AddManyUsersAction(users: User[]): void {
    this.store.dispatch(new AddManyUsers({ users }));
  }
}
