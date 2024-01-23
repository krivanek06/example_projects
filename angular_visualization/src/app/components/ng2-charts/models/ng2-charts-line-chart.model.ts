import { ChartConfiguration, ChartOptions } from 'chart.js';
import { INFLATION_CA, INFLATION_EU, INFLATION_TIMESTAMP_DATES, INFLATION_UK, INFLATION_US } from '../../../models';

export const lineChartData: ChartConfiguration<'line'>['data'] = {
	labels: INFLATION_TIMESTAMP_DATES,
	datasets: [
		{
			data: INFLATION_US,
			label: 'Inflation US',
			tension: 0.1,
			borderColor: 'black',
			backgroundColor: 'rgba(25,23,0,0.3)',
		},
		{
			data: INFLATION_CA,
			label: 'Inflation CA',
			tension: 0.1,
			borderColor: 'black',
		},
		{
			data: INFLATION_EU,
			label: 'Inflation EU',
			hidden: true,
			tension: 0.1,
			borderColor: 'black',
		},
		{
			data: INFLATION_UK,
			label: 'Inflation UK',
			backgroundColor: 'rgba(225,23,122,0.9)',
			borderColor: 'rgba(225,23,122,0.9)',
			pointBorderColor: 'rgba(25,123,12,0.9)',
			tension: 0.1,
		},
	],
};

export const lineChartOptions: ChartOptions<'line'> = {
	responsive: true,
	aspectRatio: 2,
	color: 'red',
	plugins: {
		tooltip: {
			mode: 'index',
			position: 'average',
			titleColor: 'green',
			titleFont: { size: 16 },
			bodyFont: { size: 14 },
			usePointStyle: true,
			caretSize: 10,
			callbacks: {
				beforeBody(tooltipItems) {
					return 'Everything sucks';
				},
				labelPointStyle: function (context) {
					return {
						pointStyle: 'triangle',
						rotation: 0,
					};
				},

				label(tooltipItem) {
					// console.log(tooltipItem);
					const labelSpan = `<span>${tooltipItem.dataset.label}</span>`;
					return labelSpan + ': ' + tooltipItem.dataset.data[tooltipItem.dataIndex] + '%';
				},
			},
			// external: function (context) {
			// 	console.log(context);
			// },
		},
	},
};
export const lineChartLegend = true;
