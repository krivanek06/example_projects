import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FormGroupState, NgrxFormsModule } from 'ngrx-forms';
import { UserForm } from '../../models/user.model';
import { UserStoreFacadeService } from '../../store/user-store-facade.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    NgrxFormsModule,
    MatRadioModule,
  ],
})
export class UserFormComponent implements OnInit {
  userForm$ = this.userStoreFacadeService.selectUserFormCreate$;
  userFormConfig$ = this.userStoreFacadeService.selectUserFormConfig$;
  userFormFriends$ = this.userStoreFacadeService.selectUserFormFriends;

  constructor(private userStoreFacadeService: UserStoreFacadeService) {}

  ngOnInit(): void {
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
