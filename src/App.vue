<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderPage from '@/components/HeaderPage.vue'
import FooterPage from '@/components/FooterPage.vue'
</script>
<template>
  <!-- <HeaderPage/> -->
	<div >
    
		<div >
		<nav >
			<ul class="mt-[25vh] ml-16 lg:m-0 lg:flex">
				<li class="menu-item"><RouterLink class="menu-link" to="/map" >Map</RouterLink></li>
				<li class="menu-item"><RouterLink class="menu-link" to="/tendances" >Tendances</RouterLink></li>
				<li class="menu-item"><RouterLink class="menu-link" to="/profil">Compte</RouterLink></li>
			</ul>
		</nav>
	</div>
</div>
<main>
 <RouterView />
</main>

<!-- <FooterPage/> -->
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
