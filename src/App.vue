<template>
	<div class="app">
		<Leftbar />
		<router-view />
	</div>
</template>

<script setup>
import Leftbar from './components/Leftbar.vue'
</script>

<style lang="scss">
:root {
	--light: #f1f5f9;
	--dark: #1f2023;
	--dark-light: #26272b;
	--blue: #007dc2;
	--blue-light: #62c3f8;
	--blue-button: #62c4f818;
	--leftbar-width: 250px;
	--text-color: #ffffff;
	--border-color: #ffffff26;
}

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	font-family: 'Fira sans', sans-serif;
}

body {
	background: var(--dark-light);
	color: var(--text-color);
}

button {
	cursor: pointer;
	appearance: none;
	background: none;
	padding: 1rem;
	border: 1px solid var(--blue);
	border-radius: 10px;
	font-weight: bold;
	color: var(--light);

	&:hover {
		background: var(--blue-button);
		transition: 0.2s ease-out;
	}
}

.app {
	display: flex;

	main {
		flex: 1 1 0;
		padding: 2rem;

		@media (max-width: 978px) {
			padding-left: 6rem;
		}

		button {
			font-size: 0.8rem;
		}
	}
}
</style>
