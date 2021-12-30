<template>
	<div>
		<app-header />
		<app-search />
		<app-card />
	</div>
</template>

<script>
	import appHeader from "./components/appHeader.vue";
	import appSearch from "./components/appSearch.vue";
	import appCard from "./components/appCard.vue";

	export default {
		name: "App",
		components: {
			appHeader,
			appSearch,
			appCard,
		},
	};
</script>

<!--
main color hex  264653
second color hex 2A9D8F
third color hex E9C46A
fourth color hex F4A261
fifth color hex E76F51
-->
