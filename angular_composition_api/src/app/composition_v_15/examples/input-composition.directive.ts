import { Component, Directive, forwardRef, inject, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Directive({
	selector: 'appEmptyValueAccessor',
	standalone: true,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => EmptyValueAccessorDirective),
			multi: true,
		},
	],
})
export class EmptyValueAccessorDirective implements ControlValueAccessor {
	onChange = (value: unknown) => {};
	onTouched = () => {};
	registerOnChange(fn: (value: unknown) => void): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: (value: void) => void): void {
		this.onTouched = fn;
	}

	writeValue(value: unknown): void {}
}

@Component({
	selector: 'app-input-composition',
	template: `
		<mat-form-field appearance="outline">
			<mat-label>Add input</mat-label>
			<input matInput placeholder="Ex. Pizza" [formControl]="control" />
		</mat-form-field>
	`,
	imports: [MatInputModule, MatFormFieldModule, ReactiveFormsModule],
	standalone: true,
	hostDirectives: [EmptyValueAccessorDirective],
})
export class InputCompositionComponent implements OnInit {
	private controlDirective = inject(NgControl, { self: true });
	control!: FormControl;

	ngOnInit(): void {
		// access parent form control
		this.control = this.controlDirective.control as FormControl;
	}
}
