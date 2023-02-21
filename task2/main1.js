const vm = new Vue({
    el: '#app',
    data: {
        info: [
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
        },
        input(value, index) {
            console.log(1);
            const regexp = this.info[index].pattern;
            this.info[index].class = regexp.test(value) === true ? 'item-cool' : 'item-notcool';
        }
    },
    computed: {

        getWidth() {
            let done = 0;
            for (const item of this.info) {
                done += item.class === 'item-cool' ? 1 : 0;
            }

            const progressWidth = (100 / this.info.length) * done;
            this.buttonClass = progressWidth === 100 ? '' : 'disabled';

            return { width: progressWidth + '%' }
        }
    }
})
