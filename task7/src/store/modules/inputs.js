export default {
    namespaced: true,
    state: {
        inputData: [
            {
                name: 'Name',
                value: '',
                pattern: /^[a-zA-Z]{2,30}$/,
                class: ''
            },
            {
                name: 'Card Number',
                value: '',
                pattern: /^[0-9]{7,14}$/,
                class: ''
            },
            {
                name: 'Phone',
                value: '',
                pattern: /^[0-9]{7,14}$/,
                class: ''
            },
        ],
        dataNotSendig: true,
        buttonText: 'Send Data',
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
        getOneItem: (state) => (index) => {
            return state.inputData[index];
        },
        getWidth(state) {
            let done = 0;
            for (const item of state.inputData) {
                done += item.class === 'item-cool' ? 1 : 0;
            }

            const progressWidth = (100 / state.inputData.length) * done;
            // this.buttonDisabled = progressWidth !== 100;
            return { width: progressWidth + '%' };
        }
    },
    mutations: {
        dataSend(state) {
            state.dataNotSendig = false;
        },
        setValue(state, payload) {
            state.inputData[payload.index].value = payload.value;
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
            store.commit('loading');

            setTimeout(() => {
                store.commit('dataSend');
            }, 1000)
        },
        onInput(store, payload) {
            store.commit('setValue', {
                index: payload.index,
                value: payload.value,
            })
            const item = store.getters['getOneItem'](payload.index);
            const regexp = item.pattern;
            const itemClass = regexp.test(item.value) === true ? 'item-cool' : 'item-notcool';
            store.commit('setClass', {
                index: payload.index,
                class: itemClass
            })
        }
    }
}