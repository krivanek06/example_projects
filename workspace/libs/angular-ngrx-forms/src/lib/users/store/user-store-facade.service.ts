import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddArrayControlAction, FormGroupState, MarkAsTouchedAction } from 'ngrx-forms';
import { User, UserForm, UserFormFriend } from '../models/user.model';
import { AddManyUsers, CreateUser, SelectUser } from './user.actions';
import {
  selectUserById,
  selectUserForm,
  selectUserFormConfig,
  selectUserFormCreate,
  selectUserFormFriends,
  selectUsersAll,
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
  readonly selectUserFormFriends = this.store.select(selectUserFormFriends);
  readonly selectUserFormConfig$ = this.store.select(selectUserFormConfig);
  readonly selectUsersTotal$ = this.store.select(selectUsersTotal);
  readonly selectUsersAll$ = this.store.select(selectUsersAll);
  readonly selectUserById$ = (userId: number) => this.store.select(selectUserById(userId));

  constructor(private readonly store: Store) {}

  selectUserAction({ id }: User): void {
    this.store.dispatch(new SelectUser({ userId: id }));
  }

  createUserAction(userForm: FormGroupState<UserForm>): void {
    this.store.dispatch(new CreateUser({ userForm }));
  }

  addManyUsersAction(users: User[]): void {
    this.store.dispatch(new AddManyUsers({ users }));
  }

  markFormAsTouched(userForm: FormGroupState<UserForm>): void {
    this.store.dispatch(new MarkAsTouchedAction(userForm.id));
  }

  addFriendFormArrayControl(id: string): void {
    // id === 'user_form_id.userFriends.controls'
    this.store.dispatch(
      new AddArrayControlAction<UserFormFriend>(
        id,
        {
          fistname: 'placeholder',
          lastname: '',
        },
        0
      )
    );
  }
}
