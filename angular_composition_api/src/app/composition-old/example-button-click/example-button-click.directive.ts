import { Directive, HostListener, Input } from '@angular/core';

@Directive({
	selector: `button`,
})
export class ExampleButtonClickDirective {
	@Input() logginText: string = '';

	constructor() {}

	@HostListener('click')
	onClick(): void {
		const host = window.location.hostname;
		console.log(`%c Directive: from ${host}, text: ${this.logginText} `, 'color: #bada55');
	}
}
