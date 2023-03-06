<template>
    <div class="w-100 d-flex flex-column">
        <div class="row mt-3">
            <div class="col">
                <div class="input">
                    <label class="fw-bold" :class="item.class">{{ item.name }}</label>
                    <br>
                    <input type="text" class="w-100" @input="onInput">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app-input',
    props: ['item', 'index'],
    computed: {
        // onInput(e) {
        //     const regexp = this.item.pattern;
        //     const itemClass = regexp.test(this.item.value) === true ? 'item-cool' : 'item-notcool';
        //     this.$store.commit('setValue', {
        //         index: this.index,
        //         value: e.target.value,
        //         class: itemClass
        //     })
        // }
    },
    methods: {
        //FIXED проверяет значение после второго ввода
        onInput(e) {
            this.$store.commit('setValue', {
                index: this.index,
                value: e.target.value,
            })
            const regexp = this.item.pattern;
            const itemClass = regexp.test(this.item.value) === true ? 'item-cool' : 'item-notcool';
            this.$store.commit('setClass', {
                index: this.index,
                class: itemClass
            })
        }
    },
}
</script>

