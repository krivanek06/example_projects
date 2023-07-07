import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Country, getData } from 'country-list';
import { ValidateNoNumber, ValidateRepeatedChars, ValidateRepeatedCharsImpl } from '../../model/validations.model';
import { CountrySelectorControlComponent } from '../country-selector-control/country-selector-control.component';

@Component({
  selector: 'app-reactive-forms-example',
  templateUrl: './reactive-forms-example.component.html',
  styleUrls: ['./reactive-forms-example.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    CountrySelectorControlComponent,
  ],
})
export class ReactiveFormsExampleComponent implements OnInit {
  readonly form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    dogName: new FormControl('', {
      nonNullable: true,
      validators: [ValidateRepeatedChars(), Validators.maxLength(10), Validators.minLength(3)],
      asyncValidators: [ValidateNoNumber()],
    }),
    favoriteCountries: new FormControl<Country[]>([], {
      validators: [Validators.required],
    }),
    myFiends: new FormArray<
      FormGroup<{
        name: FormControl<string>;
        favoriteCountry: FormControl<Country | null>;
      }>
    >([]),
  });

  // list of displayed countries
  listedCountries = getData();

  ngOnInit() {
    this.form.controls.favoriteCountries.valueChanges.subscribe((c) => console.log(`You have ${c?.length} countries`));
  }

  submit() {
    this.form.markAllAsTouched();

    if (!this.form.invalid) {
      console.log('submit', this.form.value);

      this.form.reset();
      this.form.controls.myFiends.clear();
      this.form.controls.name.setErrors(null);
      this.form.controls.favoriteCountries.setErrors(null);
      this.form.markAsUntouched();
    }
  }

  onResetForm() {
    this.form.reset();
  }

  onDogNameToggleValidators() {
    const hasValidator = this.form.controls.dogName.hasValidator(ValidateRepeatedCharsImpl);
    if (hasValidator) {
      this.form.controls.dogName.clearValidators();
    } else {
      this.form.controls.dogName.addValidators([
        ValidateRepeatedChars(),
        Validators.maxLength(10),
        Validators.minLength(3),
      ]);
    }

    // automatically update UI - if not present, I have to type
    this.form.controls.dogName.updateValueAndValidity();
  }

  onAddFriend() {
    const group = new FormGroup({
      name: new FormControl(),
      favoriteCountry: new FormControl<Country | null>(null),
    });
    this.form.controls.myFiends.push(group);
  }

  onRemoveFriend(i: number) {
    this.form.controls.myFiends.removeAt(i);
  }
}
