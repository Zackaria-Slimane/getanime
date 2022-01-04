<template>
	<div>
		<app-header />
		<app-alert />
		<app-search />
		<app-card />
		<app-footer />
	</div>
</template>

<script>
	import appHeader from "./components/appHeader.vue";
	import appFooter from "./components/appFooter.vue";
	import appSearch from "./components/appSearch.vue";
	import appCard from "./components/appCard.vue";
	import AppAlert from "./components/appAlert.vue";

	export default {
		name: "App",
		components: {
			appHeader,
			appCard,
			appFooter,
			appSearch,
			AppAlert,
		},
	};
</script>
