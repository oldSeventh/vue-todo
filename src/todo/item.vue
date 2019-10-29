<template>
    <div>
        <input
                type="checkbox"
                v-model="todo.complated"
        >
        <label>{{todo.content}}</label>
        <button @click="deleteTodo()"></button>
    </div>
</template>

<script>
    export default {
        props: {
            todo: {
                type: Object,
                required: true,
            }

        },
        methods:{
            deleteTodo: function () {
                this.$emit("del",this.todo.id)
            }
        }
    }
</script>