
Vue.directive('timer', {
    bind(el, options) {
        let timer;
        let isRun = false;
        let timeout = 0;
        let count = 0;
        el.style.fontSize = '20px'

        if (!isNaN(+options.arg)) {
            timeout = parseInt(options.arg);
        }

        for (const name in options.modifiers) {
            if (name === 'run') {
                isRun = true;
            }
            if (!isNaN(+name)) {
                count = parseInt(name);
            }
        }

        const plusTimeout = timeout;
        count = count === 0 ? 100 : count;

        for (let i = 0; i < count; i += 1) {
            if (isRun) {
                options.value.call(this, el, timeout);
                isRun = false;
            } else {
                console.log(timeout);
                timer = setTimeout(() => {
                    options.value.call(this, el, timer);
                }, timeout)
                timeout += plusTimeout;
            }
        }
    }
})

const vm = new Vue({
    el: '#app',
    data: {

    },
    methods: {
        onTimer(el, timer) {
            const size = parseInt(el.style.fontSize.split('px')[0]);
            const fontSize = size + 5;
            el.style.fontSize = fontSize + 'px';
            clearTimeout(timer);
        }
    }
})