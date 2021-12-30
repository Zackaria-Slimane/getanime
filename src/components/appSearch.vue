<template>
	<div
		class="mx-auto overflow-y-auto flex flex-col align-middle self-center justify-between justify-items-center mt-48 w-1/2"
		:class="{ hidden: searchHidden }"
	>
		<input
			type="text"
			id="query"
			class="text-sm rounded-lg self-center md:w-2/4 w-full p-2.5 bg-transparent focus:outline-none placeholder-black border-b-4 border-mainblue"
			placeholder="Anime name ( case sensitive ) "
			:value="userQuerry"
			@change="setUserQuerry"
		/>

		<input
			type="number"
			class="h-8 mt-8 w-24 self-center rounded-lg text-center bg-transparent focus:outline-none placeholder-black border-b-4 border-mainblue"
			name="custom-input-number"
			:value="nbrSuggestions"
			@change="setNbr"
		/>

		<p class="mt-8 text-sm text-center text-mainblue dark:text-gray-400">
			Enter the name of the anime you want to get suggestions based on, and the number of
			suggestions.
		</p>

		<button
			type="button"
			class="text-mainblue self-center mt-10 w-48 border border-mainblue hover:bg-mainblue hover:text-white focus:ring-4 focus:ring-mainblue font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:border-secondteal dark:text-secondteal dark:hover:text-white dark:focus:ring-secondteal transition delay-75 duration-300 ease-in-out"
			@click.prevent="fetchData"
		>
			<span class="mx-2"> Get suggestions </span>
			<svg
				class="w-5 h-5 mx-2"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
					clip-rule="evenodd"
				></path>
			</svg>
		</button>
	</div>
</template>
<script>
	import { mapMutations } from "vuex";
	import store from "../store";

	export default {
		name: "appSearch",
		data() {
			return {
				nbrSuggestions: store.state.nbrSuggestions,
				userQuerry: store.state.userQuerry,
			};
		},
		methods: {
			...mapMutations(["fetchData", "fetchAPI"]),

			setUserQuerry: (event) => {
				store.commit("setUserQuerry", event.target.value);
			},

			setNbr: (event) => {
				store.commit("setNbr", event.target.value);
			},
		},

		computed: {
			searchHidden() {
				return this.$store.getters.getSearchState;
			},
		},
	};
</script>
