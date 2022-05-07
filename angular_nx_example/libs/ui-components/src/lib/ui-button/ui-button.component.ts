import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ct-test-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss'],
})
export class UiButtonComponent implements OnInit {
  @Output() clickEmitter: EventEmitter<void> = new EventEmitter<void>();

  @Input() buttonType: 'add' | 'remove' = 'add';

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.clickEmitter.emit();
  }
}
