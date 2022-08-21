import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { createManyUsers, User } from './models/user.model';
import { UserStoreFacadeService } from './store/user-store-facade.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  selectUsersAll$!: Observable<User[]>;
  constructor(private userStoreFacadeService: UserStoreFacadeService) {}

  ngOnInit(): void {
    this.selectUsersAll$ = this.userStoreFacadeService.selectUsersAll$;
    this.userStoreFacadeService.addManyUsersAction(createManyUsers());
  }

  onUserSelect(user: User): void {
    this.userStoreFacadeService.selectUserAction(user);
  }
}
