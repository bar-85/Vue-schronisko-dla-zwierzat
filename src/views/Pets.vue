<template>
	<main class="home-page">
		<h1>Nasi podopieczni</h1>
		<div class="buttons">
			<button @click="filter = 'all'">Wszystkie zwierzaki</button>
			<button @click="filter = 'cat'">Koty</button>
			<button @click="filter = 'dog'">Psy</button>
		</div>
		<div class="gallery">
			<div class="item" v-for="(item, index) in filteredItems" :key="index">
				<img :src="item.img" :alt="item.alt" />
				<p>{{ item.name }}</p>
				<button class="like-button" @click="item.likes++">Nakarm: {{ item.likes }}</button>
			</div>
		</div>
	</main>
</template>

<script>
import dog1 from '../assets/dog1.jpg'
import dog2 from '../assets/dog3.jpg'
import dog3 from '../assets/dog4.jpg'
import cat1 from '../assets/cat1.jpg'
import cat2 from '../assets/cat2.jpg'
import cat3 from '../assets/cat3.jpg'

export default {
	data() {
		return {
			filter: 'all',
			items: [
				{ img: dog1, alt: 'pies', name: 'Bella', type: 'dog', likes: 8 },
				{ img: cat1, alt: 'kot', name: 'Max', type: 'cat', likes: 5 },
				{ img: dog2, alt: 'pies', name: 'Franek', type: 'dog', likes: 10 },
				{ img: cat2, alt: 'kot', name: 'Lucy', type: 'cat', likes: 6 },
				{ img: dog3, alt: 'pies', name: 'Misiek', type: 'dog', likes: 9 },
				{ img: cat3, alt: 'kot', name: 'Pchełka', type: 'cat', likes: 23 },
			],
		}
	},
	computed: {
		filteredItems() {
			if (this.filter === 'all') {
				return this.items
			} else {
				return this.items.filter(item => item.type === this.filter)
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.home-page {
	h1 {
		text-align: center;
		margin-bottom: 3rem;
		color: var(--blue);
	}

	.buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 1rem;

		button {
			padding: 0.7rem 1rem;
			margin-right: 1rem;
		}
	}

	.gallery {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(2, 1fr);
		grid-gap: 10px;
		justify-content: center;
		align-items: center;

		.item {
			text-align: center;
			border-radius: 5px;
			box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
			padding: 0.5rem;

			img {
				width: 100%;
				max-width: 300px;
				height: auto;
				border-radius: 15px;
				box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);

				&:hover {
					transform: scale(1.1);
					cursor: pointer;
          transition: 0.4s ease-out;
				}
			}

			p {
				margin: 1rem;
			}

			.like-button {
				background-color: var(--blue-light);
				color: black;
         padding: 0.7rem 1rem;
			}
		}
	}

	@media (max-width: 978px) {
		.gallery {
			grid-template-columns: repeat(2, 1fr);
		}
	}
}
</style>
