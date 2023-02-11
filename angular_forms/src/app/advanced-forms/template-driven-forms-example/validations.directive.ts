import { Directive, forwardRef, Input } from '@angular/core';
import {
	AbstractControl,
	NgModel,
	NG_ASYNC_VALIDATORS,
	NG_VALIDATORS,
	ValidationErrors,
	Validator,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { ValidateNoNumberImpl, ValidateRepeatedCharsImpl } from '../model/validations.model';

@Directive({
	selector: '[appValidateCharacter]',
	providers: [
		{
			provide: NG_VALIDATORS,
			useExisting: forwardRef(() => ValidateRepeatedCharsImplDirective),
			multi: true,
		},
	],
})
export class ValidateRepeatedCharsImplDirective implements Validator {
	validate(control: AbstractControl): ValidationErrors | null {
		return ValidateRepeatedCharsImpl(control);
	}
}

// ------------------------------------------------------

@Directive({
	selector: '[appValidateNoNumber]',
	providers: [
		{
			provide: NG_ASYNC_VALIDATORS,
			useExisting: forwardRef(() => ValidateNoNumberDirective),
			multi: true,
		},
	],
})
export class ValidateNoNumberDirective implements Validator {
	validate(control: AbstractControl): Observable<ValidationErrors | null> {
		return ValidateNoNumberImpl(control);
	}
}

// ------------------------------------------------------

@Directive({
	selector: '[appMatchFields]',
	providers: [
		{
			provide: NG_VALIDATORS,
			useExisting: MatchFieldsDirective,
			multi: true,
		},
	],
})
export class MatchFieldsDirective implements Validator {
	@Input('appMatchFields') matchFields: NgModel[] = [];

	validate(controls: AbstractControl): ValidationErrors | null {
		const [control1, control2] = this.matchFields;

		if (control1?.value === control2?.value) {
			return { sameName: true };
		}
		return null;
	}
}
