<template>
	<div class="mt-22 w-full">
		<p v-if="cards.length" class="text-mainblue mt-10 mb-5 text-center underline">
			Here's your suggestions based on {{ this.$store.state.userQuerry }}
		</p>
		<ul
			v-if="fetchCards"
			class="container mx-auto grid transform grid-cols-1 gap-y-10 p-10 duration-500 md:p-20 lg:grid-cols-2 2xl:grid-cols-3"
		>
			<li
				v-for="card in cards"
				:key="card.title.english"
				class="mx-auto max-w-sm transform cursor-pointer opacity-50 shadow-md duration-300 hover:-translate-y-1 hover:opacity-100 hover:shadow-xl"
			>
				<div class="max-h-140 overflow-hidden">
					<img class="h-auto w-full" :src="card.bannerImage" alt="poster image" />
				</div>
				<div class="my-auto p-7 pb-12">
					<h1 class="text-mainblue mb-2 text-xl font-semibold">
						{{ card.title.english }}
					</h1>
					<p class="font-small text-black">
						Air date : <span class="text-honey">{{ card.seasonYear }}</span>
					</p>
					<p class="font-small text-black">
						Average rating : <span class="text-honey">{{ card.averageScore }}</span> %
					</p>
				</div>
			</li>
		</ul>
		<div v-if="cards.length" class="mx-auto my-5 mb-4 w-1/3 self-center text-center">
			<button
				class="border-mainblue text-mainblue hover:bg-mainblue rounded-lg border-2 px-4 py-2 text-sm font-medium hover:text-white focus:outline-none"
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
				cards: store.state.suggestionCards,
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
