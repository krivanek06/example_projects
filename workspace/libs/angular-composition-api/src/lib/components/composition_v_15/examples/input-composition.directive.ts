import { Component, Directive, forwardRef, inject, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NgControl, ReactiveFormsModule } from '@angular/forms';
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
export class EmptyValueAccessorDirective<T> implements ControlValueAccessor {
  onChange = (value: T) => {};
  onTouched = () => {};
  registerOnChange(fn: (value: T) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: (value: void) => void): void {
    this.onTouched = fn;
  }

  writeValue(value: T): void {}
}

@Component({
  selector: 'app-input-composition',
  template: `
    <mat-form-field>
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

@Component({
  selector: 'app-input-two-composition',
  template: `
    <mat-form-field>
      <mat-label>Add input</mat-label>
      <input matInput placeholder="Ex. Pizza" [formControl]="control" />
    </mat-form-field>
  `,
  imports: [MatInputModule, MatFormFieldModule, ReactiveFormsModule],
  standalone: true,
  hostDirectives: [EmptyValueAccessorDirective],
})
export class InputCompositionTwoComponent implements OnInit {
  control = new FormControl<string>('', { nonNullable: true });

  constructor(private emptyValueAccessorDirective: EmptyValueAccessorDirective<string>) {}

  ngOnInit(): void {
    this.control.valueChanges.subscribe((value) => {
      this.emptyValueAccessorDirective.onChange(value);
    });
  }
}
