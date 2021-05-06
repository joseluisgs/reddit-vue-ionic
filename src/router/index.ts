import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/reddit',
  },
  {
    path: '/reddit',
    component: () => import('../views/Reddit.vue'),
  },
  {
    path: '/acercade',
    component: () => import('../views/AcercaDe.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
