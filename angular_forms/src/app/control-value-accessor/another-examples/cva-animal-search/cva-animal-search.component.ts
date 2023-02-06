import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
import { CVAnimal } from '../model';

@Component({
	selector: 'app-cva-animal-search',
	templateUrl: './cva-animal-search.component.html',
	styleUrls: ['./cva-animal-search.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: CvaAnimalSearchComponent,
			multi: true,
		},
	],
})
export class CvaAnimalSearchComponent implements OnInit, ControlValueAccessor {
	onChange!: (value: CVAnimal[]) => void;
	onTouch!: () => void;
	value: CVAnimal[] | null = null;

	receivedAnimals$!: Observable<CVAnimal[]>;
	private url = 'https://zoo-animal-api.herokuapp.com/animals/rand/5';

	constructor(private http: HttpClient) {}

	ngOnInit(): void {}

	onRandomAnimalsClick(): void {
		this.receivedAnimals$ = this.http.get<CVAnimal[]>(this.url);
	}

	setValue(animal: CVAnimal): void {
		const oldValues = this.value || [];

		// already selected
		if (oldValues.map((v) => v.id).includes(animal.id)) {
			return;
		}

		this.value = [...oldValues, animal];

		// notify parent's form control that value has been changed
		this.onChange(this.value);

		// notify parent's form that form control has been touched
		this.onTouch();
	}

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
}
