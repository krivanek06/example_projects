import { Directive, HostBinding, HostListener, Input } from '@angular/core';

// base directive, not working until it is not extended
@Directive({
	selector: 'button[undefined]',
	standalone: true,
})
export class ButtonDirective {
	@HostBinding('attr.data-button-type')
	@Input()
	type: 'success' | 'error' | 'primary' = 'primary';

	@HostListener('click', ['$event'])
	onClick() {
		console.log(`[Log Base]: Base ${this.type} button logging`);
	}
}

// directive for accent mat-button
@Directive({
	selector: 'button[color="accent"]',
	standalone: true,
	hostDirectives: [
		{
			directive: ButtonDirective,
		},
	],
})
export class ButtonSuccessDirective {
	constructor(buttonDirective: ButtonDirective) {
		buttonDirective.type = 'success';
	}

	@HostListener('click', ['$event'])
	onClick() {
		console.log('%c [Log Success]: Success button logging click event', 'color: #ff4081');
	}
}

// directive for primary mat-button
@Directive({
	selector: 'button[color="primary"]',
	standalone: true,
	hostDirectives: [
		{
			directive: ButtonDirective,
		},
	],
})
export class ButtonPrimaryDirective {
	constructor(buttonDirective: ButtonDirective) {
		buttonDirective.type = 'primary';
	}

	@HostListener('click', ['$event'])
	onClick() {
		console.log('%c [Log Primary]: Primary button logging click event', 'color: #3f51b5');
	}
}
