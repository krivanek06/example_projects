import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';
import { LovelyForm, LovelyFormFriends } from '../../model/template-driven-forms-example.model';
import { ValidateRepeatedChars, ValidateRepeatedCharsImpl } from '../../model/validations.model';
import { CountrySelectorControlComponent } from '../country-selector-control/country-selector-control.component';
import {
  MatchFieldsDirective,
  ValidateNoNumberDirective,
  ValidateRepeatedCharsImplDirective,
} from './validations.directive';

@Component({
  selector: 'app-template-driven-forms-example',
  templateUrl: './template-driven-forms-example.component.html',
  styleUrls: ['./template-driven-forms-example.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ValidateRepeatedCharsImplDirective,
    ValidateNoNumberDirective,
    MatchFieldsDirective,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    CountrySelectorControlComponent,
  ],
})
export class TemplateDrivenFormsExampleComponent implements OnInit, AfterViewInit {
  @ViewChild('form', { read: NgForm }) ngForm!: NgForm;

  lovelyForm: LovelyForm = {
    name: '',
    dogName: '',
    favoriteCountries: [],
    myFiends: [],
  };

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      const dogControl = this.ngForm.form.get('dogUniqueName') as FormControl;
      dogControl.addValidators(ValidateRepeatedChars()); // SETTING validator
      console.log('Async ngAfterViewInit:', dogControl);
    });

    const dogControl2 = this.ngForm.form.get('dogUniqueName') as FormControl;
    console.log('Sync ngAfterViewInit:', dogControl2);

    this.ngForm.valueChanges
      ?.pipe(
        debounceTime(500),
        map((formData) => [formData['dogUniqueName'], formData['name']] as [string, string]),
        distinctUntilChanged((prev, curr) => prev[0] === curr[0] && prev[1] === curr[1])
      )
      .subscribe(console.log);
  }

  submit() {
    this.ngForm.form.markAllAsTouched();

    if (!this.ngForm.invalid) {
      console.log(this.ngForm.value);
      this.ngForm.resetForm();
    }
  }

  onResetForm() {}

  onDogNameToggleValidators() {
    const dogControl = this.ngForm.form.get('dogUniqueName');

    if (!dogControl) {
      return;
    }

    // check if has validator
    const hasValidator = dogControl.hasValidator(ValidateRepeatedCharsImpl);

    if (hasValidator) {
      console.log('Validator Clear');
      dogControl.clearValidators();
    } else {
      console.log('Validator Add');
      dogControl.addValidators(ValidateRepeatedChars());
    }

    // automatically update UI - if not present, I have to type
    dogControl.updateValueAndValidity();
  }

  onAddFriend() {
    const friend: LovelyFormFriends = {
      name: '',
      favoriteCountry: [],
    };
    this.lovelyForm.myFiends.push(friend);
  }

  onRemoveFriend(i: number) {
    this.lovelyForm.myFiends = this.lovelyForm.myFiends.filter((_, index) => index !== i);
  }

  onFormBLur() {
    console.log('lol');
  }
}
