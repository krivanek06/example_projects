import { Component } from '@angular/core';
import { User } from '@ct-test/models';

@Component({
  selector: 'ct-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedUsers: User[] = [];
  title = 'dashboard';

  onUserClick(user: User): void {
    user = { ...user, id: Math.floor(Math.random() * 1000) };
    this.selectedUsers = [...this.selectedUsers, user];
  }

  onUserIndexRemove(index: number): void {
    this.selectedUsers = this.selectedUsers.filter((user, i) => i !== index);
  }
}
