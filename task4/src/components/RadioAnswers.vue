<template>
    <div class="radio mt-4">
        <input type="radio" id="a" value="a" v-model="radioValue" @input="onInput('a')">
        <label for="a">a</label>
        <br>
        <input type="radio" id="div" value="div" v-model="radioValue" @input="onInput('div')">
        <label for="div">div</label>
        <br>
        <input type="radio" id="span" value="span" v-model="radioValue" @input="onInput('span')">
        <label for="span">span</label>
        <br>
        <input type="radio" id="img" value="img" v-model="radioValue" @input="onInput('img')">
        <label for="img">img</label>
    </div>
</template>

<script>
export default {
    name: 'app-radio',
    props: {
        radioValue: {
            type: String,
            required: true
        }
    },
    methods: {
        onInput(el) {
            this.$emit('oninput', el);
        }
    }
}
</script>
