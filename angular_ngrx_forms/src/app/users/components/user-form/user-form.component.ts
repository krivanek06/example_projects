import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArrayState, FormGroupState } from 'ngrx-forms';
import { Observable } from 'rxjs';
import { UserForm, UserFormConfig, UserFormFriend } from '../../models/user.model';
import { UserStoreFacadeService } from '../../store/user-store-facade.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFormComponent implements OnInit {
  userForm$!: Observable<FormGroupState<UserForm>>;
  userFormConfig$!: Observable<FormGroupState<UserFormConfig>>;
  userFormFriends$!: Observable<FormGroupState<FormArrayState<UserFormFriend>>>;

  constructor(private userStoreFacadeService: UserStoreFacadeService) {}

  ngOnInit(): void {
    this.userForm$ = this.userStoreFacadeService.selectUserFormCreate$;
    this.userFormConfig$ = this.userStoreFacadeService.selectUserFormConfig$;
    this.userFormFriends$ = this.userStoreFacadeService.selectUserFormFriends;

    this.userFormFriends$.subscribe(console.log);
  }

  onSubmit(userForm: FormGroupState<UserForm>): void {
    this.userStoreFacadeService.markFormAsTouched(userForm);
    this.userStoreFacadeService.createUserAction(userForm);
  }

  onAddFriendControl(id: string): void {
    this.userStoreFacadeService.addFriendFormArrayControl(id);
  }
}
