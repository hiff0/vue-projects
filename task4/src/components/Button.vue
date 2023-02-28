<template>
    <div id="button">
        <button class="btn btn-success mt-4" @click="onClick" :class="buttonc">Далее</button>
    </div>
</template>

<script>

export default {
    name: 'app-button',
    props: {
        currIndexQuestion: {
            type: Number,
            required: true
        },
        buttonc: {
            type: String,
            required: true
        }
    },
    methods: {
        onClick(e) {
            this.$emit('nextquestions');
        }
    }
}
</script>