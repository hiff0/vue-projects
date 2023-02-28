<template>
    <div class="table mt-5">
        <h2>Итого</h2>
        <table class="table table-bordered">
            <tr>
                <th>Вопрос</th>
                <th>Ваш ответ</th>
            </tr>
            <tr>
                <td>Какой тег задаёт ссылку?</td>
                <td>{{ answers.radioValue }}</td>
            </tr>
            <tr>
                <td>Какие из этих тегов строчные?</td>
                <td>{{ getAnswer() }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'app-table',
    props: {
        answers: {
            type: Object,
            required: true
        }
    },
    methods: {
        getAnswer() {
            return [this.answers.a, this.answers.div, this.answers.span, this.answers.img];
        }
    }

}
</script>