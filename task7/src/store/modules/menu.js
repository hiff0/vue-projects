export default {
    namespaced: true,
    state: {
        items: [
            {
                url: '/products',
                text: 'Products List'
            },
            {
                url: '/card',
                text: 'Your Card'
            },
            {
                url: '/checkout',
                text: 'Order Now'
            }
        ]
    },
    getters: {
        items(state) {
            return state.items;
        }
    },
    mutations: {

    },
    actions: {

    }
}