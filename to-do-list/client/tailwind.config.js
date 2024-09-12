/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				main: ['cursive'],
			},
			colors: {
				appGreen: '#86efac',
			},
		},
	},
	plugins: [],
	darkMode: 'class',
};
