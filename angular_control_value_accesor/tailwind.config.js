module.exports = {
	content: ['./src/**/*.{html,ts}'],
	important: true, // to overwride angular material
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
};
