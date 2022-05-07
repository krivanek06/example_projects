import { Component } from '@angular/core';
import { allTestUsers, User } from '@ct-test/models';
import { ButtonWrapperDirective } from '@ct-test/ui-components';

@Component({
  selector: 'ct-test-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.scss'],
})
export class AllUserComponent extends ButtonWrapperDirective<User> {
  allTestUsers = allTestUsers;
}
