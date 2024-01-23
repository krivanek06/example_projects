import { ChartConfiguration, ChartOptions } from 'chart.js';
import { FRUIT_TYPES, FRUIT_TYPES_2 } from '../../../models';

export const pieChartData: ChartConfiguration<'pie'>['data'] = {
	labels: FRUIT_TYPES.map((x) => x.name),
	datasets: [
		{
			data: FRUIT_TYPES.map((x) => x.total),
		},
	],
};

export const pieChartData2: ChartConfiguration<'pie'>['data'] = {
	labels: FRUIT_TYPES.map((x) => x.name),
	datasets: [
		{
			data: FRUIT_TYPES.map((x) => x.total),
		},
		{
			data: FRUIT_TYPES_2.map((x) => x.total),
		},
	],
};

export const pieChartOptions: ChartOptions<'pie'> = {
	responsive: true,
	aspectRatio: 2,

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
				labelPointStyle: function (context) {
					return {
						pointStyle: 'circle',
						rotation: 2,
					};
				},
			},
		},
	},
};
export const pieChartLegend = true;
