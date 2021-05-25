import Vuex from 'vuex';
import Vue from 'vue';
import Vue2TouchEvents from 'vue2-touch-events';
import createPersistedState from 'vuex-persistedstate';
import Fib from './modules/fib';


Vue.use(Vue2TouchEvents, {
    disableClick: true,
});
Vue.use(Vuex);
Vue.use(require('vue-moment'));

export default new Vuex.Store({
    modules: {
        fib: Fib
    },
    plugins: [createPersistedState()],
})

