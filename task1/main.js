const vm = new Vue({
    el: '#app',
    data: {
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        guests: [],
        dataNotSendig: true,
    },
    computed: {
        fullName() {
            return this.firstName + ' ' + this.lastName;
        }
    },
    methods: {
        addGuest() {
            this.guests.push({});
        },
        removeGuest(index) {
            this.guests.splice(index, 1);
        },
        dataSend() {
            this.dataNotSendig = false;
        }
    }
})
