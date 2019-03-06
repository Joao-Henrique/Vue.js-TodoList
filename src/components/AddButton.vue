<template>
  <div>
    <button @click="submit">
      <span class="icon">+</span>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    submit() {
      this.$emit("submited");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  background-color: lightgreen;
  border-color: transparent;
  border-radius: 30px;
  height: 28px;
  margin-left: -20px;
  outline: none;
  transition: 1s ease-in-out;
}
button:hover {
  background-color: white;
  color: green;
  cursor: pointer;
  font-weight: bold;
  outline: none;
  transition: 0.2s ease-in-out;
}
.icon {
  font-size: 20px;
}
</style>
