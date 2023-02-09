<template>
	<main class="home-page">
		<div class="box">
			<h1>Kontakt</h1>
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

		h1 {
			text-transform: uppercase;
			margin: 1rem;
		}

		p {
			text-align: center;
		}
	}

	@media (max-width: 978px) {
	.home-page {
	

		h1 {
			font-size: 1.1rem;
		}

	}
	}
}
</style>
