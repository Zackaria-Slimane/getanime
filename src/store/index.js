import { createStore } from "vuex";
import axios from "axios";

export default createStore({
	state: {
		loading: false,
		menuToggle: false,
		searchHidden: false,
		userQuerry: "Jujutsu Kaisen",
		nbrSuggestions: 2,
	},
	mutations: {
		toggleMenu: (state) => {
			state.menuToggle = !state.menuToggle;
		},

		toggleSearch: (state) => {
			state.searchHidden = !state.searchHidden;
		},

		fetchData() {
			this.state.loading = true;
			this.state.searchHidden = false;
			let _options = {
				method: "GET",
				url: "https://anime-recommender.p.rapidapi.com/",
				params: {
					anime_title: this.state.userQuerry,
					number_of_anime: this.state.nbrSuggestions,
				},
				headers: {
					"x-rapidapi-host": "anime-recommender.p.rapidapi.com",
					"x-rapidapi-key": "06d5b35b4amsh04afba0573aab21p1d924fjsne5088f381ed7",
				},
			};
			axios
				.request(_options)
				.then(function (response) {
					console.log(response.data);
				})
				.catch(function (error) {
					console.error(error);
				})
				.finally(() => {
					this.state.loading = false;
					this.state.searchHidden = true;
				});
		},
	},
	getters: {
		getMenuState: (state) => state.menuToggle,
		getSearchState: (state) => state.searchHidden,
	},
	actions: {},
	modules: {},
});
