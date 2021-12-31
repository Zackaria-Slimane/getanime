<template>
	<div>
		<app-header />
		<app-search />
		<app-card />
		<app-footer />
	</div>
</template>

<script>
	import appHeader from "./components/appHeader.vue";
	import appSearch from "./components/appSearch.vue";
	import appCard from "./components/appCard.vue";
	import appFooter from "./components/appFooter.vue";

	export default {
		name: "App",
		components: {
			appHeader,
			appSearch,
			appCard,
			appFooter,
		},
	};
</script>
