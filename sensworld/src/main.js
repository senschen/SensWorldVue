import Vue from 'vue'
import App from './App.vue'

import store from './vuex/store'
import router from './router/index'

import $ from 'jquery'
window.$ = window.jQuery = $;

new Vue({
    store,
    router,
    el: '#app',
    template: '<App/>',
    components: {
        App
    }
});