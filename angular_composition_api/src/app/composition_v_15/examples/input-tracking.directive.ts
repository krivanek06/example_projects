import { Directive, HostListener } from '@angular/core';

@Directive({
	selector: 'appTypingTracking',
	standalone: true,
})
export class TypingTrackingDirective {
	@HostListener('focus', ['$event.target'])
	onFocus(target: any) {
		console.log(target.value);
	}

	@HostListener('input', ['$event.target.value'])
	onInput(value: string) {
		console.log(`%c Tracking input: ${value}`, 'color: #91ea45');
	}
}

@Directive({
	selector: 'textarea',
	standalone: true,
	hostDirectives: [
		{
			directive: TypingTrackingDirective,
		},
	],
})
export class InputTrackingDirective {}
