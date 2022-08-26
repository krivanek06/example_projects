import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoComponent implements OnInit {
  @Output() selectUser: EventEmitter<User> = new EventEmitter<User>();
  @Input() user!: User;
  constructor() {}

  ngOnInit(): void {}

  onUseSelect(): void {
    this.selectUser.emit(this.user);
  }
}
