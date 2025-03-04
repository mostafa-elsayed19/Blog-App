/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				silver: "var(--color-silver)",
				jet: "var(--color-jet)",
				vermilion: "var(--color-vermilion)",
				isabelline: "var(--color-isabelline)",

				// Derived Colors
				background: "var(--background)",
				foreground: "var(--foreground)",
				bodyBg: "var(--body-bg)",
				headerBg: "var(--header-bg)",
				buttonBg: "var(--button-bg)",
				lightText: "var(--light-text)",
				searchBorder: "var(--search-border)",
				cardBorder: "var(--card-border)",
			},
		},
	},
	plugins: [],
};

export default config;
