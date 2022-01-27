<template>
	<div class="mt-32" :class="{ hidden: searchHidden }">
		<div
			class="mx-auto my-5 mb-4 flex items-center justify-center self-center align-middle"
		>
			<div class="relative">
				<div class="absolute inset-y-0 left-0 flex items-center pl-3">
					<svg
						class="h-6 w-6 fill-current text-gray-400"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
					>
						<path
							d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
						/>
					</svg>
				</div>

				<input
					class="focus:border-mainblue focus:shadow-outline rounded-lg border-2 py-2 pl-12 pr-4"
					type="text"
					:class="{ 'border-red-400': errorTrue }"
					placeholder="Get suggestions "
					:value="userQuerry"
					@change="setUserQuerry"
				/>

				<input
					class="focus:ring-mainblue w-20 rounded-lg border py-2 px-2 text-center"
					type="number"
					:value="nbrSuggestions"
					@change="setNbr"
				/>
			</div>
		</div>

		<p class="text-mainblue mt-8 text-center text-sm dark:text-gray-400">
			<span></span>
			<span></span>
			the name of the anime you want to get suggestions based on, and the number of
			suggestions.
		</p>

		<form @submit.prevent="submit" class="vld-parent" ref="formContainer">
			<div class="mx-auto my-5 mb-4 w-1/3 self-center text-center">
				<button
					type="submit"
					class="border-mainblue text-mainblue hover:bg-mainblue rounded-lg border-2 px-4 py-2 text-sm font-medium hover:text-white focus:outline-none"
					@click.prevent="submit"
				>
					Get suggestions
				</button>
			</div>
		</form>
	</div>
</template>

<script>
	import { mapActions } from "vuex";
	import store from "../store";

	export default {
		name: "appSearch",
		data() {
			return {
				cards: store.state.suggestionCards,
				fullPage: true,
				userQuerry: store.state.userQuerry,
				nbrSuggestions: store.state.nbrSuggestions,
			};
		},
		methods: {
			...mapActions(["getSuggestion"]),
			setUserQuerry: (event) => {
				store.commit("setUserQuerry", event.target.value);
			},

			setNbr: (event) => {
				store.commit("setNbr", event.target.value);
			},

			submit() {
				let loader = this.$loading.show({
					container: null,
					canCancel: false,
				});
				store.dispatch("getSuggestion");
				setInterval(() => {
					if (this.cards.length > 0) {
						loader.hide();
						return;
					}
				}, 500);
				//clearInterval(uiBlock);
			},
		},

		computed: {
			searchHidden() {
				return store.getters.getSearchState;
			},
			errorTrue() {
				return store.getters.getErrorState;
			},
			searchMode() {
				return store.getters.searchMode;
			},
		},
	};
</script>
