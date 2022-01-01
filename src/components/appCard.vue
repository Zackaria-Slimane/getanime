<template>
	<div class="mt-28 w-full">
		<p v-if="cards.length" class="text-center text-mainblue my-10 underline">
			Here's your suggestions based on {{ this.$store.state.userQuerry }}
		</p>
		<ul
			v-if="fetchCards"
			class="my-10 pb-6 overflow-x-auto w-full flex justify-center gap-4"
		>
			<li v-for="card in cards" :key="card.canonicalTitle" class="mx-2 cursor-pointer">
				<div
					class="relative flex-shrink-0 max-w-[85vw] overflow-hidden rounded-xl hover:shadow-xl"
				>
					<img
						:src="card.posterImage"
						alt="poster image"
						class="absolute inset-0 w-full h-full object-cover object-bottom opacity-40"
					/>
					<div
						class="absolute inset-0 h-full w-full bg-gradient-to-br from-black/75"
					></div>
					<div
						class="relative h-96 w-[768px] p-8 flex flex-col justify-between items-start"
					>
						<div class="font-sans">
							<p class="mb-24 w-3/4 text-xl tracking-tight text-black">
								{{ card.canonicalTitle }}
							</p>
							<p class="font-small text-black">Air date : {{ card.startDate }}</p>
							<p class="font-small text-black">Type : {{ card.subtype }}</p>
							<p class="font-small text-black">
								Average rating : {{ card.averageRating }} %
							</p>
							<p class="font-small text-black">
								Popularity rank : best {{ card.ratingRank }}
							</p>
							<p class="font-small text-black">Recommended to : {{ card.userCount }}</p>
						</div>
					</div>
				</div>
			</li>
		</ul>

		<div v-if="cards.length" class="self-center w-1/3 text-center mx-auto mb-4 my-5">
			<button
				class="px-4 py-2 text-sm rounded-lg font-medium border-2 border-mainblue text-mainblue focus:outline-none hover:bg-mainblue hover:text-white"
				@click="reload"
			>
				Clear suggestions
			</button>
		</div>
	</div>
</template>
<script>
	import { mapMutations } from "vuex";
	import store from "../store";

	export default {
		name: "appCard",
		data() {
			return {
				cards: store.state.cards,
				info: null,
				loading: false,
				errored: false,
				searchName: store.state.userQuerry,
			};
		},

		methods: {
			...mapMutations(["clearData"]),
			reload() {
				window.location.reload();
			},
		},
		computed: {
			fetchCards() {
				return store.getters.getCards;
			},
		},
	};
</script>
