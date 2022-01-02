import axios from "axios";
import { createStore, Store } from "vuex";

export default createStore({
	state: {
		errorState: false,
		loading: false,
		menuToggle: true,
		searchHidden: false,
		showClearBtn: false,
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

		clearData: (state) => {
			state.cards = [];
		},

		toggleMenu: (state) => {
			state.menuToggle = !state.menuToggle;
		},

		toggleSearch: (state) => {
			state.searchHidden = !state.searchHidden;
		},
		reload() {
			window.location.reload();
		},

		fetchData(state) {
			if (state.errorState == false) {
				state.loading = true;
				state.searchHidden = false;
				state.showClearBtn = true;

				var options = {
					method: "GET",
					url: process.env.VUE_APP_URL,
					params: {
						anime_title: state.userQuerry,
						number_of_anime: state.nbrSuggestions,
					},
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
			} else return;
		},
	},

	getters: {
		getMenuState: (state) => state.menuToggle,
		getSearchState: (state) => state.searchHidden,
		getUserQuerry: (state) => state.userQuerry,
		getErrorState: (state) => state.errorState,
		getCards: (state) => state.cards,
	},
	actions: {},
	modules: {},
});
