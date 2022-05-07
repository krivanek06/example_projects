import { Component, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/*
  NG_VALUE_ACCESSOR is required to attach formControlName for this component.
  NG_VALUE_ACCESSOR then checks what class to use (useExisting), which is LockedInputGoodComponent.
  multi === true we tell angular that there can be multiple instances of LockedInputGoodComponent

  ControlValueAccessor
*/
@Component({
	selector: 'app-locked-input-good',
	templateUrl: './locked-input-good.component.html',
	styleUrls: ['./locked-input-good.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: LockedInputGoodComponent,
			multi: true,
		},
	],
})
export class LockedInputGoodComponent implements OnInit {
	value = false;
	disabled = false;
	onChange!: (value: boolean) => void;
	onTouch!: () => void;

	constructor() {}

	ngOnInit(): void {}

	setValue(): void {
		// not needed because of pointer-events: none;
		// if (this.disabled) {
		//   return;
		// }

		this.value = !this.value;

		// notify parent's form control that value has been changed
		this.onChange(this.value);

		// notify parent's form that form control has been touched
		this.onTouch();
	}

	// Following methods are required by ControlValueAccessor
	// -----------------------------------------------------

	/*
    method is trigged when we change the value in form control
    we receive notification form parent
  */
	writeValue(obj: any): void {
		console.log(`LockedInputGoodComponent -> writeValue -> ${obj}`);
		this.value = obj;
	}

	/*
    method to notify parent that the value (disabled state) has been changed
  */
	registerOnChange(fn: any): void {
		console.log(`LockedInputGoodComponent -> registerOnChange`);
		this.onChange = fn;
	}

	/*
    method to notify parent that form control has been touched
  */
	registerOnTouched(fn: any): void {
		console.log(`LockedInputGoodComponent -> registerOnTouched`);
		this.onTouch = fn;
	}

	/*
    (optional) method to disable this form control
  */
	setDisabledState(isDisabled: boolean): void {
		console.log(`LockedInputGoodComponent -> setDisabledState -> ${isDisabled}`);
		this.disabled = isDisabled;
	}
}
