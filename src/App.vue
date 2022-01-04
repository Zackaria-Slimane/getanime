<template>
	<div>
		<app-header />
		<app-alert />
		<app-suggestion />
		<app-card />
		<app-footer />
	</div>
</template>

<script>
	import appHeader from "./components/appHeader.vue";
	import appFooter from "./components/appFooter.vue";
	import appSuggestion from "./components/appSuggestion.vue";
	import appCard from "./components/appCard.vue";
	import AppAlert from "./components/appAlert.vue";

	export default {
		name: "App",
		components: {
			appHeader,
			appCard,
			appFooter,
			appSuggestion,
			AppAlert,
		},
	};
</script>
