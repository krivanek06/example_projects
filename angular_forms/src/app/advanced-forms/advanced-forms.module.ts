import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedFormsComponent } from './advanced-forms.component';
import { CountrySelectorControlComponent } from './country-selector-control/country-selector-control.component';
import { ReactiveFormsExampleComponent } from './reactive-forms-example/reactive-forms-example.component';
import { TemplateDrivenFormsExampleComponent } from './template-driven-forms-example/template-driven-forms-example.component';
import {
	MatchFieldsDirective,
	ValidateNoNumberDirective,
	ValidateRepeatedCharsImplDirective,
} from './template-driven-forms-example/validations.directive';

const routes: Routes = [
	{
		path: '',
		component: AdvancedFormsComponent,
	},
];

@NgModule({
	declarations: [
		AdvancedFormsComponent,
		ReactiveFormsExampleComponent,
		CountrySelectorControlComponent,
		TemplateDrivenFormsExampleComponent,
		ValidateRepeatedCharsImplDirective,
		ValidateNoNumberDirective,
		MatchFieldsDirective,
	],
	imports: [
		CommonModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		RouterModule.forChild(routes),
		ReactiveFormsModule,
		MatButtonModule,
		MatIconModule,
		MatDividerModule,

		FormsModule,
	],
})
export class AdvancedFormsModule {}
