import { Component, Directive, EventEmitter, Host, HostBinding, HostListener, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Directive({
	selector: '[appClickLogging]',
	standalone: true,
})
export class ButtonDirective {
	@Output() clickedEvent = new EventEmitter<void>();
	@Output() mouseEnterEvent = new EventEmitter<void>();

	@Input() loggingName: string = 'Base';

	@HostBinding('attr.data-button-type')
	@Input()
	type: 'success' | 'error' | 'primary' | 'default' = 'default';

	@HostListener('click')
	onClick() {
		console.log(`[Log Base]: ${this.loggingName} ${this.type} button logging`);
		this.clickedEvent.emit();
	}

	@HostListener('mouseenter')
	onMouseenter() {
		this.mouseEnterEvent.emit();
	}
}

// ---------------------------------------------

@Directive({
	selector: '[appClickLoggingEnhanced]',
	standalone: true,
	hostDirectives: [
		{
			directive: ButtonDirective,
			inputs: ['loggingName'],
			outputs: ['mouseEnterEvent'],
		},
	],
})
export class ButtonDirectiveEnhancedDirective {
	constructor(@Host() buttonDirective: ButtonDirective) {
		buttonDirective.type = 'error';
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

// ---------------------------------------------

@Component({
	selector: 'app-test',
	template: `
		<button appClickLoggingEnhanced (mouseEnterEvent)="onMouseEnterEvent()" [loggingName]="testName">
			Logging Component
		</button>
	`,
	imports: [MatButtonModule, ButtonDirectiveEnhancedDirective],
	standalone: true,
})
export class TestComponent {
	testName = 'Test name';

	onMouseEnterEvent(): void {
		console.log('[TestComponent]: mouse enter');
	}
}
