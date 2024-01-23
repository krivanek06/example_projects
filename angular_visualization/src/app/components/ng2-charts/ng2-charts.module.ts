import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { Ng2ChartsComponent } from './ng2-charts.component';

@NgModule({
	declarations: [Ng2ChartsComponent],
	imports: [CommonModule, NgChartsModule],
	exports: [Ng2ChartsComponent],
})
export class Ng2ChartsModule {}
