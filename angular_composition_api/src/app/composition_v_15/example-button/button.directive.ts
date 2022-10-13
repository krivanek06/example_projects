import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true,
})
export class ButtonDirective {
  @HostBinding('attr.data-button-type')
  @Input()
  type: 'success' | 'error' | 'normal' = 'normal';

  @HostBinding('attr.data-button-size')
  @Input()
  size: 'sm' | 'md' | 'lg' = 'md';
}

@Directive({
  selector: '[appButtonSuccess]',
  standalone: true,
  //host,
})
export class ButtonSuccessDirective {}
