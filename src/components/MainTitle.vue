<template>
  <div class="titleDiv">
    <h1 v-text="title"></h1>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style>
  .titleDiv {
    background-color: lightgreen;
    font-size: 20px;
    margin-bottom: 10px;
    text-align: center;
  }
  h1 {
    margin: 0px;
    padding-bottom: 10px;
    padding-top: 10px;
  }
</style>