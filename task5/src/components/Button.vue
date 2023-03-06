<template>
    <div class="row mt-3">
        <div class="col">
            <button type="button" class="btn btn-success" :disabled="buttonDisabled" @click="dataSend">{{ buttonText
            }}</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app-button',
    props: {
        buttonDisabled: {
            type: Boolean,
            required: true
        }
    },
    computed: {
        buttonText() {
            return this.$store.getters.buttonText
        }
    },
    methods: {
        dataSend() {
            this.$store.dispatch('onDataSend')
        }
    }
}
</script>