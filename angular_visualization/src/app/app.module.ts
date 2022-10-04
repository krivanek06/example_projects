import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleChartsModule } from 'angular-google-charts';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgChartsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MaterialModule,
		// https://www.npmjs.com/package/ng2-charts
		NgChartsModule,
		// https://www.npmjs.com/package/ngx-echarts
		NgxEchartsModule.forRoot({
			/**
			 * This will import all modules from echarts.
			 * If you only need custom modules,
			 * please refer to [Custom Build] section.
			 */
			echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
		}),
		// https://www.npmjs.com/package/highcharts-angular
		HighchartsChartModule,
		// https://www.npmjs.com/package/angular-google-charts
		GoogleChartsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
