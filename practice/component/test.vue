<template>
  <div>
    <p @click="testFor">{{text}}</p>
  </div>
</template>

<script>
export default {
  el: '#root',
  date() {
    return {
      aaa: {
        what: '',
        why: ''
      },
      text: '123'
    }
  },
  methods: {
    testFor() {
      this.aaa.forEach((f) => {
        console.log(this.aaa.f + ' ' + f)
      })
    }

  }
}
</script>
