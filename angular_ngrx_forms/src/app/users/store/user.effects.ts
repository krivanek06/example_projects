import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { ClearAsyncErrorAction, SetAsyncErrorAction, SetValueAction, StartAsyncValidationAction } from 'ngrx-forms';
import { filter, from, map, startWith, switchMap } from 'rxjs';
import { User, UserGender } from '../models/user.model';
import { isValidUSNumber } from '../models/user.validation';
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
      ofType<CreateUser>(UserActionTypes.CREATE_USER),
      concatLatestFrom(() => [this.userStoreFacadeService.selectUsersTotal$]),
      map(([createUserAction, totalUser]) => {
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

  readonly validatePhoneNumber$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SetValueAction.TYPE),
      filter((formControlUpdate: SetValueAction<string>) => formControlUpdate.controlId === 'user_form_id.user.phone'),
      switchMap((formControlUpdate) => {
        const errorKey = 'validPhone';
        return from(isValidUSNumber(formControlUpdate.value)).pipe(
          map((validPhone) => {
            return validPhone
              ? new ClearAsyncErrorAction(formControlUpdate.controlId, errorKey)
              : new SetAsyncErrorAction(formControlUpdate.controlId, errorKey, true);
          }),
          startWith(new StartAsyncValidationAction(formControlUpdate.controlId, errorKey))
        );
      })
    )
  );

  readonly addManyUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.ADD_MANY_USERS),
      map((action: AddManyUsers) => new AddManyUsersSuccess({ users: action.payload.users }))
    )
  );

  // readonly addUserFriendControl$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(UserActionTypes.REMOVE_USER_FRIEND_CONTROL),
  //     map(
  //       () =>
  //         new AddArrayControlAction<UserFormFriend>(USER_FORM_FRIEND_ID, {
  //           fistname: 'placeholder',
  //           lastname: '',
  //         })
  //     )
  //   )
  // );

  constructor(private actions$: Actions, private userStoreFacadeService: UserStoreFacadeService) {}
}
