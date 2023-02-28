<template>
    <div class="checkbox mt-4">
        <input type="checkbox" id="a" v-model="answers.a">
        <label for="a">a</label>
        <br>
        <input type="checkbox" id="div" v-model="answers.div">
        <label for="div">div</label>
        <br>
        <input type="checkbox" id="span" v-model="answers.span">
        <label for="span">span</label>
        <br>
        <input type="checkbox" id="img" v-model="answers.img">
        <label for="img">img</label>
    </div>
</template>

<script>
export default {
    name: 'app-checkbox',
    props: {
        answers: {
            type: Object,
            required: true
        }
    }
}
</script>