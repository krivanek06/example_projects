import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-example-form-bad',
	templateUrl: './example-form-bad.component.html',
	styleUrls: ['./example-form-bad.component.scss'],
})
export class ExampleFormBadComponent implements OnInit {
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
			isLocked: [false],
		});
	}

	submit(): void {
		console.log(this.form.value);
		this.name.patchValue(null);
	}

	changeAddItemState(isLocked: boolean, key?: keyof FormGroup): void {
		// would also work like this
		// if (isLocked) {
		//   this.name.disable()
		// } else {
		//   this.name.enable();
		// }

		this.isLocked.patchValue(isLocked);

		// if (key) {
		// 	this.form.get(key)?.patchValue(isLocked);
		// }
	}
}
