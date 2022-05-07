import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

//example https://blog.sreyaj.dev/custom-form-controls-controlvalueaccessor-in-angular
@Component({
  selector: 'app-cva-flag-select',
  templateUrl: './cva-flag-select.component.html',
  styleUrls: ['./cva-flag-select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CvaFlagSelectComponent,
    multi: true
  }]
})
export class CvaFlagSelectComponent implements OnInit, ControlValueAccessor {

  countries = [
    { code: 'IN', name: 'India' },
    { code: 'US', name: 'United States' },
    { code: 'GB-ENG', name: 'England' },
    { code: 'NL', name: 'Netherlands' },
  ];
  selected!: string;
  disabled = false;
  private onTouched!: Function;
  private onChanged!: Function;

  ngOnInit(): void {

  }

  selectCountry(code: string) {
    this.onTouched(); // <-- mark as touched
    this.selected = code;
    this.onChanged(code); // <-- call function to let know of a change
  }

  writeValue(value: string): void {
    this.selected = value ?? 'IN';
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn; // <-- save the function
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn; // <-- save the function
  }
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
