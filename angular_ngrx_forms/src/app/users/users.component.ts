import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { createManyUsers } from './models/user.model';
import { UserStoreFacadeService } from './store/user-store-facade.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  constructor(private userStoreFacadeService: UserStoreFacadeService) {}

  ngOnInit(): void {
    this.userStoreFacadeService.selectUserState$.subscribe(console.log);
    this.userStoreFacadeService.selectUserForm$.subscribe(console.log);
    this.userStoreFacadeService.AddManyUsersAction(createManyUsers());
  }
}
