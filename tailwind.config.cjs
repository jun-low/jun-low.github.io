/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['Lovelace-text', ...defaultTheme.fontFamily.serif],
				sans: ['Bellefair Regular', ...defaultTheme.fontFamily.sans],
				title: ['Brittany Signature', ...defaultTheme.fontFamily.serif],
			},
			colors: {
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
			},
			textColor: {
				default: 'var(--color-text)',
				offset: 'var(--color-text-offset)',
			},
			backgroundColor: {
				default: 'var(--color-background)',
				offset: 'var(--color-background-offset)',
			},
			borderColor: {
				default: 'var(--color-border)',
			},
		},
	},
	corePlugins: {
		fontSize: false,
	},
	plugins: [require('tailwindcss-fluid-type')],
};
