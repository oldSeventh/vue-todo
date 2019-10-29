<template>
    <section>
        <input type="text" autofocus = "autofocus" placeholder="接下来做什么" @keyup.enter="addTodo">
        <Item :todo="todo"
                v-for="todo in todos"
                :key="todo.id"
                @del="deleteTodo"/>
        <Tabs :filter="filter" :todos="todos"></Tabs>
    </section>
</template>
<script>
    import Item from './item.vue'
    import Tabs from './tabs.vue'
    let id = 0
    export default {
        data(){
            return{
                todos:[],
                filter:'all'
            }
        },
        components:{
            Item,
            Tabs
        },
        methods:{
            addTodo:function (e) {
                this.todos.unshift({
                    id: id++,
                    content: e.target.value.trim(),
                    complated: false,
                })
                e.target.value=""
            },
            deleteTodo:function (id) {
                this.todos.splice(this.todos.findIndex(todo => todo.id === id),1)
            }
        }
    }

</script>

<style type="">

</style>