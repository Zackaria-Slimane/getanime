<template>
	<div v-if="fetchInfos" class="container mx-auto mt-2 mb-10">
		<div class="grid grid-cols-1 md:grid-cols-2 h-screen">
			<div class="max-h-92 md:h-screen">
				<img
					class="w-screen h-screen object-contain"
					:src="infoCard.posterImage"
					alt=""
				/>
			</div>
			<div class="flex p-5">
				<div class="mb-auto mt-auto max-w-lg">
					<h1 class="text-3xl my-3 uppercase">{{ infoCard.canonicalTitle }}</h1>
					<p class="mb-5 text-mainblue">Ratings : {{ infoCard.averageRating }} %</p>
					<p>
						{{ infoCard.synopsis }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import store from "../store";
	export default {
		name: "infoCard",
		data() {
			return {
				infoCard: store.state.infoCard,
			};
		},
		computed: {
			fetchInfos() {
				return store.getters.infoCard;
			},
		},
	};
</script>
