<script setup lang="ts">
import IconInsta from '@/components/icons/icon_insta.vue'
import IconTwitter from '@/components/icons/icon_twitter.vue'
import IconFacebook from '@/components/icons/icon_facebook.vue'
import Logo_Proximi from '@/components/icons/icon_logo_proximi_food_xl.vue'
import Logo_Proximi_header from '@/components/icons/icon_logo_proximi_food_xxs.vue'
import icon_logo_mmi from '@/components/icons/icon_logo_mmi.vue'

</script>

<template>
<footer class="bg-secondary/100">
  <Logo_Proximi class="max-lg:m-auto py-5" />
    <div class="max-lg:block text-white text-center lg:flex lg:justify-between lg:mx-28 lg:col-span-4">
      <div class="my-10">
        <h4 class="font-bold text-xl lg:order-2">Navigation</h4>
        <nav>
          <ul class="text-xl">
            <li><RouterLink to="/connexion">Home</RouterLink></li>
            <li><RouterLink to="/connexion">À propos</RouterLink></li>
            <li><RouterLink to="/connexion">Services</RouterLink></li>
            <li><RouterLink to="/connexion">Contact</RouterLink></li>
          </ul>
        </nav>
      </div>
     <div class="my-10 lg:order-3">
          <h4 class="font-bold text-xl">Services</h4>
          <nav>
            <ul class="text-xl">
              <li>Recettes</li>
              <li>Map intéractive</li>
              <li>Profils</li>
            </ul>
          </nav>
        </div>
        <div class="my-10 lg:order-4">
            <h4 class="font-bold text-xl">Accessibilité</h4>
            <nav>
              <ul class="text-xl">
                <li>Mentions légales</li>
                <li>CGV</li>
                <li>Cookies</li>
              </ul>
            </nav>
          </div>
          <div class="flex space-x-10 justify-center py-5 lg:order-first">
            <IconFacebook />
            <IconTwitter />
            <IconInsta />
          </div>
        </div>
          <div class="flex justify-between">
            <Logo_Proximi_header/>
            <icon_logo_mmi />
          </div>
    
  </footer>
  </template>



