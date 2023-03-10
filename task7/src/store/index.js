import Vue from "vue";
import Vuex from 'vuex';
import card from "./modules/card";
import products from "./modules/products";
import menu from "./modules/menu";
import inputs from "./modules/inputs";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        card,
        products,
        menu,
        inputs
    },
    strict: process.env.NODE_ENV !== 'production'
})