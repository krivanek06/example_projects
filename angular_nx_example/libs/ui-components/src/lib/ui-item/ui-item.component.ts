import { Component, Input, OnInit } from '@angular/core';
import { toUpper as _toUpper } from 'lodash';
import { ButtonWrapperDirective } from '../button-wrapper.directive';
@Component({
  selector: 'ct-test-ui-item',
  templateUrl: './ui-item.component.html',
  styleUrls: ['./ui-item.component.scss'],
})
export class UiItemComponent extends ButtonWrapperDirective<void> implements OnInit {
  @Input() displayText!: string;
  @Input() showRemoveButton = false;
  @Input() showAddButton = false;

  ngOnInit(): void {
    // lodash
    console.log(_toUpper('this is big'));
  }
}
