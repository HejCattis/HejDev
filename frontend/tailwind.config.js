/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				pink: '#995688',
				purple: '#7b4590'
			},
		},
	},
	plugins: [],
};
