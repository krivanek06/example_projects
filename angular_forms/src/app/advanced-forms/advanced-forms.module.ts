import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedFormsComponent } from './advanced-forms.component';
import { ReactiveFormsExampleComponent } from './reactive-forms-example/reactive-forms-example.component';
import { CountrySelectorControlComponent } from './reactive-forms-example/country-selector-control/country-selector-control.component';

const routes: Routes = [
	{
		path: '',
		component: AdvancedFormsComponent,
	},
];

@NgModule({
	declarations: [AdvancedFormsComponent, ReactiveFormsExampleComponent, CountrySelectorControlComponent],
	imports: [
		CommonModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		RouterModule.forChild(routes),
		FormsModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatIconModule,
	],
})
export class AdvancedFormsModule {}
