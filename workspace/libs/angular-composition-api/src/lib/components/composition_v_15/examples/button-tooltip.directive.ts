import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

// THESE EXAMPLES DOES NOT WORK BECAUSE MATERIAL IS NOT STANDALONE
@Component({
  selector: '[appButtonTooltipComponent]',
  standalone: true,
  template: ` <button cdkDrag matTooltip="Info" [matTooltipHideDelay]="400"></button> `,
  hostDirectives: [
    {
      directive: MatTooltip,
      inputs: ['matTooltip: tooltip', 'matTooltipHideDelay: tooltipHideDelay'],
    },
    {
      directive: CdkDrag,
      inputs: ['cdkDragDisabled: dragDisabled'],
    },
  ],
})
export class ButtonTooltipDirective {}

@Component({
  selector: '[appButtonTooltipDirective]',
  standalone: true,
  template: ``,
  hostDirectives: [
    {
      directive: MatTooltip,
      inputs: ['matTooltip: tooltip', 'matTooltipHideDelay: tooltipHideDelay'],
    },
    {
      directive: CdkDrag,
      inputs: ['cdkDragDisabled: dragDisabled'],
    },
  ],
})
export class ButtonTooltipComponent {}
