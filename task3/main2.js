
Vue.component('app-input', {
    props: ['item'],
    template: `
    <div class="input">
        <label class="fw-bold" :class="item.class">{{ item.name }}</label>
        <br>
        <input type="text" class="w-100" v-model="item.value" @input="checkPatter">
    </div>`,
    methods: {
        checkPatter() {
            const regexp = this.item.pattern;
            this.item.class = regexp.test(this.item.value) === true ? 'item-cool' : 'item-notcool';
        }
    },
})

const inputData = [
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
]


const vm = new Vue({
    el: '#app',
    data: {
        inputData,
        email: '',
        firstName: '',
        phone: '',
        someField1: '',
        someField2: '',
        dataNotSendig: true,
        buttonClass: 'disabled'
    },
    methods: {
        dataSend() {
            this.dataNotSendig = false;
        }
    },
    computed: {
        getWidth() {
            let done = 0;
            for (const item of this.inputData) {
                done += item.class === 'item-cool' ? 1 : 0;
            }

            const progressWidth = (100 / this.inputData.length) * done;
            this.buttonClass = progressWidth === 100 ? '' : 'disabled';

            return { width: progressWidth + '%' }
        }
    }
})
