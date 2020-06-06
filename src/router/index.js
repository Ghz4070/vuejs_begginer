import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '@/views/Home.vue'
import Profile from '@/views/Profile.vue'

import NotFound from '@/components/NotFound.vue'

const routes = [
    {
        name: "NotFound",
        path: '*', // signifie peut importe l'url qui n'existe pas sa renvoie vers un 404
        component: NotFound,
    },
    {
        name: "Home",
        path: '/',
        component: Home,
        // we can choose fade-in-right / fade-in-left / fade-in-up
        meta: { transition: 'fade-in-right' },
    },
    {
        name: "Profile",
        path: '/profile',
        component: Profile,
        // overwrite default transition
        meta: { transition: 'fade' },
    },
]; // les routes se strock dans un array

const router = new VueRouter({
    routes,
    mode: 'history',
    base: process.env.BASE_URL,
});

export default router;