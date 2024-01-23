import { ChartConfiguration, ChartOptions } from 'chart.js';
import { EARNINGS_AAPL } from '../../../models';

export const scatterChartData: ChartConfiguration<'scatter'>['data'] = {
	labels: EARNINGS_AAPL.map((x) => x[0]),
	datasets: [
		{
			pointRadius: 12,
			borderColor: '#3da50a',
			pointBackgroundColor: '#3da50abf',
			label: 'Actual',
			data: EARNINGS_AAPL.map((x) => {
				return { x: new Date(x[0]).getTime(), y: x[2] as number };
			}),
		},
		{
			pointRadius: 12,
			borderColor: '#878585',
			pointBackgroundColor: '#cccccc',
			label: 'Estimation',
			data: EARNINGS_AAPL.map((x) => {
				return { x: new Date(x[0]).getTime(), y: x[1] as number };
			}),
		},
	],
};

export const scatterChartOptions: ChartOptions<'scatter'> = {
	responsive: true,

	// scales: {
	// 	x: {
	// 		type: 'timeseries',
	// 	},
	// },
	scales: {
		y: {
			ticks: {
				// Include a dollar sign in the ticks
				callback: function (value, index, ticks) {
					return '$' + value;
				},
			},
		},
		x: {
			ticks: {
				// Include a dollar sign in the ticks
				callback: function (value, index, ticks) {
					return new Date(value).toISOString().slice(0, 10);
				},
			},
		},
	},
	plugins: {
		tooltip: {
			mode: 'index',
			position: 'average',
			titleColor: 'red',
			titleFont: { size: 16 },
			bodyFont: { size: 14 },
			usePointStyle: true,
			caretSize: 10,
			callbacks: {
				labelPointStyle: function (context) {
					return {
						pointStyle: 'circle',
						rotation: 2,
					};
				},
				title(tooltipItems) {
					// console.log(tooltipItems);
					const dateTimestamp = tooltipItems[0].parsed.x;
					return new Date(dateTimestamp).toISOString().slice(0, 10);
				},
				label(tooltipItem) {
					// console.log(tooltipItem);
					const data = tooltipItem.dataset.data[tooltipItem.dataIndex] as { x: number; y: number };
					const label = tooltipItem.dataset.label;
					return label + ': ' + data.y + '$';
				},
			},
		},
	},
};
export const scatterChartLegend = true;
