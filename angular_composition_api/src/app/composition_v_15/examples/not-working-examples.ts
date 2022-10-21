// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
/*
  NOT working
  directive cannot inherit from a component

  Error: NG0903: Directives cannot inherit Components. Directive MatButtonCustom is attempting to extend component MatButton

@Directive({
	selector: '[appMatButtonCustom]',
	standalone: true,
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

*/
