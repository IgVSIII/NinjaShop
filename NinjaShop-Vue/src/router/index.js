import Vue from 'vue';
import Router from 'vue-router';
import Start from '../components/Authorization';
import Main from '../components/Main';
import Order from '../components/Order';


Vue.use(Router);


export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Start',
            component: Start,
            props: true,
        },
        {
            path: '/main',
            name: 'Main',
            component: Main,
            props: true
        },
        {
            path: '/order',
            name: 'Order',
            component: Order,
            props: true
        }
    ]
});