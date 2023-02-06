import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-example-form-good',
	templateUrl: './example-form-good.component.html',
	styleUrls: ['./example-form-good.component.scss'],
})
export class ExampleFormGoodComponent implements OnInit {
	form!: FormGroup;

	constructor(private fb: FormBuilder) {}

	get name(): AbstractControl {
		return this.form.get('name') as AbstractControl;
	}

	get isLocked(): AbstractControl {
		return this.form.get('isLocked') as AbstractControl;
	}

	ngOnInit(): void {
		this.form = this.fb.group({
			name: [null],
			isLocked: [{ value: false, disabled: false }],
		});
	}

	submit(): void {
		console.log(this.form.value);
		this.name.patchValue(null);
	}
}
