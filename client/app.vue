<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
        <!--<todo></todo>-->
        <p>{{fullName}} {{count}}</p>
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
import {
    mapState,
    mapGetters,
    mapActions,
    mapMutations
} from 'vuex'

export default {
  components: {
    Header,
    // Todo ,
    Footer
  },
  methods: {
      ...mapActions(['updateCountAsync']),
      ...mapMutations(['updateCount'])
  },
  mounted() {
      console.log(this.$store)
      this.updateCountAsync({
          num: 5,
          time: 2000
      })
      let i = 1
      /*setInterval(() => {
        this.$store.commit('updateCount',{
            num: i++,
            num2: 2
        })
      },1000)*/
  },
  computed: {
      ...mapState(['count'])
      /*count(){
          return this.$store.state.count
      }*/,
      fullName(){
          return this.$store.getters.fullName
      }
  }
}
</script>

<style>

</style>
