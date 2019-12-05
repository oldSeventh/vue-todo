<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
        <!--<todo></todo>-->
        <p>{{count}}</p>
        <router-link to="/app/123">app123</router-link>
        <router-link to="/app/456">app456</router-link>
        <router-link to="/login">login</router-link>
        <router-view/>
        <Footer></Footer>
        <router-view name="a"/>
    </div>
</template>

<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'
export default {
  components: {
    Header,
    // Todo ,
    Footer
  },
  mounted() {
      console.log(this.$store)
      let i = 1
      setInterval(() => {
        this.$store.commit('updateCount',i++)
      },1000)
  },
  computed: {
      count(){
          return this.$store.state.count
      }
  }
}
</script>

<style>

</style>
