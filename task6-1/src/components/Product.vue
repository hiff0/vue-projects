<template>
    <div>
        <h2>Product title</h2>
        <div class="price">{{ totalPrise }}</div>
        <hr>
        <button class="btn btn-warning" @click="decrement">-1</button>
        <button class="btn btn-success" @click="increment">+1</button>
        <input type="text" :value="cnt" @input="onInput">
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'app-product',
    computed: mapGetters([
        'cnt',
        'totalPrise'
    ]),
    // {
    //     totalPrise() {
    //         return this.$store.getters.totalPrise;
    //     }
    // },
    methods: {
        ...mapMutations([
            'increment',
            'decrement'
        ]),
        onInput(e) {
            this.$store.commit('setCnt', e.target.value)
        }
        // onIncrement() {
        //     this.$store.commit('increment');
        // },
        // onDecrement() {
        //     this.$store.commit('decrement')
        // }
    }
}
</script>