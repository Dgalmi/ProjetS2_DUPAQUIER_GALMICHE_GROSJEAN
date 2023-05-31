import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import MapView from '@/views/MapView.vue';
import LoginView from '@/views/LoginView.vue';
import TendancesView from '@/views/TendancesView.vue';
import { usePocketBase } from "@/composables/usePockeBase";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/map',
      name: 'map',
      component: MapView,
      meta: {reqAuth: true}
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/tendances',
      name: 'tendances',
      component: TendancesView,
    },
  ],
});

router.beforeEach((to, from, next) => {
    const {pb} = usePocketBase();
  
    if(to.meta?.reqAuth && !pb.value.authStore.isValid) {
      router.replace("/login")
    }else {
      next();
    }
  });
  
  export default router