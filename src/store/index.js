import axios from "axios";
import VueAxios from "vue-axios";
import { createStore, Store } from "vuex";

export default createStore({
	state: {
		loading: false,
		menuToggle: true,
		searchHidden: false,
		userQuerry: "",
		nbrSuggestions: 2,
		cards: [],
	},
	mutations: {
		setUserQuerry: (state, payload) => {
			state.userQuerry = payload;
		},
		setNbr: (state, payload) => {
			state.nbrSuggestions = Number(payload);
		},

		toggleMenu: (state) => {
			state.menuToggle = !state.menuToggle;
		},

		toggleSearch: (state) => {
			state.searchHidden = !state.searchHidden;
		},

		fetchData(state) {
			//state.cards = [];
			state.loading = true;
			state.searchHidden = false;

			var options = {
				method: "GET",
				url: process.env.VUE_APP_URL,
				params: { anime_title: state.userQuerry, number_of_anime: state.nbrSuggestions },
				headers: {
					"x-rapidapi-host": process.env.VUE_APP_HOST,
					"x-rapidapi-key": process.env.VUE_APP_APIKEY,
				},
			};

			axios
				.request(options)
				.then(function (response) {
					let cardsInfo = response.data.data;
					cardsInfo.forEach((card, index) => {
						state.cards.push(card.attributes);
					});
					state.loading = false;
					state.searchHidden = true;
				})
				.catch(function (error) {
					console.error(error);
				});
		},
	},

	getters: {
		getMenuState: (state) => state.menuToggle,
		getSearchState: (state) => state.searchHidden,
		getUserQuerry: (state) => state.userQuerry,
	},
	actions: {},
	modules: {},
});
