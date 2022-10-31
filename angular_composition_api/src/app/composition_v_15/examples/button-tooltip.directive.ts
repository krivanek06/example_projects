import { CdkDrag } from '@angular/cdk/drag-drop';
import { Directive } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Directive({
	selector: '[appButtonTooltip]',
	standalone: true,
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
