import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared';
import { AnotherExamplesComponent } from './another-examples/another-examples.component';
import { CvaFlagSelectComponent } from './another-examples/cva-flag-select/cva-flag-select.component';
import { CvaRatingComponent } from './another-examples/cva-rating/cva-rating.component';
import { ExampleFormBadComponent } from './bad-approach/example-form-bad/example-form-bad.component';
import { LockedInputBadComponent } from './bad-approach/locked-input-bad/locked-input-bad.component';
import { ControlValueAccessorComponent } from './control-value-accessor.component';
import { ExampleFormGoodComponent } from './good-approach/example-form-good/example-form-good.component';
import { LockedInputGoodComponent } from './good-approach/locked-input-good/locked-input-good.component';
import { CvaAnimalSearchComponent } from './another-examples/cva-animal-search/cva-animal-search.component';
import { AnimalDisplayComponent } from './another-examples/animal-display/animal-display.component';

const routes: Routes = [
	{
		path: '',
		component: ControlValueAccessorComponent,
	},
];

@NgModule({
	declarations: [
		LockedInputBadComponent,
		ExampleFormBadComponent,
		ExampleFormGoodComponent,
		LockedInputGoodComponent,
		ControlValueAccessorComponent,
		CvaFlagSelectComponent,
		AnotherExamplesComponent,
		CvaRatingComponent,
  CvaAnimalSearchComponent,
  AnimalDisplayComponent,
	],
	imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ControlValueAccessorModule {}
