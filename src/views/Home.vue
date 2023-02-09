<template>
	<main class="home-page">
		<div class="left-side">
			<h1>Schronisko <span>"Ogonek"</span></h1>
			<p class="middle">ZWIERZĘTA DO ADOPCJI</p>
			<p class="bottom">Ty też możesz zmieniać z nami los zwierząt!</p>
			<router-link to="/pets">
				<button>Nasze zwierzęta</button>
			</router-link>
		</div>
		<div class="right-side">
			<div class="pictures">
				<div class="butterfly-png">
					<img class="butterfly" src="../assets/butterfly.png" alt="zdjęcie motyla" />
				</div>
				<div class="cat-png">
					<img class="cat" src="../assets/cat1.png" alt="zdjęcie kota" />
				</div>
			</div>
		</div>
	</main>
</template>

<style lang="scss" scoped>
.home-page {
	display: flex;
	justify-content: space-between;

	.left-side {
		width: 60%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		h1 {
			font-size: 3rem;
			margin-bottom: 2rem;

			span {
				background: linear-gradient(to right, var(--blue), var(--blue-light));
				-webkit-background-clip: text;
				background-clip: text;
				color: transparent;
			}
		}

		.middle {
			margin: 1rem;
			color: var(--blue-light);
		}

		button {
			margin-top: 2rem;

			&:hover {
				background: var(--blue-button);
				transition: 0.2s ease-out;
			}
		}
	}

	.right-side {
		width: 40%;
		display: flex;
		flex-direction: column;
		justify-content: center;

		.pictures {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.cat {
				max-width: 35%;
				height: auto;
				margin-left: 20%;
			}

			.butterfly-png {
				animation: move-butterfly 5s infinite linear;
				margin: 0 4rem 2rem 0;

				.butterfly {
					max-width: 90%;
					height: auto;
				}
			}
		}
	}

	@keyframes move-butterfly {
		0% {
			transform: translateX(0) translateY(0);
		}
		20% {
			transform: translateX(10%) translateY(10%);
		}

		50% {
			transform: translateX(-20%) translateY(40%);
		}

		80% {
			transform: translateX(-30%) translateY(30%);
		}

		100% {
			transform: translateX(0) translateY(0);
		}
	}

	@media (max-width: 1150px) {
		.left-side {
			h1 {
				font-size: 2.2rem;
			}
		}
	}

	@media (max-width: 978px) {
		flex-direction: column;

		.left-side {
			order: 1;
			width: 100%;

			h1 {
				margin-top: 4.5rem;
				font-size: 2rem;
			}

			.middle {
				margin-top: 0rem;
				font-size: 1.5rem;
			}

			.bottom {
				margin-top: 0rem;
				font-size: 1rem;
			}
		}

		.right-side {
			order: 2;
			width: 100%;

			.pictures {
				.butterfly-png {
					display: flex;
					align-items: center;
					justify-content: center;
					margin: 1rem;

					.butterfly {
						max-width: 50%;
					}
				}

				.cat-png {
					display: flex;
					align-items: center;
					justify-content: center;
					margin: 0;

					.cat {
						max-width: 20%;
						margin-left: 0;
					}
				}
			}
		}
	}

	@media (max-width: 478px) {
		.left-side {
			h1 {
				margin-top: 8rem;
				font-size: 1.3rem;
			}

			.middle {
				font-size: 0.9rem;
			}

			.bottom {
				font-size: 0.7rem;
			}
		}
	}
}
</style>
