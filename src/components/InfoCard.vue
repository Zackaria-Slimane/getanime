<template>
	<main class="my-6 md:px-20 sm:px-14 px-6 hidden">
		<div
			class="sm:flex items-center shadow-md bg-white opacity-60 hover:opacity-100 transform duration-500"
		>
			<div>
				<img class="bg-cover" :src="posterImage" alt="" />
			</div>
			<div class="md:px-10 sm:px-5">
				<h1 class="text-gray-800 font-bold text-2xl my-2">{{ canonicalTitle }}</h1>
				<p class="text-gray-700 mb-2 md:mb-6">{{ synopsis }}</p>
				<div class="flex justify-between mb-2">
					<span class="font-thin text-sm">{{ startDate }}</span>
					<span class="sm:block hidden mb-2 text-gray-800 font-bold"
						>Get recomendations</span
					>
				</div>
			</div>
		</div>
	</main>
</template>
<script>
	export default {
		name: "infoCard",
		data() {
			return {
				averageRating: "70.41",
				canonicalTitle: "Jujutsu Kaisen",
				favoritesCount: "211",
				popularityRank: 501,
				posterImage: "https://media.kitsu.io/anime/poster_images/11/large.jpg",
				ratingRank: "8",
				startDate: "2018-12-03",
				subtype: "TV",
				synopsis:
					"Just where do Curses, the fiendish spirits invisible to normal humans, come from? What is Sukuna Ryoumen, whose very existence grips the Jujutsu world in fear? And who exactly is Yuuji Itadori, the boy who recently became the center of attention in Jujutsu society? No need to fear, for Satoru Gojou, the strongest Jujutsu sorcerer, has the answers! From the new sorcerers in training to the enemies they face, Gojou provides all you need to know about Jujutsu and the inner workings of the institution who protect us from Curses: the Tokyo Jujutsu High School.",
				userCount: 119,
			};
		},
	};
</script>
