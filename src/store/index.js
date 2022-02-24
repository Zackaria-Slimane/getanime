import axios from "axios";
import { createStore } from "vuex";

export default createStore({
	state: {
		errorState: false,
		loading: false,
		menuToggle: true,
		searchHidden: false,
		showClearBtn: false,
		searchMode: false,
		suggestionMode: true,
		userQuerry: "",
		nbrSuggestions: 3,
		suggestionCards: [],
		infoCard: [],
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

		toggleErrorState: (state) => {
			state.errorState = false;
			state.searchHidden = false;
			state.userQuerry = " ";
		},

		reload() {
			window.location.reload();
		},

		fetchInfo(state) {
			if (state.errorState == false) {
				state.loading = true;
				state.searchHidden = false;
				state.searchMode = true;
				state.showClearBtn = true;

				var options = {
					method: "GET",
					url: process.env.VUE_APP_INFO_URL,
					params: { anime_title: "Bleach" },
					headers: {
						"x-rapidapi-host": process.env.VUE_APP_HOST,
						"x-rapidapi-key": process.env.VUE_APP_APIKEY,
					},
				};

				axios
					.request(options)
					.then(function (response) {
						let searchInfo = response.data.data;
						state.infoCard.push(searchInfo.attributes);
						console.log("state info card", state.infoCard);
						state.loading = false;
						state.searchHidden = true;
					})
					.catch(function (error) {
						state.errorState = true;
						state.searchHidden = true;
						console.error(error);
					});
			} else {
				state.errorState = true;
				state.searchHidden = true;
				return;
			} //make an error alert pop here
		},

		fetchSuggestion(state, payload) {
			if (state.errorState == false) {
				state.loading = true;
				state.searchHidden = false;
				state.showClearBtn = true;

				let cardsInfo = payload;

				cardsInfo.forEach((card, index) => {
					state.suggestionCards.push(card);
				});
				console.log("CARDS:", state.suggestionCards);
				state.loading = false;
				state.searchHidden = true;
			} else {
				state.loading = false;
				state.errorState = true;
				state.searchHidden = true;
				return;
			} //make an error alert pop here
		},
	},

	getters: {
		getMenuState: (state) => state.menuToggle,
		getSearchState: (state) => state.searchHidden,
		getSearchMode: (state) => state.searchMode,
		getUserQuerry: (state) => state.userQuerry,
		getErrorState: (state) => state.errorState,
		getCards: (state) => state.suggestionCards,
		fetchInfos: (state) => state.infoCard,
	},
	actions: {
		async getSuggestion({ commit, state }) {
			let options = {
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
			await axios
				.request(options)
				.then((response) => {
					commit("fetchSuggestion", response.data.data);
				})
				.catch(function (error) {
					console.log(error);
					state.loading = false;
					state.errorState = true;
					state.searchHidden = true;
				});
		},
	},
	modules: {},
});
