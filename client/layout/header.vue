<template>
    <header :class="$style['main-header']">
        <h1>JTodo</h1>
    </header>
</template>
<script>
export default {
  mounted() {
    console.log(this.$style);
  },
};
</script>
<style lang="css" module>
    .main-header {
        text-align: center;
    }
    .main-header h1{
        font-size: 100px;
        color: rgba(175,47,47,0.4);
        font-weight: 400;
        margin: 20px;
    }

</style>
