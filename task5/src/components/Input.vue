<template>
    <div class="input">
        <label class="fw-bold" :class="item.class">{{ item.name }}</label>
        <br>
        <input type="text" class="w-100" v-model="item.value" @input="checkPatter">
    </div>
</template>

<script>
export default {
    name: 'app-input',
    props: ['item'],
    methods: {
        checkPatter() {
            const regexp = this.item.pattern;
            this.item.class = regexp.test(this.item.value) === true ? 'item-cool' : 'item-notcool';
        }
    },
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
</style>
