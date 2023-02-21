
const vm = new Vue({
    el: '#app',
    data: {
        agree: false,
        spam: false,
        radioValue: '',
        dataIsSend: false,
        isScroll: false
    },
    methods: {
        sendData() {
            this.dataIsSend = true;
        },
        isAgree() {
            return this.agree === true ? 'Yes' : 'No'
        },
        isSpam() {
            return this.spam === true ? 'Yes' : 'No'
        },
        onScroll({ target: { scrollTop, clientHeight, scrollHeight } }) {
            if (scrollTop + clientHeight >= scrollHeight) {
                console.log(document.getElementsByClassName('scroll'));
                this.isScroll = true;
            }
        }
    }
})