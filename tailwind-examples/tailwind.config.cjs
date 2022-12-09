/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	darkMode: 'class', // media ==> dark:text-white , class ==> parent element
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		screens: {
			// xs: '475px',
			...defaultTheme.screens,
		},
	},
	plugins: [],
};
