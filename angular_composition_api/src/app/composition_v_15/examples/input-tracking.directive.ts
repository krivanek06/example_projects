import { Directive, HostListener, OnInit } from '@angular/core';

@Directive({
	selector: 'appTypingTracking',
	standalone: true,
})
export class TypingTrackingDirective implements OnInit {
	@HostListener('focus', ['$event.target'])
	onFocus(target: any) {
		console.log(target.value);
	}

	@HostListener('input', ['$event.target.value'])
	onInput(value: string) {
		console.log(`%c Tracking input: ${value}`, 'color: #91ea45');
	}

	ngOnInit(): void {
		console.log('Parent init');
	}
}

@Directive({
	selector: 'textarea',
	standalone: true,
	hostDirectives: [TypingTrackingDirective],
})
export class InputTrackingDirective implements OnInit {
	ngOnInit(): void {
		console.log('Child init');
	}
}
