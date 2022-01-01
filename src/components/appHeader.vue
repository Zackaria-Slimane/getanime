<template>
	<div>
		<nav
			class="bg-champagne text-white shadow-md px-4 py-8 w-full sm:px-4 rounded dark:bg-gray-800"
		>
			<div class="container flex flex-wrap justify-between items-center mx-auto">
				<a class="flex" @click="reload">
					<span
						class="self-center font-atitle text-mainblue hover:text-black font-bold whitespace-nowrap text-3xl dark:text-white"
						>Animefy
					</span>
				</a>

				<button
					type="button"
					class="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden"
					@click.prevent="toggleMenu"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="w-6 h-6 text-mainblue"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clip-rule="evenodd"
						/>
					</svg>
					<svg
						class="hidden w-6 h-6"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>

				<div
					class="w-full md:block md:w-auto font-atitle"
					:class="{ hidden: menuToggle }"
					id="mobile-menu"
				>
					<ul class="flex flex-col mt-4 md:flex-row md:space-x-10 md:mt-0 font-bold">
						<li>
							<a
								href="javascript:0void"
								class="block py-2 pr-4 pl-3 text-xl text-mainblue rounded hover:text-black md:p-0 dark:text-white"
								@click.prevent="toggleSearch"
								>Suggestions
							</a>
						</li>

						<li>
							<a
								href="javascript:0void"
								class="block py-2 pr-4 pl-3 text-xl text-mainblue hover:text-black md:p-0 dark:text-white"
								>Search
							</a>
						</li>

						<li>
							<a
								href="javascript:0void"
								class="block py-2 pr-4 pl-3 text-xl text-mainblue hover:text-black md:p-0 dark:text-white"
								>Popular
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
	import { mapMutations } from "vuex";

	export default {
		name: "appHeader",
		computed: {
			menuToggle() {
				return this.$store.getters.getMenuState;
			},
		},
		methods: {
			...mapMutations(["toggleMenu", "toggleSearch", "reload"]),
		},
	};
</script>
