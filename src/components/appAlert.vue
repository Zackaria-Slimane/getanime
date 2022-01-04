<template>
	<div
		v-if="getErrorState"
		class="w-1/2 mx-auto mt-5 bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-6 shadow-md hover:shadow-lg"
		role="alert"
	>
		<div class="flex">
			<div class="py-1">
				<svg
					class="fill-current h-6 w-6 text-red-500 mr-4"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
				>
					<path
						d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
					/>
				</svg>
			</div>
			<div>
				<p class="font-bold text-lg">Request failed</p>
				<p class="text-md">
					Sorry it seems something went wrong with the request! Inputs are very case
					sensitive please try again.
				</p>
				<button
					class="mt-5 rounded-full bg-red-500 text-white px-3 py-2 hover:shadow-lg"
					@click="toggleErrorState"
				>
					Go back
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapMutations } from "vuex";
	import store from "../store";

	export default {
		name: "Alert",
		computed: {
			getErrorState() {
				return store.getters.getErrorState;
			},
		},
		methods: {
			...mapMutations(["toggleErrorState"]),
		},
	};
</script>
