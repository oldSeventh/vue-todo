import Vue from 'vue';

const compoent = {
  props: {
    active: Boolean,
    propOne: String,
  },
  template: '<div>' +
              '<input type="text" v-model.number="text"/>' +
              '<span @click="handleChange">{{propOne}}</span>' +
              '<span v-show="active">see me if  </span>' +
            '</div>',
  data() {
    return {
      text: 0,
    };
  },
  methods: {
    handleChange() {
      this.$emit('change');
    },
  },
};

// Vue.component('CompOne', compoent);

new Vue({
  el: '#root',
  data: {
    prop1: 'text1',
  },
  template: '<div>' +
    '<comp-one :active="true" :prop-one="prop1" @change="handleChange">' +
    '</comp-one>' +
    '<comp-one :active="false" propOne="test2"></comp-one>' +
    '</div>',
  components: {
    CompOne: compoent,
  },
  methods: {
    handleChange() {
      console.log('aaaaaaa');
      this.prop1 += 1;
    },
  },
});
