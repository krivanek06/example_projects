import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Country, getData } from 'country-list';

@Component({
  selector: 'app-country-selector-control',
  templateUrl: './country-selector-control.component.html',
  styleUrls: ['./country-selector-control.component.scss'],
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CountrySelectorControlComponent,
      multi: true,
    },
  ],
})
export class CountrySelectorControlComponent implements ControlValueAccessor, OnInit {
  countryControl = new FormControl<Country[]>([], { nonNullable: true, validators: [Validators.required] });

  listedCountries = getData();

  onChange: (value: Country[]) => void = () => {};
  onTouched = () => {};

  ngOnInit() {
    this.countryControl.valueChanges.subscribe((res) => this.onChange(res));
  }

  /*
    parent component adds value to child
  */
  writeValue(countries: Country[]): void {
    this.countryControl.patchValue(countries, { emitEvent: false, onlySelf: true });
    this.countryControl.markAsUntouched();
    this.countryControl.setErrors(null);
  }

  /*
    method to notify parent that the value (disabled state) has been changed
  */
  registerOnChange(fn: CountrySelectorControlComponent['onChange']): void {
    this.onChange = fn;
  }

  /*
    method to notify parent that form control has been touched
  */
  registerOnTouched(fn: CountrySelectorControlComponent['onTouched']): void {
    this.onTouched = fn;
  }
}
