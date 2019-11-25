<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
        <!--<todo></todo>-->
        <router-link :to="{name: 'app'}">app</router-link>
        <router-link to="/login">login</router-link>
        <router-view/>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'
export default {
  components: {
    Header,
    // Todo,
    Footer
  }
}
</script>

<style>

</style>
