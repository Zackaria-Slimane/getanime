<template>
	<div v-if="fetchInfos" class="container mx-auto mt-2 mb-10">
		<div class="grid h-screen grid-cols-1 md:grid-cols-2">
			<div class="max-h-92 md:h-screen">
				<img
					class="h-screen w-screen object-contain"
					:src="infoCard.posterImage"
					alt=""
				/>
			</div>
			<div class="flex p-5">
				<div class="mb-auto mt-auto max-w-lg">
					<h1 class="my-3 text-3xl uppercase">{{ infoCard.canonicalTitle }}</h1>
					<p class="text-mainblue mb-5">Ratings : {{ infoCard.averageRating }} %</p>
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
