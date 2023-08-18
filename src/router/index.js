import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Farmers from '../components/Farmers.vue';
import Products from '../components/Products.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/farmers',
    name: 'Farmers',
    component: Farmers,
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
