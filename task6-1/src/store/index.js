import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        cnt: 0,
        prise: 1000,
        orderState: null
    },
    getters: {
        cnt(state) {
            return state.cnt;
        },
        prise(state) {
            return state.prise;
        },
        totalPrise(state) {
            return state.cnt * state.prise;
        },
        orderState(state) {
            return state.orderState;
        }
    },
    mutations: { // Не работает с асинхронными операциями
        increment(state) {
            state.cnt += 1;
        },
        decrement(state) {
            if (state.cnt > 0) {
                state.cnt -= 1;
            }
        },
        orderSend(state) {
            state.orderState = 'pending'
        },
        orderDone(state) {
            state.orderState = 'done'
        },
        setCnt(state, count) {
            state.cnt = count < 0 ? 0 : count;
        }
    },
    actions: {
        sendOrder(store, payload) {
            store.commit('orderSend')
            console.log(payload);
            setTimeout(() => {
                store.commit('orderDone')
            }, 1000)
        }
    },
    strict: true //Отключаем в продакшене
})