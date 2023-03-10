import Vue from "vue";
import VueRouter from 'vue-router';
import ProductList from './components/ProductList';
import Card from './components/Card';
import NotFound from './components/NotFound';
import Product from './components/Product';
import Order from './components/Order';

Vue.use(VueRouter);

const routes = [
    {
        path: '',
        redirect: {
            name: 'products'
        }
    },
    {
        name: 'products',
        path: '/products',
        component: ProductList,
        // beforeEnter(from, to, next) {
        //     console.log(1);
        //     next();
        // }
    },
    {
        path: '/products/:id',
        component: Product
    },
    {
        path: '/card',
        component: Card
    },
    {
        path: '/checkout',
        component: Order
    },
    {
        path: '*',
        component: NotFound
    }
]

export const router = new VueRouter({
    routes,
    mode: 'history'
})