<template>
    <section class="real-app">
        <input
type="text"
               autofocus = "autofocus"
               placeholder="接下来做什么"
               @keyup.enter="addTodo">
        <Item
:todo="todo"
                v-for="todo in filteredTodos"
                :key="todo.id"
                @del="deleteTodo"/>
        <Tabs
                :filter="filter"
                :todos="todos"
                @toggle="toggleFilter"
                @cle="clearComplate"></Tabs>
      <router-view/>
    </section>
</template>
<script>
import Item from './item.vue'
import Tabs from './tabs.vue'
let id = 0
export default {
  beforeRouteEnter(to, from, next) {
    console.log('todo before enter')
    next()
  },
  beforeRouteUpdate(to, from, next) {
    console.log('todo upodate enter')
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log('todo leave enter')
    next()
  },
  data() {
    return {
      todos: [],
      filter: 'all'
    }
  },
  components: {
    Item,
    Tabs
  },
  computed: {
    filteredTodos() {
      if (this.filter === 'all') {
        return this.todos
      }
      const complated = this.filter === 'complated'
      return this.todos.filter((todo) => complated === todo.complated)
    }
  },
  methods: {
    addTodo: function(e) {
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        complated: false
      })
      e.target.value = ''
    },
    deleteTodo: function(id) {
      this.todos.splice(this.todos.findIndex((todo) => todo.id === id), 1)
    },
    toggleFilter(state) {
      this.filter = state
    },
    clearComplate: function() {
      this.todos = this.todos.filter((todo) => !todo.complated)
    }
  }
}

</script>

<style lang="stylus" scoped>
    .real-app
        width 600px
        margin 0 auto
        box-shadow 0 0 5px #666

    .add-input
        position relative
        margin 0
        width 100%
        font-size 24px
        font-family inherit
        font-weight inherit
        line-height 1.4em
        border none
        outline none
        color inherit
        box-sizing border-box
        font-smoothing antialiased
        padding 16px 16px 16px 36px
        border none
        box-shadow inset 0 -2px 1px rgba(0, 0, 0, 0.03)
</style>
