<template>
	<div>
		<app-header />
		<app-alert />
		<app-suggestion />
		<app-card />
		<info-card />
		<app-footer />
	</div>
</template>

<script>
	import appHeader from "./components/appHeader.vue";
	import appFooter from "./components/appFooter.vue";
	import appSuggestion from "./components/appSearch.vue";
	import appCard from "./components/appCard.vue";
	import AppAlert from "./components/appAlert.vue";
	import InfoCard from "./components/InfoCard.vue";

	export default {
		name: "App",
		components: {
			appHeader,
			appCard,
			appFooter,
			appSuggestion,
			AppAlert,
			InfoCard,
		},
	};
</script>
<style></style>
