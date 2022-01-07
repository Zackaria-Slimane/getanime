<template>
	<div class="mt-32" :class="{ hidden: searchHidden }">
		<div
			class="self-center mx-auto mb-4 my-5 flex align-middle items-center justify-center"
		>
			<div class="relative">
				<div class="absolute left-0 inset-y-0 pl-3 flex items-center">
					<svg
						class="fill-current h-6 w-6 text-gray-400"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
					>
						<path
							d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
						/>
					</svg>
				</div>

				<input
					class="border-2 pl-12 pr-4 py-2 rounded-lg focus:border-mainblue focus:shadow-outline"
					type="text"
					:class="{ 'border-red-400': errorTrue }"
					placeholder="Get suggestions "
					:value="userQuerry"
					@change="setUserQuerry"
				/>

				<input
					class="border rounded-lg py-2 px-2 w-20 text-center focus:ring-mainblue"
					type="number"
					:value="nbrSuggestions"
					@change="setNbr"
				/>
			</div>
		</div>

		<p class="mt-8 text-sm text-center text-mainblue dark:text-gray-400">
			<span></span>
			<span></span>
			the name of the anime you want to get suggestions based on, and the number of
			suggestions.
		</p>

		<form @submit.prevent="submit" class="vld-parent" ref="formContainer">
			<!-- your form inputs goes here-->
			<div class="self-center w-1/3 text-center mx-auto mb-4 my-5">
				<button
					type="submit"
					class="px-4 py-2 text-sm rounded-lg font-medium border-2 border-mainblue text-mainblue focus:outline-none hover:bg-mainblue hover:text-white"
					@click.prevent="submit"
				>
					Get suggestions
				</button>
			</div>
		</form>
	</div>
</template>

<script>
	import store from "../store";

	export default {
		name: "appSearch",
		data() {
			return {
				fullPage: true,
				userQuerry: store.state.userQuerry,
				nbrSuggestions: store.state.nbrSuggestions,
			};
		},
		methods: {
			setUserQuerry: (event) => {
				store.commit("setUserQuerry", event.target.value);
			},

			setNbr: (event) => {
				store.commit("setNbr", event.target.value);
			},
			submit() {
				store.commit("fetchSuggestion");
				let loader = this.$loading.show({
					// Optional parameters
					container: this.fullPage ? null : this.$refs.formContainer,
					canCancel: false,
				});
				setTimeout(() => {
					loader.hide();
				}, 4000);
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
