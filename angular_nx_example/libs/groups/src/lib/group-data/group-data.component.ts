import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '@ct-test/models';
import { ButtonWrapperDirective } from '@ct-test/ui-components';
@Component({
  selector: 'ct-test-group-data',
  templateUrl: './group-data.component.html',
  styleUrls: ['./group-data.component.scss'],
})
export class GroupDataComponent extends ButtonWrapperDirective<User> implements OnInit {
  @Output() userIndexRemoveEmitter: EventEmitter<number> = new EventEmitter<number>();
  @Input() selectedUsers: User[] = [];

  ngOnInit(): void {}

  onUserRemove(index: number): void {
    this.userIndexRemoveEmitter.emit(index);
  }
}
