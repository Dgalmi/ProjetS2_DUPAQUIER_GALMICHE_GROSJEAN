<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import Logo_Proximi_header from '@/components/icons/icon_logo_proximi_food_xxs.vue'
import BG_path from '@/components/icons/path_bg_header.vue'
const activeMenu = ref(false)
function closeMenu() {
	  activeMenu.value = false
	}
</script>

<template>		
<header class="">
    <BG_path class="relative min-w-fit"/>
  	<Logo_Proximi_header class="absolute top-8 left-5"/>
	<div class="absolute top-10 right-5">
		
		<button class="relative z-10 flex h-5 w-8 flex-col justify-between lg:hidden" @click="activeMenu = !activeMenu">
			<div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300" :class="{ 'translate-y-[9px] rotate-45 bg-white': activeMenu }"></div>
			<div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300" :class="{ 'bg-white opacity-0': activeMenu }"></div>
			<div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300" :class="{ '-translate-y-[9px] -rotate-45 bg-white': activeMenu }"></div>
		</button>
	</div>

	<div class="invisible opacity-0 lg:visible lg:relative lg:flex lg:h-auto lg:w-auto lg:items-center lg:bg-transparent lg:text-sm lg:font-bold lg:uppercase lg:tracking-wide lg:text-black lg:opacity-100" :class="{ '!visible opacity-100': activeMenu }" v-scroll-lock="activeMenu">
    
		<div class="flex items-center gap-4 lg:flex-row-reverse">
		<nav class="fixed inset-0 h-screen w-screen bg-secondary/100 text-2xl text-white transition-all duration-300 ease-in-out lg:py-0">
			<ul class="mt-[25vh] ml-16 lg:m-0 lg:flex">
				<li class="menu-item"><RouterLink class="menu-link" to="/map" @click="closeMenu">Map</RouterLink></li>
				<li class="menu-item"><RouterLink class="menu-link" to="/tendances" @click="closeMenu">Tendances</RouterLink></li>
				<li class="menu-item"><RouterLink class="menu-link" to="/profil" @click="closeMenu">Compte</RouterLink></li>
			</ul>
		</nav>
	</div>
</div>
  </header>

</template>