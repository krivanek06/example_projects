import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { User, UserForm } from '../models/user.model';
import { UserStoreFacadeService } from './user-store-facade.service';
import { AddManyUsers, AddManyUsersSuccess, CreateUserSuccess, UserActionTypes } from './user.actions';

@Injectable()
export class UserEffects {
  readonly createUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActionTypes.CREATE_USER),
        concatLatestFrom(() => [this.userStoreFacadeService.selectUsersTotal$]),
        map(([createUserForm, totalUser]) => {
          const form = createUserForm as UserForm;
          const user: User = {
            name: form.name,
            age: form.age,
            id: totalUser,
            gender: form.gender,
            additionalInfo: form.additionalInfo,
            isSelected: false,
          };
          return this.store.dispatch(new CreateUserSuccess({ user }));
        })
      ),
    { dispatch: false }
  );

  readonly addManyUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.ADD_MANY_USERS),
      map((action: AddManyUsers) => new AddManyUsersSuccess({ users: action.payload.users }))
    )
  );

  constructor(private actions$: Actions, private store: Store, private userStoreFacadeService: UserStoreFacadeService) {}
}
