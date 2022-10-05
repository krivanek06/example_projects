import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { barChartData, barChartLegend, barChartOptions } from './models/ng2-charts-bar-chart.model';
import { doughnutChartData, doughnutChartLegend, doughnutChartOptions } from './models/ng2-charts-doughnut-chart.model';
import { lineChartData, lineChartLegend, lineChartOptions } from './models/ng2-charts-line-chart.model';
import { pieChartData, pieChartData2, pieChartLegend, pieChartOptions } from './models/ng2-charts-pie-chart.model';
import { scatterChartData, scatterChartLegend, scatterChartOptions } from './models/ng2-charts-scatter-chart.model';

@Component({
	selector: 'app-ng2-charts',
	templateUrl: './ng2-charts.component.html',
	styleUrls: ['./ng2-charts.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Ng2ChartsComponent implements OnInit {
	lineChart = {
		lineChartData: lineChartData,
		lineChartOptions: lineChartOptions,
		lineChartLegend: lineChartLegend,
	};

	barChart = {
		barChartData: barChartData,
		barChartOptions: barChartOptions,
		barChartLegend: barChartLegend,
	};

	pieChart = {
		pieChartData: pieChartData,
		pieChartData2: pieChartData2,
		pieChartOptions: pieChartOptions,
		pieChartLegend: pieChartLegend,
	};

	doughnutChart = {
		doughnutChartData: doughnutChartData,
		doughnutChartOptions: doughnutChartOptions,
		doughnutChartLegend: doughnutChartLegend,
	};

	scatter = {
		scatterChartData: scatterChartData,
		scatterChartOptions: scatterChartOptions,
		scatterChartLegend: scatterChartLegend,
	};

	constructor() {}

	ngOnInit(): void {}
}
