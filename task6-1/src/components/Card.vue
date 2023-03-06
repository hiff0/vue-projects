<template>
    <div>
        {{ cnt }}
    </div>
</template>

<script>
export default {
    name: 'app-card',
    computed: {
        cnt() {
            return this.$store.getters.cnt;
        }
    }
}
</script>