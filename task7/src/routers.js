import Vue from "vue";
import VueRouter from 'vue-router';
import ProductList from './components/ProductList';
import Card from './components/Card';
import NotFound from './components/NotFound';
import Product from './components/Product'

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
        component: ProductList
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
        path: '*',
        component: NotFound
    }
]

export const router = new VueRouter({
    routes,
    mode: 'history'
})