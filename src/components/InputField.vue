<template>
  <div>
    <input @input="$emit('input', $event.target.value)" class="input-field" placeholder="New Item">
  </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-field {
  background-color: lightgreen;
  border-color: transparent;
  border-radius: 7px;
  font-size: 16px;
  height: 22px;
  outline: none;
  text-align: center;
  width: 186px;
}
</style>