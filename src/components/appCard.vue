<template>
	<div class="mt-28 mx-12">
		<p class="text-center text-mainblue my-10 underline">
			<!-- Here's your suggestions based on {{}} -->
		</p>
		<ul class="my-10 pb-8 w-full flex overflow-x-auto gap-8 justify-center">
			<li v-for="card in cards" :key="card.id" class="snap-center mx-4">
				<div class="relative flex-shrink-0 max-w-[95vw] overflow-hidden rounded-3xl">
					<img
						:src="card.img"
						alt=""
						class="absolute inset-0 w-full h-full object-cover object-bottom opacity-50"
					/>
					<div
						class="absolute inset-0 h-full w-full bg-gradient-to-br from-black/75"
					></div>
					<div
						class="relative h-96 w-[768px] p-8 flex flex-col justify-between items-start"
					>
						<div>
							<p class="mb-24 w-2/3 text-xl tracking-tight text-black">
								{{ card.title }}
							</p>
							<p class="font-small text-black">Air date : {{ card.airdate }}</p>
							<p class="font-small text-black">Type : {{ card.type }}</p>
							<p class="font-small text-black">Ratings : {{ card.avgRating }}</p>
							<p class="font-small text-black">Popularity : {{ card.popularity }}</p>
							<p class="font-small text-black">Recommended : {{ card.usercount }}</p>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: "appCard",
		data() {
			return {
				cards: [
					{
						id: 0,
						title: "Carole",
						avgRating: "79%",
						airdate: "02-06-2014",
						type: "shounen",
						popularity: "56%",
						img: "https://media.kitsu.io/anime/poster_images/41025/large.jpg",
						usercount: "13216",
					},
					{
						id: 1,
						title: "Aho ni mita",
						avgRating: "86%",
						airdate: "02-06-2014",
						type: "shounen",
						popularity: "56%",
						img: "https://media.kitsu.io/anime/poster_images/5981/large.jpg",
						usercount: "13216",
					},
					{
						id: 2,
						title: "Kitsu",
						avgRating: "79%",
						airdate: "02-06-2014",
						type: "shounen",
						popularity: "56%",
						img: "https://media.kitsu.io/anime/poster_images/8712/large.jpg",
						usercount: "13216",
					},
				],
				info: null,
				loading: false,
				errored: false,
			};
		},
		methods: {},
	};
</script>
