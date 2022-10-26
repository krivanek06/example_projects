import { Component, Directive, Host, HostBinding, HostListener, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Directive({
	selector: '[appClickLogging]',
	standalone: true,
})
export class ButtonDirective {
	@HostBinding('attr.data-button-type')
	@Input()
	type: 'success' | 'error' | 'primary' | 'default' = 'default';

	@HostListener('click', ['$event'])
	onClick() {
		console.log(`[Log Base]: Base ${this.type} button logging`);
	}
}

// ---------------------------------------------

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
	constructor(@Host() buttonDirective: ButtonDirective) {
		buttonDirective.type = 'primary';
	}

	@HostListener('click', ['$event'])
	onClick() {
		console.log('%c [Log Primary]: Primary button logging click event', 'color: #3f51b5');
	}
}

@Component({
	selector: 'app-test',
	template: '<button mat-flat-button color="warn">Logging Component</button>',
	hostDirectives: [
		{
			directive: ButtonDirective,
		},
	],
	imports: [MatButtonModule],
	standalone: true,
})
export class TestComponent {
	constructor(@Host() buttonDirective: ButtonDirective) {
		buttonDirective.type = 'error';
	}
}
