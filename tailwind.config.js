module.exports = {
	purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				mainblue: "#264653",
				eggshel: "#F4F1DE",
				coldblue: "#3D405B",
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
