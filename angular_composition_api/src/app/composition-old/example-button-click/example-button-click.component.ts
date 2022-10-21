import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
	selector: 'app-example-button-click',
	template: `
		<button mat-raised-button [color]="color" (click)="onClick()">
			<ng-content></ng-content>
		</button>
	`,
})
export class ExampleButtonClickComponent {
	@Output() click: EventEmitter<void> = new EventEmitter<void>();
	@Input() logginText: string = '';
	@Input() color: ThemePalette;

	onClick(): void {
		this.performClickLog();
		this.click.emit();
	}

	private performClickLog(): void {
		const host = window.location.hostname;
		console.log(`%c Component: from ${host}, text: ${this.logginText} `, 'color: #bada55');
	}
}
