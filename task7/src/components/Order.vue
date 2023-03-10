<template>
    <div>
        <h1>Order now</h1>
        <hr>
        <div v-if="empty" class="alert alert-warning">Your card is empty</div>
        <template v-else>
            <template v-if="dataNotSendig">
                <div class="progres_bar mt-3" :style="getWidth"></div>
                <div v-for="(item, index) in inputData" :key="index">
                    <label class="fw-bold" :class="item.class">{{ item.name }}</label>
                    <br>
                    <input type="text" class="w-100" @input="onInput($event, index)">
                </div>
                <button type="button" class="btn btn-success mt-3" :disabled="buttonDisabled" @click="onDataSend">
                    {{ buttonText }}
                </button>
            </template>
            <h3 v-else>Data is send</h3>
        </template>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('inputs', [
            'inputData',
            'dataNotSendig',
            'buttonText',
            'getWidth'
        ]),
        buttonDisabled() {
            return this.getWidth.width !== '100%';
        },
        ...mapGetters('products', {
            productAll: 'items'
        }),
        ...mapGetters('card', {
            productInCard: 'products'
        }),
        products() {
            return this.productAll.filter((product) => this.productInCard.indexOf(product.id_product) !== -1)
        },
        empty() {
            return this.products.length === 0;
        }
    },
    methods: {
        ...mapActions('inputs', [
            'onInput',
            'onDataSend'
        ]),
        onInput(e, index) {
            const value = e.target.value;
            this.$store.dispatch('inputs/onInput', {
                value,
                index
            })
        },
    }
}
</script>

<style>
label {
    font-weight: bold;
}

.item-cool::after {
    content: "\f087";
    font-family: FontAwesome;
    color: #3dd535;
    margin-left: 5px;
}

.item-notcool::after {
    content: "\f00d";
    font-family: FontAwesome;
    color: #bb4444;
    margin-left: 5px;
}

.progres_bar {
    height: 30px;
    background-color: #523fb2;
    border-radius: 5px;
}
</style>