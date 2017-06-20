import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const Welcome = resolve => require(['../components/Welcome.vue'], resolve);
import Test from '../components/Test.vue'
import Sky from '../components/Sky.vue'
const User = resolve => require(['../components/User.vue'], resolve);
const Wait = resolve => require(['../components/Wait.vue'], resolve);

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
            path: '/test',
            name: 'test',
            component: Test
        },
        {
            path: '/user/:id',
            name: 'user',
            component: User
        },
        {
            path: '/wait/:id',
            name: 'wait',
            component: Wait
        },
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