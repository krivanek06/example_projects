import { Component } from '@angular/core';
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
/*
  NOT working
  directive cannot inherit from a component

  Error: NG0903: Directives cannot inherit Components. Directive MatButtonCustom is attempting to extend component MatButton

  import { Platform } from "@angular/cdk/platform";
  import { Directive, ElementRef, inject, NgZone } from "@angular/core";
  import { MatButton } from "@angular/material/button";

*/

import { Platform } from '@angular/cdk/platform';
import { Directive, ElementRef, inject, NgZone } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
	selector: '[appMatButtonCustom]',
	standalone: true,
	template: '',
})
export class MatButtonCustom extends MatButton {
	constructor() {
		const elementRef = inject(ElementRef);
		const platform = inject(Platform);
		const ngZone = inject(NgZone);
		super(elementRef, platform, ngZone);
	}
}
@Directive({
	selector: '[appButton]',
	standalone: true,
	hostDirectives: [
		{
			directive: MatButtonCustom,
		},
	],
})
export class MatButtonCustomDirective {}
