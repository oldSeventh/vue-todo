import Vue from 'vue'

const component = {
  props: ['value'],
  template: '<div>' +
              '<input type="text" @input="handleInput" :value="value"></input>' +
            '</div>',
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    }
  }

}

new Vue({
  el: '#root',
  template: '<div>' +
              // '<comp-one :value="value" @input="value = arguments[0]"></comp-one>' +
              '<comp-one v-model="value"></comp-one>' +
            '</div>',
  data: {
    value: '123'
  }, /* data() {
    return {
      value: '123'
    }
  }*/
  components: {
    CompOne: component
  }
})
