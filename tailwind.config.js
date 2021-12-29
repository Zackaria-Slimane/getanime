module.exports = {
	purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				mainblue: "#264653",
				secondteal: "#2A9D8F",
				coldgold: "#E9C46A",
				honey: "#F4A261",
				mandarine: "#E76F51",
				champagne: "#FECB90",
			},
			fontFamily: {
				atitle: ["Bungee Shade", "sans-serif"],
				atext: ["Poiret One", "sans-serif"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
