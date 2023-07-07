import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
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
