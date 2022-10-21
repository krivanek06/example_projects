import { Platform } from '@angular/cdk/platform';
import { Component, ElementRef, inject, NgZone } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'app-composition-mat-button',
	template: ` <button mat-flat-button>Button text</button> `,
	styles: [],
	imports: [MatButtonModule],
	standalone: true,
})
export class CompositionMatButtonComponent extends MatButton {
	constructor() {
		const elementRef = inject(ElementRef);
		const platform = inject(Platform);
		const ngZone = inject(NgZone);
		super(elementRef, platform, ngZone);
	}
}
