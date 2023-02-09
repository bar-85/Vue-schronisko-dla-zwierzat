<template>
	<main class="home-page">
		<div class="box">
			<div class="title">Kontakt</div>
			<p>+48 123 456 78</p>
		</div>
	</main>
</template>

<style lang="scss" scoped>
.home-page {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.box {
		padding: 2rem;
		border: 1px solid var(--blue);
		border-radius: 10px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);

		.title {
			text-transform: uppercase;
			margin: 1rem;
			font-size: 1.3rem;
		}

		p {
			text-align: center;
		}
	}
}
</style>
