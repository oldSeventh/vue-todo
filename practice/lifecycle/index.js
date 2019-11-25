import Vue from 'vue'

const app = new Vue({
  el: '#root',
  template: '<div>{{text}}</div>',
  data: {
    text: 0
  },
  beforeCreate() {
    console.log(this.$el, 'beforeCreate')
  },
  created() {
    console.log(this.$el, 'created')
  },
  beforeMount() {
    console.log(this.$el, 'beforeMount')
  },
  mounted() {
    console.log(this.$el, 'mounted')
  },
  beforeUpdate() {
    console.log(this.$el, 'beforeUpdate')
  },
  updated() {
    console.log(this.$el, 'updated')
  },
  activated() {
    console.log(this.$el, 'activated')
  },
  deactivated() {
    console.log(this.$el, 'deactivated')
  },
  beforeDestroy() {
    console.log(this.$el, 'beforeDestroy')
  },
  destroyed() {
    console.log(this.$el, 'destroyed')
  }

})

app.$mount('#root')
/* setInterval(() => {
  app.text = app.text + 1;
}, 1000);*/

setTimeout(() => {
  app.$destroy()
})
