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
				<div class="cat-png">
					<img class="cat" src="../assets/cat1.png" alt="" />
				</div>
				<div class="butterfly-png">
					<img class="butterfly" src="../assets/butterfly.png" alt="" />
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
				color: var(--blue);
			}
		}

		.middle {
			margin: 1rem;
			color: var(--blue-light);
		}

		button {
			margin-top: 2rem;
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
	}

	.right-side {
		width: 40%;
		display: flex;
		flex-direction: column;
		justify-content: center;

		.pictures {
			display: flex;
			justify-content: center;
			align-items: center;

			.butterfly-png {
				position: absolute;
				top: 0;
				right: 20%;
				animation: move-butterfly 5s infinite linear;

				.butterfly {
					max-width: 90%;
					height: auto;
				}
			}

			.cat {
				max-width: 35%;
				height: auto;
				margin: 40% 0 0 30%;
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

	@media (max-width: 768px) {
		flex-direction: column;

		.left-side {
			order: 1;
			width: 100%;

			h1 {
				margin-top: 4.5rem;
				font-size: 1.3rem;
			}

			.middle {
				margin-top: 0rem;
				font-size: 0.9rem;
			}

			.bottom {
				margin-top: 0rem;
				font-size: 0.7rem;
			}
		}

		.right-side {
			order: 2;
			width: 100%;

			.pictures {
				margin-top: 6rem;

				.butterfly-png {
					top: 40%;

					.butterfly {
						max-width: 60%;
					}
				}
			}
		}
	}
}
</style>
