<template>
    <div>
        <span>
            {{unFinishedTodoLength}} items left
        </span>
        <span>
            <span v-for="state in states"
                    :key="state"
                  :class="[state ,filter === state ?'active':'']"
                    @click="toggleFilter(state)">
                {{state}}
            </span>
        </span>
        <span @click="clearAllComplated()">claer complated </span>
    </div>
</template>

<script>
    export default {
        props:{
            filter: {
                type: String,
                required: true
            },
            todos:{
                type: Array,
                required: true
            }
        },
        computed:{
            unFinishedTodoLength(){
                return this.todos.filter(todo => !todo.complated).length
            }
        },
        data() {
            return {
                states:['all','active','complated']
            }
        },
        methods:{
            toggleFilter:function () {

            },
            clearAllComplated:function (){

            }
        }

    }
</script>