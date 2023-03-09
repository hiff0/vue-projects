import Vue from "vue";
import Vuex from 'vuex';
import card from "./modules/card";
import products from "./modules/products";
import menu from "./modules/menu";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        card,
        products,
        menu
    },
    strict: process.env.NODE_ENV !== 'production'
})