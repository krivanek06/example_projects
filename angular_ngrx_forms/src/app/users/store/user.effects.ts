import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import { User, UserGender } from '../models/user.model';
import { UserStoreFacadeService } from './user-store-facade.service';
import {
  AddManyUsers,
  AddManyUsersSuccess,
  CreateUser,
  CreateUserFailure,
  CreateUserSuccess,
  UserActionTypes,
} from './user.actions';

@Injectable()
export class UserEffects {
  readonly createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.CREATE_USER),
      concatLatestFrom(() => [this.userStoreFacadeService.selectUsersTotal$]),
      map(([createUserAction, totalUser]: [CreateUser, number]) => {
        const createUserForm = createUserAction.payload.userForm;
        if (createUserForm.isInvalid) {
          return new CreateUserFailure({ error: 'Form is invalid' });
        }
        const form = createUserForm.controls;
        const user: User = {
          name: form.name.value,
          age: form.age.value,
          id: totalUser,
          gender: form.gender.value as UserGender,
          additionalInfo: form.additionalInfo.value.value,
          isSelected: false,
        };
        return new CreateUserSuccess({ user });
      })
    )
  );

  readonly addManyUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.ADD_MANY_USERS),
      map((action: AddManyUsers) => new AddManyUsersSuccess({ users: action.payload.users }))
    )
  );

  constructor(private actions$: Actions, private userStoreFacadeService: UserStoreFacadeService) {}
}
