import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { CVAnimal } from './model';

@Component({
	selector: 'app-another-examples',
	templateUrl: './another-examples.component.html',
	styleUrls: ['./another-examples.component.scss'],
})
export class AnotherExamplesComponent implements OnInit {
	form!: FormGroup;

	get animals(): AbstractControl {
		return this.form.get('animals') as AbstractControl;
	}

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.form = this.fb.group({
			country: [],
			rating: [2],
			animals: [],
		});
		this.form.valueChanges.subscribe(console.log);
	}

	onAnimalRemove(animal: CVAnimal): void {
		const currentAnimals = this.animals.value as CVAnimal[];
		const filteredOut = currentAnimals.filter((a) => a.id !== animal.id);
		this.animals.patchValue(filteredOut);
	}
}
