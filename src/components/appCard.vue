<template>
	<div class="mt-22 w-full">
		<p v-if="cards.length" class="text-center text-mainblue my-10 underline">
			Here's your suggestions based on {{ this.$store.state.userQuerry }}
		</p>
		<ul
			v-if="fetchCards"
			class="container mx-auto p-10 md:p-20 grid lg:grid-cols-2 2xl:grid-cols-3 grid-cols-1 gap-y-10 transform duration-500"
		>
			<li
				v-for="card in cards"
				:key="card.canonicalTitle"
				class="shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer"
			>
				<div class="max-h-140 overflow-hidden">
					<img
						class="w-full h-auto opacity-50 hover:opacity-100"
						:src="card.posterImage"
						alt="poster image"
					/>
				</div>
				<div class="p-7 my-auto pb-12">
					<h1 class="text-xl font-semibold text-mainblue mb-2">
						{{ card.canonicalTitle }}
					</h1>
					<p class="font-small text-black">
						Air date : <span class="text-honey">{{ card.startDate }}</span>
					</p>
					<p class="font-small text-black">
						Average rating : <span class="text-honey">{{ card.averageRating }}</span> %
					</p>
					<p class="font-small text-black">
						Popularity rank : top
						<span class="text-honey"> {{ card.ratingRank }}</span>
						%
					</p>
					<p class="font-small text-black">
						Recommended to : <span class="text-honey">{{ card.userCount }}</span> users
					</p>
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
