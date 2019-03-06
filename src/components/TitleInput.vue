<template>
  <input v-model="title" @input="$emit('input', $event.target.value)" class="input-field">
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-field {
  background-color: lightgreen;
  border-color: transparent;
  border-radius: 7px 0 0 7px;
  font-size: 18px;
  height: 22px;
  margin: 29px 0 29px 0;
  outline: none;
  text-align: center;
  width: 155px;
}
</style>