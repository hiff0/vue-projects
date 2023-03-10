export default {
    namespaced: true,
    state: {
        products: []
    },
    getters: {
        products(state) {
            return state.products;
        },
        count(state) {
            return state.products.length;
        }
    },
    mutations: {
        add(state, id_product) {
            if (state.products.indexOf(id_product) === -1) {
                state.products.push(id_product);
            }
        },
        remove(state, id_product) {
            let index = state.products.indexOf(id_product);

            if (index !== -1) {
                state.products.splice(index, 1);
            }
        },
        clear(state) {
            state.products = [];
        }
    },
    actions: {
        add(store, id_product) {
            store.commit('add', id_product);
        },
        remove(store, id_product) {
            store.commit('remove', id_product);
        },
        clear(store) {
            store.commit('clear');
        }
    }
}