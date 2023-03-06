<template>
    <table class="table table-bordered">
        <tr v-for="item of inputData">
            <td>{{ item.name }}</td>
            <td>{{ item.value }}</td>
        </tr>
    </table>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'app-table',
    computed: {
        ...mapGetters([
            'inputData'
        ])
    }
}
</script>