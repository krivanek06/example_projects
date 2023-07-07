import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { User, createManyUsers } from './models/user.model';
import { UserStoreFacadeService } from './store/user-store-facade.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, UserFormComponent, UserInfoComponent],
})
export class UsersComponent implements OnInit {
  selectUsersAll$ = this.userStoreFacadeService.selectUsersAll$;
  constructor(private userStoreFacadeService: UserStoreFacadeService) {}

  ngOnInit(): void {
    this.userStoreFacadeService.addManyUsersAction(createManyUsers());
  }

  onUserSelect(user: User): void {
    this.userStoreFacadeService.selectUserAction(user);
  }
}
