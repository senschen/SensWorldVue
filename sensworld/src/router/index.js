import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const Welcome = resolve => require(['../components/Welcome.vue'], resolve);
import Sky from '../components/Sky.vue';
const Intro = resolve => require(['../components/Intro.vue'], resolve);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: Welcome
        },
        {
            path: '/sky',
            name: 'sky',
            component: Sky
        },
        {
            path: '/intro',
            name: 'intro',
            component: Intro
        }
    ],
    beforeEach (to, from, savedPosition) {

    }
});
router.beforeEach((to, from, next) => {
    // document.body.scrollTop = 0;
    console.log(to);
    next()
});

export default router;