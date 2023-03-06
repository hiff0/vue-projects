import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        inputData: [
            {
                name: 'Name',
                value: '',
                pattern: /^[a-zA-Z]{2,30}$/,
                class: ''
            },
            {
                name: 'Phone',
                value: '',
                pattern: /^[0-9]{7,14}$/,
                class: ''
            },
            {
                name: 'Email',
                value: '',
                pattern: /.+/,
                class: ''
            },
            {
                name: 'Some Field 1',
                value: '',
                pattern: /.+/,
                class: ''
            },
            {
                name: 'Some Field 2',
                value: '',
                pattern: /.+/,
                class: ''
            },
        ],
        dataNotSendig: true,
        buttonText: 'Send Data'
    },
    getters: {
        inputData(state) {
            return state.inputData;
        },
        dataNotSendig(state) {
            return state.dataNotSendig;
        },
        buttonText(state) {
            return state.buttonText;
        },
        name(state) {
            return state.inputData[0].value
        }
    },
    mutations: {
        dataSend(state) {
            state.dataNotSendig = false;
        },
        setValue(state, payload) {
            state.inputData[payload.index].value = payload.value;
            // state.inputData[payload.index].class = payload.class;
        },
        setClass(state, payload) {
            state.inputData[payload.index].class = payload.class;
        },
        loading(state) {
            state.buttonText = 'Loading'
        }
    },
    actions: {
        onDataSend(store) {
            store.commit('loading')
            setTimeout(() => {
                store.commit('dataSend')
            }, 1000)
        }
    },
    strict: true
}) 