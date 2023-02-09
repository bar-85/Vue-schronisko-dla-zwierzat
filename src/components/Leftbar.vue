<template>
	<aside :class="{ open: open }">
		<div class="logo">
			<img src="../assets/logo2.png" alt="logo" @click="ToggleMenu" />
		</div>
		<div class="menu-toggle" @click="ToggleMenu">
			<div class="menu">
				<span class="material-icons"> keyboard_double_arrow_right </span>
			</div>
		</div>

		<h3>Menu</h3>
		<div class="menu-bottom">
			<router-link class="button" to="/">
				<span class="material-icons icons">cottage</span>
				<span class="text" >Strona główna</span>
			</router-link>
			<router-link class="button" to="/pets">
				<span class="material-icons icons">pets</span>
				<span class="text" >Nasze zwierzęta</span>
			</router-link>
			<router-link class="button" to="/contact">
				<span class="material-icons icons">call</span>
				<span class="text" >Kontakt</span>
			</router-link>
		</div>
	</aside>
</template>

<script setup>
import { ref } from 'vue'

const open = ref(false)

const ToggleMenu = () => {
	open.value = !open.value
}
</script>

<style lang="scss" scoped>
aside {
	display: flex;
	flex-direction: column;
	width: calc(2rem + 40px);
	overflow: hidden;
	min-height: 100vh;
	padding: 1rem;
	background-color: var(--dark);
	border: 1px solid var(--blue);
	border-top-right-radius: 20px;
	border-bottom-right-radius: 20px;
	transition: 0.3s ease-out;

	.material-icons {
		color: var(--blue);
	}

	.logo {
		margin-bottom: 1rem;
		cursor: pointer;

		img {
			width: 2.7rem;
		}
	}

	.menu-toggle {
		position: relative;
		top: 0;
		display: flex;
		justify-content: flex-end;
		margin: 0 0.2rem 1rem 0;
		transition: 0.4s ease-out;
		cursor: pointer;

		.menu {
			transition: 0.4s ease-out;

			span {
				font-size: 2rem;

				&:hover {
					color: var(--blue-dark);
					transition: 0.2s ease-out;
					transform: translateX(0.3rem);
				}
			}
		}
	}

	h3 {
		margin-top: 2rem;
		color: var(--blue-light);
	}

	h3,
	.button .text {
		opacity: 0;
		transition: 0.3s ease-out;
	}

	.menu-bottom {
		margin: 0 -1rem;

		.button {
			display: flex;
			align-items: center;
			text-decoration: none;
			padding: 0.5rem 1rem;
			transition: 0.3s ease-out;
			margin: 2rem 0 2rem 0;

			.icons {
				font-size: 2.5rem;
				margin-right: 1.2rem;
				transition: 0.3s ease-out;
			}

			.text {
				color: var(--light);
				transition: 0.2s ease-out;
			}

			&:hover,
			&.router-link-exact-active {
				background-color: var(--dark-light);
				.icons {
					transform: scale(1.1);
					color: var(--blue-light);
				}

				.text {
					color: var(--blue-light);
				}
			}

			&.router-link-exact-active {
				border-right: 2px solid var(--blue);
			}
		}
	}

	&.open {
		width: var(--leftbar-width);

		.menu-toggle {
			top: -3rem;

			.menu {
				transform: rotate(-180deg);
			}
		}

		h3,
		.button .text {
			opacity: 1;
		}
	}

	@media (max-width: 978px) {
		position: fixed;
		z-index: 99;
		width: calc(2rem + 30px);

		.menu-toggle {
			margin-left: 2rem;
		}

		.logo {
			margin-left: -0.3rem;
		}

		.menu-bottom {
			.button {
				.icons {
					font-size: 2.1rem;;
				}

				.text {
					font-size: 0.9rem;
				}
			}
		}
	}
}
</style>
