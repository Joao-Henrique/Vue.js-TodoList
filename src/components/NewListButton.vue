<template>
  <div class="button-container">
    <button @click="submit">
      <span class="icon">+</span>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    submit() {
      this.$emit("clicked");
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
  font-weight: bold;
  height: 60px;
  outline: none;
  transition: 1s ease-in-out;
  width: 60px;
}
button:hover {
  background-color: white;
  border-color: green;
  border-width: 4px;
  color: green;
  cursor: pointer;
  font-weight: bold;
  outline: none;
  transition: 0.2s ease-in-out;
}
.icon {
  font-size: 40px;
  position: relative;
  top: -3px;
}
.button-container {
  bottom: 5vh;
  position: absolute;
  right: 7vw;
}
</style>
