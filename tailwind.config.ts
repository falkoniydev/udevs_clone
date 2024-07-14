import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#1B5BF7",
				secondary: "#F4F7FF",
				info: "#E0E8FF",
				toolsBg: {
					type1: "#A8BFFF",
					type2: "#DBE5FF",
				},
				gray: {
					400: "#707070",
				},
			},
		},
	},
	plugins: [],
};
export default config;
