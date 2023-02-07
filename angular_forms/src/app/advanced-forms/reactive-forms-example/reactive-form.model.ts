import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';

// SYNC VALIDATOR

export const ValidateRepeatedChars = (): ValidatorFn => ValidateRepeatedCharsImpl;

export const ValidateRepeatedCharsImpl = (control: AbstractControl): ValidationErrors | null => {
	const characterMatching = /(.)\1+/;
	const value = String(control.value);

	if (value.match(characterMatching)) {
		return { repeatingCharts: true };
	}
	return null;
};

// ASYNC VALIDATOR

export const ValidateNoNumber = (): AsyncValidatorFn => ValidateNoNumberImpl;

export const ValidateNoNumberImpl = (control: AbstractControl): Observable<ValidationErrors | null> => {
	const characterMatching = /\d/;
	const value = String(control.value);

	if (value.match(characterMatching)) {
		return of({ containsNumber: true });
	}
	return of(null);
};
